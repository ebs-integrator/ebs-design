import * as React from 'react';
import { Icon } from 'components/atoms';

import { Sidebar } from '..';
import { exportStory } from '../../../libs';

const { TopMenu, BottomMenu, Options, Item } = Sidebar;
const { TopSide, BottomSide, Item: OptionItem } = Options;

export default {
  title: exportStory('Layout/Sidebar', 'organisms'),
  component: Sidebar,
  subcomponents: { TopMenu, BottomMenu, Options, Item, TopSide, BottomSide, OptionItem },
};

export const Regular = (): React.ReactNode => (
  <Sidebar>
    <TopMenu>
      <Item
        label="Category 1"
        prefix={<Icon type="search" />}
        text="Top parent tab"
        options={
          <>
            <Item text="Child tab" />
            <Item text="Disabled Child tab" disabled />
          </>
        }
      />
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
