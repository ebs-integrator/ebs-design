import * as React from 'react';
import { Icon } from 'components/atoms';

import { SidebarItem, Sidebar } from '..';
import { OptionsbarItem } from '../../atoms';

export default {
  title: 'Sidebar',
  component: Sidebar,
};

export const regular = (): React.ReactNode => (
  <Sidebar
    top={
      <>
        <SidebarItem
          label="Category 1"
          prefix={<Icon type="search" />}
          text="Top parent tab"
          options={
            <>
              <SidebarItem text="Child tab" />
              <SidebarItem text="Disabled Child tab" disabled />
            </>
          }
        />

        <SidebarItem prefix={<Icon type="eye" />} text="Top tab" active={true} />
      </>
    }
    bottom={
      <>
        <SidebarItem prefix={<Icon type="check" />} text="Bottom tab" />
      </>
    }
    optionsTop={
      <>
        <OptionsbarItem text="Organizations" />

        <OptionsbarItem text="Company profile" disabled />
      </>
    }
  />
);
