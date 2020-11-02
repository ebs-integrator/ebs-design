import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@react-ebs-ui';

import '@react-ebs-ui/dist/styles/index.scss';

import '@react-ebs-ui/dist/styles/ui.scss';
// import '@react-ebs-ui/dist/styles/ui/violet.scss';

ReactDOM.render(
  <React.StrictMode>
    <Button type="primary">Example</Button>
  </React.StrictMode>,
  document.getElementById('root')
);
