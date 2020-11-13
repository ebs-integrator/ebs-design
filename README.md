# React EBS UI

EBS UI is a complete library of styling components

## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) or npm to install library.

```bash
yarn add react-ebs-ui
```

or

```bash
npm install react-ebs-ui
```

## Usage guide

```javascript
import { Button } from 'react-ebs-ui';

// Create and import your scss to customize
import './ui.scss';
```

## `ui.scss`

```scss
$primary-100: #fff1d6 !default;
$primary-200: #ffdead !default;
$primary-300: #ffc784 !default;
$primary-400: #ffb166 !default;
$primary-500: #ff8c33 !default;
$primary-600: #db6a25 !default;
$primary-700: #b74d19 !default;
$primary-800: #933310 !default;
$primary-900: #7a2109 !default;

@import 'react-ebs-ui/dist/styles/index.scss';
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Z-Indexes

1. Mask 990
2. Select dropdown 999
