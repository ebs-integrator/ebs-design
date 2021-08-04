import { create } from '@storybook/theming';
import logo from './logo.svg';

export default create({
  base: 'light',

  brandTitle: 'EBS Design',
  brandUrl: 'https://www.npmjs.com/package/ebs-design',
  brandImage: logo,

  colorPrimary: '#1a39b6',
  colorSecondary: '#3366ff',

  barSelectedColor: '#3366ff',

  inputBorderRadius: 4,
  
  appBorderRadius: 4,
  appBg: 'white',
});