import * as React from 'react';
import { Icon, AvatarInline } from 'components/atoms';
import { Button } from 'components/organisms';

import { SidebarItem } from '../';
import { OptionsbarItem } from '../../atoms';

import { Layout } from './Layout';

export default {
  title: 'Layout',
  component: Layout,
};

export const Regular = (): React.ReactNode => (
  <Layout
    title="Page Title"
    sidebarTop={
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
    sidebarBottom={
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
    rightSide={
      <>
        <Button size="medium" icon="bell" />
        <AvatarInline alt="Wladimir Zhosan" status="active" reversed />
      </>
    }
  >
    123
  </Layout>
);
