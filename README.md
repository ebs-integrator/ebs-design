# EBS Design System - React UI

EBS UI is a complete library of styling components. Link to [Storybook](https://ebs-integrator.github.io/ebs-design/)

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
