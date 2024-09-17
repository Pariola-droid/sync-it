import { globalCss } from './stitches.config';

const globalStylesObj = {
  '@import': ['/presets/normalize.css'],
  '*,*::before,*::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontStyle: 'inherit',
    'font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'antialiased',
    '-webkit-font-smoothing': 'antialiased',
    textRendering: 'optimizeLegibility',
    // textWrap: 'balance',
    fontSynthesis: 'none',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    letterSpacing: '1%',
    zIndex: 1,
  },
  'html, body': {
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: '$ghostWhite',
    color: '$midnight',
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
    position: 'relative',

    '&::-webkit-scrollbar': {
      width: '0 !important',
      // display: 'none',
    },

    '&::-webkit-scrollbar-thumb': {
      width: '0 !important',
      // display: 'none',
    },
  },
  html: {
    boxSizing: 'border-box',
    quotes: `'"' '"'`,
    scrollBehavior: 'smooth',
    minHeight: '100vh',
    overflowY: 'scroll',
    // scrollPaddingTop: '0',
  },
  body: {
    fontWeight: '$1',
    padding: 0,
    overflowX: 'hidden',
    fontStyle: 'normal',
    minHeight: '100vh',
  },
  '#root': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  'body, button, input, select, textarea': {
    direction: 'ltr',
    textAlign: 'left',
  },
  svg: {
    maxWidth: '100%',
    verticalAlign: 'middle',
    strokeWidth: '1.5',
  },
  ul: {
    listStyle: 'none',
    '-webkit-margin-before': '0',
    '-webkit-margin-after': 'unset',
    'margin-block-end': 'unset',
  },
  a: {
    textDecoration: 'none',
  },
  fieldset: {
    border: 'none',
  },
  '::selection': {
    background: 'rgba(0, 85, 255, 0.2)',
  },
  '*': { boxSizing: 'inherit' },
  'b,em': {
    fontWeight: '600',
  },
  h1: {
    fontSize: '$heading3',
    '@bp1': {
      fontSize: '$heading1',
    },
  },
  h2: {
    fontSize: '$heading2',
  },
  h3: {
    fontSize: '$heading3',
  },
  h4: {
    fontSize: '$heading4',
  },
  h5: {
    fontSize: '$heading5',
  },
  h6: {
    fontSize: '$heading6',
  },
  'p, ul, li , a': {},
  'input[type=number]': {
    '-moz-appearance': 'textfield',
  },
  input: {
    '&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
  button: {
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
  },
};

export const globalStyles = globalCss(globalStylesObj);
