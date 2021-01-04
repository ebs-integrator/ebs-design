import * as React from 'react';
import { Icon } from 'components/atoms';

import { Sidebar } from '..';

export default {
  title: 'Sidebar',
  component: Sidebar,
};

const { TopMenu, BottomMenu, Options, Item } = Sidebar;

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
      <Options.TopSide>
        <Options.Item text="Organizations" />
        <Options.Item text="Company profile" disabled />
      </Options.TopSide>
    </Options>

    <BottomMenu>
      <Item prefix={<Icon type="check" />} text="Bottom tab" />
    </BottomMenu>
  </Sidebar>
);
