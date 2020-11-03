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

## ```ui.scss```

```scss
$primary-100: #FFF1D6 !default;
$primary-200: #FFDEAD !default;
$primary-300: #FFC784 !default;
$primary-400: #FFB166 !default;
$primary-500: #FF8C33 !default;
$primary-600: #DB6A25 !default;
$primary-700: #B74D19 !default;
$primary-800: #933310 !default;
$primary-900: #7A2109 !default;

@import 'react-ebs-ui/dist/styles/index.scss';
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
