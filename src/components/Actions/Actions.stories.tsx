import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import Actions from './Actions';

const { Item } = Actions;

export default {
  title: exportStory('Actions', 'data-display'),
  component: Actions,
  subcomponents: { Item },
} as ComponentMeta<typeof Actions>;

export const Regular: ComponentStory<typeof Actions> = (args) => (
  <Template>
    <Actions {...args}>
      <Item>Example</Item>
    </Actions>
  </Template>
);

Regular.args = {
  placement: 'left',
  showTitle: true,
};
