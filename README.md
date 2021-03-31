# unicode

[![Codecov](https://codecov.io/gh/daolou/unicd/branch/main/graph/badge.svg?token=DRMMBP9VG8)](https://codecov.io/gh/daolou/unicd)
[![Build Status](https://www.travis-ci.com/daolou/unicd.svg?branch=main)](https://www.travis-ci.org/daolou/unicd)
[![Downloads](https://img.shields.io/npm/dt/unicd?logo=npm)](https://github.com/daolou/unicd#readme)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/unicd/latest?logo=npm)](https://www.npmjs.com/package/unicd)
[![License](https://img.shields.io/npm/l/unicd)](https://www.npmjs.com/package/unicd)

> en/de unicode(unicode 与 utf 字符串转换)

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
<script src="://unpkg.com/unicd@latest/dist/index.umd.js" crossorigin></script>

<!-- use unicd。-->
<script>
  window.Unicd.de('\ud83d\udc4d'); // 👍
  window.Unicd.de('\u597d'); // 好
  window.Unicd.en('👍'); // \ud83d\udc4d
  window.Unicd.en('好'); // \u597d
</script>

```

## 🥂 License

[MIT](./LICENSE)
