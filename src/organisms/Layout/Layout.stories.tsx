import * as React from 'react';
import { SidebarItem } from 'organisms';
import { Icon } from 'atoms';

import { Layout } from './Layout';

export default {
  title: 'Layout',
  component: Layout,
};

export const regular = (): React.ReactNode => (
  <Layout
    title="Page Title"
    sidebarTop={
      <>
        <SidebarItem
          prefix={<Icon type="search" />}
          text="Top parent tab"
          options={
            <>
              <SidebarItem text="Child tab" />
            </>
          }
        />

        <SidebarItem prefix={<Icon type="eye" />} text="Top tab" active={true} />
      </>
    }
    sidebarBottom={
      <>
        <SidebarItem prefix={<Icon type="check" />} text="Bottom tab" />
      </>
    }
  >
    123
  </Layout>
);
