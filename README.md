# dynamic-stylesheet

![npm-version](https://img.shields.io/npm/v/dynamic-stylesheet.svg)
![bundlesize-js-image](https://img.badgesize.io/https:/unpkg.com/dynamic-stylesheet/dist/index.js?label=gzip&compression=gzip&style=flat-square)

dynamic inject css with javascript.

## Install

```bash
npm install dynamic-stylesheet
```

```bash
yarn add dynamic-stylesheet
```

## Usage

```javascript
import { injectCSS, updateCSS } from 'dynamic-stylesheet'

const styleText = ".container:before{ content:'before content' }"

// default insert to document.head
injectCSS(styleText)
// attach to element
injectCSS(styleText, { attachTo: document.body })

// updateCSS will use the same node with the same key
updateCSS(styleText, 'mark-key')

const updateStyleText = ".container:after{ content:'after content' }"

updateCSS(updateStyleText, 'mark-key')
```

## License

MIT