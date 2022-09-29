import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Icon } from 'components';
import Sidebar from './Sidebar';

const { TopMenu, BottomMenu, Options, Item } = Sidebar;
const { TopSide, BottomSide, Item: OptionItem } = Options;

export default {
  title: exportStory('Sidebar', 'layout'),
  component: Sidebar,
  subcomponents: { TopMenu, BottomMenu, Options, Item, TopSide, BottomSide, OptionItem },
} as ComponentMeta<typeof Sidebar>;

export const Regular: ComponentStory<typeof Sidebar> = () => (
  <Sidebar>
    <TopMenu>
      <Item label="Category 1" prefix={<Icon type="search" />} text="Top parent tab">
        <Item text="Child tab" />
        <Item text="Disabled Child tab" disabled />
      </Item>
      <Item prefix={<Icon type="eye" />} text="Top tab" active={true} />
    </TopMenu>

    <Options>
      <TopSide>
        <Item text="Organizations" />
        <Item text="Company profile" disabled />
      </TopSide>
    </Options>

    <BottomMenu>
      <Item prefix={<Icon type="check" />} text="Bottom tab" />
    </BottomMenu>
  </Sidebar>
);
