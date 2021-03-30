# unicode

[![Codecov Coverage](https://img.shields.io/codecov/c/github/daolou/unicode/main.svg?style=flat-square)](https://codecov.io/gh/daolou/unicode)[![Build Status](https://www.travis-ci.org/daolou/unicode.svg?branch=main)](https://www.travis-ci.org/daolou/unicode)![GitHub All Releases](https://img.shields.io/github/downloads/daolou/unicode/total)![NPM](https://img.shields.io/npm/l/unicode)

en/de unicode(unicode 与 utf 字符串转换)

## ✨ Features

- zero-dependency
- pure-javascript
- unicode 2 utf
- utf 2 unicode
- cjs （CommonJS/Node bundle）
- esm （ES Modules bundle）
- umd （UMD bundle）
- mjs （Modern bundle）

## 🔨 Usage

### 📦 NPM

1️⃣ Install

```bash
$ npm i --save-dev unicode
```

2️⃣ Use

```js
import unicode from 'unicode';
// or const unicode = require('unicode');

unicode.de('\ud83d\udc4d'); // 👍
unicode.de('\u597d'); // 好
unicode.en('👍'); // \ud83d\udc4d
unicode.en('好'); // \u597d
```

### 🌐 Browser

```html
<!-- ... other HTML ... -->

<!-- load unicode。-->
<script src="://unpkg.com/unicode" crossorigin></script>

<!-- use unicode。-->
<script>
  window.Unicode.de('\ud83d\udc4d'); // 👍
  window.Unicode.de('\u597d'); // 好
  window.Unicode.en('👍'); // \ud83d\udc4d
  window.Unicode.en('好'); // \u597d
</script>

```

## 🥂 License

[MIT](./LICENSE)
