# EBS Design System

EBS UI is a complete library of styling components for React.js

[npm-image]: http://img.shields.io/npm/v/ebs-design.svg?style=flat-square
[npm-url]: http://npmjs.org/package/ebs-design
[github-action-image]: https://github.com/ebs-integrator/ebs-design/workflows/%E2%9C%85%20test/badge.svg
[github-action-url]: https://github.com/ebs-integrator/ebs-design/actions?query=workflow%3A%22%E2%9C%85+test%22
[download-image]: https://img.shields.io/npm/dm/ebs-design.svg?style=flat-square
[download-url]: https://npmjs.org/package/ebs-design
[discussions-image]: https://img.shields.io/badge/discussions-on%20github-blue?style=flat-square
[discussions-url]: https://github.com/ebs-integrator/ebs-design/discussions

### WARNING: The UI Kit is UNDER DEVELOPMENT, PLEASE CREATE ISSUES OR PR WITH CHANGES
### DON'T USE IT IN PRODUCTION UNTIL AT LEAST RC WILL BE RELEASED



Link to [Storybook](https://ebs-integrator.github.io/ebs-design/)



## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) or npm to install library.

```bash
yarn add ebs-design
```

or

```bash
npm install ebs-design
```

## Usage guide

```javascript
import { Button } from 'ebs-design';

// Create and import your scss to customize
import './variables.scss';
```

## `variables.scss`

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

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Z-Indexes

1. Mask 990
2. Select dropdown 999
