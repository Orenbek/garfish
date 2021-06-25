/* eslint-disable indent */
// https://drafts.csswg.org/css-animations-1/#typedef-single-animation
// https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation#%E8%AF%AD%E6%B3%95

// time: s | ms
const timeReg = /^[-\d\.]+(s|ms)$/;
function isTime(p: string) {
  return timeReg.test(p);
}

// single-animation-iteration-count: infinite | <number>
const numberReg = /^[-\d\.]+$/;
function isIterationCount(p: string) {
  return p === 'infinite' || numberReg.test(p);
}

// single-animation-play-state: running | paused
function isPlayState(p: string) {
  return p === 'running' || p === 'paused';
}

// time-function: ease | ease-in | ease-out | ease-in-out | linear |  step-start | step-end | cubic-bezier() | steps()
function isTimeFunction(p: string | Props) {
  if (Array.isArray(p)) return true;
  switch (p) {
    case 'ease':
    case 'ease-in':
    case 'ease-out':
    case 'ease-in-out':
    case 'linear':
    case 'step-start':
    case 'step-end':
    case 'cubic-bezier':
    case 'steps':
      return true;
    default:
      return false;
  }
}

// single-animation-direction: normal | reverse | alternate | alternate-reverse
function isDirection(p: string) {
  switch (p) {
    case 'normal':
    case 'reverse':
    case 'alternate':
    case 'alternate-reverse':
      return true;
    default:
      return false;
  }
}

// single-animation-fill-mode: none | forwards | backwards | both
function isFillMode(p: string) {
  switch (p) {
    case 'none':
    case 'forwards':
    case 'backwards':
    case 'both':
      return true;
    default:
      return false;
  }
}

// https://developer.mozilla.org/zh-CN/docs/Web/CSS/custom-ident#%E8%AF%AD%E6%B3%95
// 配合 parser，只需要过滤关键字和 token 里面的特殊符号
const symbols = /[,'"\(\)!;]/;
function isLegalName(p: string) {
  if (symbols.test(p)) return false;
  switch (p) {
    case 'unset':
    case 'initial':
    case 'inherit':
    case 'none':
      return false;
    default:
      return true;
  }
}

// none | keyframes-name: <custom-ident> | <string>
function isName(p: string) {
  if (
    !(
      isTime(p) ||
      isPlayState(p) ||
      isIterationCount(p) ||
      isFillMode(p) ||
      isDirection(p) ||
      isTimeFunction(p)
    )
  ) {
    return isLegalName(p);
  }
  return false;
}

function tokenizer(input: string) {
  let buf = '';
  const tokens = [];
  const push = () => {
    buf && tokens.push(buf);
    buf = '';
  };

  for (const char of input) {
    if (char === ',' || char === ')' || char === ';') {
      push();
      buf += char;
      push();
    } else if (char === '(') {
      push();
      if (tokens[tokens.length - 1] === ' ') {
        if (__DEV__ && !__TEST__) {
          console.error(`[Garfish warn]: Invalid property value: "${input}"`);
        }
        return false;
      }
      buf += char;
      push();
    } else if (char === ' ') {
      push();
      if (tokens[tokens.length - 1] !== ' ') {
        tokens.push(' ');
      }
    } else {
      buf += char;
    }
  }
  push();
  return tokens;
}

function parse(tokens: Array<string>) {
  let mode = 1; // 1 | 2 | 3
  let scope = [];
  let stash = false;
  const parent = [];
  scope[0] = parent;

  const up = () => {
    scope[0].push(scope);
    scope = scope[0];
  };

  const down = () => {
    const ns = [];
    ns[0] = scope;
    scope = ns;
  };

  const parallel = () => {
    scope[0].push(scope);
    scope = [];
    scope[0] = parent;
  };

  const toThreeMode = (t: string) => {
    mode = 3;
    down();
    scope.push(t);
  };

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (mode === 1) {
      if (t === ',') {
        mode = 2;
        stash = false;
        scope.push(t);
      } else if (t === '(') {
        toThreeMode(t);
      } else if (t === ' ') {
        stash = true;
      } else {
        stash && parallel();
        stash = false;
        scope.push(t);
      }
    } else if (mode === 2) {
      if (t === '(') {
        toThreeMode(t);
      } else if (t === ' ') {
        if (tokens[i - 1] !== ',') {
          mode = 1;
          stash = true;
        }
      } else {
        scope.push(t);
      }
    } else if (mode === 3) {
      if (t === ')') {
        mode = 2;
        scope.push(t);
        up();
      } else {
        scope.push(t);
      }
    }
  }
  parallel();
  return parent;
}

type Props = Array<string | Props>;
function stringify(tree: Array<Props>, prefix: string) {
  let output = '';
  const splice = (p) => (isName(p) ? `${p}-${prefix}` : p);

  const child = (ps: Array<string>) => {
    let buf = '';
    for (let i = 1; i < ps.length; i++) {
      buf += ps[i];
    }
    return buf;
  };

  tree.forEach((ps) => {
    if (ps.length === 2) {
      // prettier-ignore
      output += (
        Array.isArray(ps[1])
          ? child(ps[1] as Array<string>)
          : splice(ps[1])
      ) + ' ';
    } else {
      for (let i = 1; i < ps.length; i++) {
        const next = ps[i + 1];
        const nextIsArray = Array.isArray(next);
        // prettier-ignore
        let cur = Array.isArray(ps[i])
          ? child(ps[i] as Array<string>)
          : nextIsArray
            ? ps[i]
            : splice(ps[i] as string);

        if (next === ',' || next === ';') {
          // 不加空格
        } else if (nextIsArray) {
          const fillUp = ps[i + 2] === ',' ? '' : ' ';
          cur += `${child(next as Array<string>)}${fillUp}`;
          i++;
        } else {
          cur += ' ';
        }
        output += cur;
      }
    }
  });
  return output.trim();
}

export function processAnimation(input: string, prefix: string) {
  if (!input || !prefix) return input;
  const tokens = tokenizer(input);
  // 如果语法不正确，就直接返回原文本
  if (tokens === false) {
    return input;
  }
  const tree = parse(tokens);
  return stringify(tree, prefix);
}