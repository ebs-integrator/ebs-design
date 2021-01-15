import * as React from 'react';

import { default as Actions } from './Actions';
import { exportStory } from '../../../libs';

const { Item } = Actions;

export default {
  title: exportStory('Actions', 'organisms'),
  component: Actions,
  subcomponents: { Item },
};

export const regular = (): React.ReactNode => (
  <Actions>
    <Item onClick={console.log}>Example</Item>
  </Actions>
);
