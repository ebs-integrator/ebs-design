# EBS Design System

[![NPM version][npm-image]][npm-url]
[![NPM downloads][download-image]][download-url]
[![Discussions][discussions-image]][discussions-url]

[![Elements][elements-image]][elements-url]

[npm-image]: http://img.shields.io/npm/v/ebs-design.svg?style=flat-square
[npm-url]: http://npmjs.org/package/ebs-design
[elements-image]: https://i.ibb.co/gMSWhYM/Elements-1.png
[elements-url]: https://ebs-integrator.github.io/ebs-design/
[download-image]: https://img.shields.io/npm/dm/ebs-design.svg?style=flat-square
[download-url]: https://npmjs.org/package/ebs-design
[discussions-image]: https://img.shields.io/badge/discussions-on%20github-blue?style=flat-square
[discussions-url]: https://github.com/ebs-integrator/ebs-design/discussions

## ⚠️ WARNING

The UI Kit is UNDER DEVELOPMENT, PLEASE CREATE ISSUES OR PR WITH CHANGES

DON'T USE IT IN PRODUCTION UNTIL AT LEAST RC WILL BE RELEASED

## 🧾 Documentation

For more usage details visit [Storybook](https://ebs-integrator.github.io/ebs-design/)

## ⭐ Features

- Modern design and exceptional user experience.
- Fully customizable components using variables.
- Written in TypeScript with predictable static types.
- High-quality and performant React components.
- 100% Open Source.

## 📦 Installation

Use the package manager [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) or npm to install library.

<img width="415px" src="https://nodei.co/npm/ebs-design.png?downloads=true&downloadRank=true&stars=true" />

Requires a peer of `node-sass@^4.0.0 | ^5.0.0`
<img alt="sass" width="26px" src="https://camo.githubusercontent.com/e42f5a6972953c0b7a055a4bdadb9f464866e14fd27ee15d7335f4b401626aca/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3234302f3030303030302f736173732e706e67" data-canonical-src="https://img.icons8.com/color/240/000000/sass.png" />
If your app isn't already configured with SASS, you will first need to install

```bash
npm install -D node-sass@^5.0.0
# or
yarn add node-sass@^5.0.0
```

## 🏗️ Usage guide

```javascript
import { Button } from 'ebs-design';

// Import styles scss into a `src/App.(js|tsx)`
import 'ebs-design/dist/styles/index.scss';
// Or create and import your scss to customize variables
import './variables.scss';
```

Example of `variables.scss`

```scss
// Main colors
$primary-color: #3366ff;
$success-color: #2ac952;
$info-color: #3bc0f9;
$warning-color: #ffd83d;
$danger-color: #ff3a30;
$normal-color: #a5a5a5;

// Primary colors
$primary-000: #eef5ff;
$primary-100: #d6e4ff;
$primary-200: #adc8ff;
$primary-300: #85a9ff;
$primary-400: #6690ff;
$primary-600: #254eda;
$primary-700: #1a39b6;
$primary-800: #102693;
$primary-900: #0a1a7a;

@import 'ebs-design/dist/styles/index.scss';
```

## ❤️ Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Z-Indexes

1. Mask 990
2. Select dropdown 999
