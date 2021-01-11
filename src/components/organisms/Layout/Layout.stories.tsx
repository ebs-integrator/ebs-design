import * as React from 'react';
import { Icon, AvatarInline, Button } from 'components/atoms';

import { Layout, Sidebar } from '..';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Layout', 'organisms'),
  component: Layout,
};

const { Topbar, Content, Footer } = Layout;
const { Title, Toggler, LeftSide, RightSide } = Topbar;
const { TopMenu, BottomMenu, Item, Options } = Sidebar;
const { TopSide, Item: OptionItem } = Options;

export const Regular = (): React.ReactNode => (
  <Layout>
    <Topbar>
      <Toggler />

      <Title>Page Title</Title>

      <LeftSide>LeftSide</LeftSide>

      <RightSide>
        <Button size="medium" icon="bell" />
        <AvatarInline alt="Wladimir Zhosan" status="active" reversed />
      </RightSide>
    </Topbar>

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
          <OptionItem text="Organizations" />

          <OptionItem text="Company profile" disabled />
        </TopSide>
      </Options>

      <BottomMenu>
        <Item prefix={<Icon type="check" />} text="Bottom tab" />
      </BottomMenu>
    </Sidebar>

    <Content>Example</Content>

    <Footer />
  </Layout>
);
