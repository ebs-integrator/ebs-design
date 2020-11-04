import React from 'react';
import ReactDOM from 'react-dom';

import { Button, Calendar } from '@react-ebs-ui';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Button type="primary">Example</Button>

    <Calendar date="2012-12-12" />
  </React.StrictMode>,
  document.getElementById('root'),
);
