import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@react-ebs-ui';

import './ui.scss';

ReactDOM.render(
  <React.StrictMode>
    <Button type="primary">Example</Button>
  </React.StrictMode>,
  document.getElementById('root'),
);
