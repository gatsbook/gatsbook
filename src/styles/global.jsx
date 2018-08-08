/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'emotion'
import 'typeface-overpass'

injectGlobal`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
    ${tw('text-primary')};
  }
  hr {
    border: 1px solid;
    ${tw('border-grey-lighter')};
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    ${tw('font-body text-black')}
  }
`
