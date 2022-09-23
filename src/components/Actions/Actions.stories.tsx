import * as React from 'react';
import { Template } from 'components/storybook';

import { default as Actions, ActionsProps } from './Actions';
import { exportStory } from 'libs';

const { Item } = Actions;

export default {
  title: exportStory('Actions', 'data-display'),
  component: Actions,
  subcomponents: { Item },
};

export const Regular: React.FC<ActionsProps> & { args: ActionsProps } = ({ children, ...props }) => (
  <Template>
    <Actions {...props}>
      <Item onClick={console.log}>Example</Item>
    </Actions>
  </Template>
);

Regular.args = {
  placement: 'left',
  showTitle: true,
};
