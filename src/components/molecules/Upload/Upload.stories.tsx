import * as React from 'react';
import { Upload } from './Upload';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Upload', 'molecules'),
  component: Upload,
};

export const Regular = (): React.ReactElement => <Upload />;
