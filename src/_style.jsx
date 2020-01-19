
/* Variables */

// FONTS
export const fontOswald = "'Oswald', sans-serif";
export const fontHeding = fontOswald;
export const fontYugo = '"Sawarabi Gothic", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "メイリオ", sans-serif';

// COLORS
export const black = '#0D1126'
export const blue = '#59B7D1'
export const green = '#8DCECA'
export const white = '#FAF7DD'
export const yellow = '#FADC40'
export const red = '#D05384'
export const brown = '#E4BD82'

// EASING
export const easeinout = 'cubic-bezier(.63, .32, .35, .63)';
export const easeout = 'cubic-bezier(.4,.51,.29,.99)';
export const easeoutquart = 'cubic-bezier(0, 0.21, 0, 0.99)';
export const easein = 'cubic-bezier(.7, .11, .85, .28)';

// EASING
export const baseDurationTime = '0.4s';

/* mixin */

export　const breakP = 768;
export　const pcMin = 1280;

export const mq = {
  pc: `@media (min-width: ${breakP + 1}px)`,
  pcMin: `@media (max-width: ${pcMin}px)`,
  sp: `@media (max-width: ${breakP}px)`
}

export const text = (fontSize = '14px', lineHeight = 1) => {
  return (`
    font-size: ${fontSize};
    line-height: ${lineHeight};
    margin-bottom: calc((${lineHeight} - 1) * ${fontSize} / 2 * -1);
    margin-top: calc((${lineHeight} - 1) * ${fontSize} / 2 * -1);
  `)
}

export const hoverFade = `
  transition: opacity ${baseDurationTime} ease;

  &:hover {
    opacity: .6;
  }
`

export const dot = (dir = 'y', width = 1, margin = 3, color = black) => {
  return (
    `
      background-image: linear-gradient(to ${dir === 'y' ? 'bottom': 'right'}, ${color}, ${color} ${width}px, transparent ${width}px, transparent ${width + margin}px);
      background-size: ${dir === 'y' ? `${width}px ${width + margin}px`: `${width + margin}px ${width}px`};
      background-repeat: ${dir === 'y' ? 'repeat-y': 'repeat-x'};
    `
  )
}

export const flexiblePercent = {
    pc: (num) => {
      return(`${(num / 1440 * 100)}%`);
    },
    sp: (num) => {
      return(`${(num / 750 * 100)}%`);
    }
  }