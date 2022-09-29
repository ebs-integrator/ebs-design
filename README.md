<p align="center">
  <img src="https://i.ibb.co/J260f5z/ebs-design.png">
</p>

<h1 align="center">EBS Design System</h1>

<div align="center">

A React-based UI toolkit for **enterprise grade applications**

[![NPM version][npm-image]][npm-url]
[![NPM downloads][download-image]][download-url]
[![Discussions][discussions-image]][discussions-url]

</div>

[![Elements][elements-image]][elements-url]

[npm-image]: http://img.shields.io/npm/v/ebs-design.svg?style=flat-square
[npm-url]: http://npmjs.org/package/ebs-design
[logo-image]: https://i.ibb.co/J260f5z/ebs-design.png
[elements-image]: https://i.ibb.co/gMSWhYM/Elements-1.png
[elements-url]: https://ebs-integrator.github.io/ebs-design/
[download-image]: https://img.shields.io/npm/dm/ebs-design.svg?style=flat-square
[download-url]: https://npmjs.org/package/ebs-design
[discussions-image]: https://img.shields.io/badge/discussions-on%20github-blue?style=flat-square
[discussions-url]: https://github.com/ebs-integrator/ebs-design/discussions

## 🔥 Motivation

First of all, **ebs-design** started as an internal tool to be a single pattern for enterprise application development, improving the experience of users in our products by using enhanced components. Now designers and developers use the same style for applications such as Administration panels, CRMs, HRMs, Finance and Accounting Apps, Analytics Dashboards, etc. 

We are focused on creating rich components like forms, tables, modals, etc that add an exceptional experience in the most sophisticated apps.

## ⚠️ WARNING

The UI Kit is UNDER DEVELOPMENT, we don't recommend using it in production projects until at least RC will be released. We are working on improving and refactoring. If you find  a problem, please create an Issue or PR with your change, will be glad to help. 

Click **Watch** and **Star** to get breaking news about project development.

## 🧾 Documentation

For more usage details visit [Storybook](https://ebs-integrator.github.io/ebs-design/) and [Website](https://ebs.io/design/)

## ⭐ Features

- Designed for enterprise apps.
- Modern design and exceptional user experience.
- Fully customizable components using variables.
- Written in TypeScript with predictable static types.
- High-quality and performant React components.
- 100% Open Source.

## 📦 Installation

Use the package manager [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) or npm to install library.

<a href="https://www.npmjs.com/package/ebs-design"><img width="415px" src="https://nodei.co/npm/ebs-design.png?downloads=true&downloadRank=true&stars=true" /></a>

```
npm install ebs-design
```

#### ⚠️ Peer Dependencies

| Package's name | Version        |
| -------------- | -------------- |
| react          | >= 16.8        |
| react-dom      | >= 16.8        |
| sass           | >= 1.x         |

## 🏗️ Usage guide

```javascript
import { Button } from 'ebs-design';
```

Import styles scss into a `src/App.(js|tsx)`

```javascript
import 'ebs-design/dist/styles/index.scss';
```

Or create and import your scss to customize variables

```javascript
import './variables.scss';
```

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

#### Additional styles import

```javascript
import 'ebs-design/dist/styles/default.scss';
```

```scss
// Default styles
$font-size-base: 14px;
$font-size-desktop: 12.5px;
$font-size-small-desktop: 10px;

$line-height-base: 1.414;
$text-color: #494f7d;

$h1-font-size: $font-size-base * 2.5;
$h2-font-size: $font-size-base * 2;
$h3-font-size: $font-size-base * 1.75;
$h4-font-size: $font-size-base * 1.5;
$h5-font-size: $font-size-base * 1.25;
$h6-font-size: $font-size-base;
```

```javascript
import 'ebs-design/dist/styles/scrollbar.scss';
```

```scss
// Default base size & colors of scrollbar
$scrollbar-size: 8px;
$scrollbar-track-background-color: $background-content;
$scrollbar-thumb-background-color: $border-color;
$scrollbar-thumb-hover-background-color: var(--primary-color);
```

## ❤️ Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Z-Indexes

1. Mask 990
2. Select dropdown 999
