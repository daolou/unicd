# unicode

[![Codecov Coverage](https://img.shields.io/codecov/c/github/daolou/unicd/main.svg?style=flat-square)](https://codecov.io/gh/daolou/unicd)[![Build Status](https://www.travis-ci.org/daolou/unicd.svg?branch=main)](https://www.travis-ci.org/daolou/unicd)![GitHub All Releases](https://img.shields.io/github/downloads/daolou/unicd/total)![NPM](https://img.shields.io/npm/l/unicd)

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
$ npm i --save-dev unicd
```

2️⃣ Use

```js
import unicd from 'unicd';
// or const unicd = require('unicd');

unicd.de('\ud83d\udc4d'); // 👍
unicd.de('\u597d'); // 好
unicd.en('👍'); // \ud83d\udc4d
unicd.en('好'); // \u597d
```

### 🌐 Browser

```html
<!-- ... other HTML ... -->

<!-- load unicd。-->
<script src="://unpkg.com/unicd" crossorigin></script>

<!-- use unicd。-->
<script>
  window.unicd.de('\ud83d\udc4d'); // 👍
  window.unicd.de('\u597d'); // 好
  window.unicd.en('👍'); // \ud83d\udc4d
  window.unicd.en('好'); // \u597d
</script>

```

## 🥂 License

[MIT](./LICENSE)
