import * as React from 'react';
import { Icon, AvatarInline, Button } from 'components/atoms';
import { InputSearch } from 'components/molecules';

import { Layout, Sidebar } from '..';
import { exportStory } from '../../../libs';

const { Topbar, Content, Footer } = Layout;
const { Title, Toggler, LeftSide, RightSide } = Topbar;
const { TopMenu, BottomMenu, Item, Options } = Sidebar;
const { TopSide, BottomSide, Item: OptionItem } = Options;

export default {
  title: exportStory('Layout', 'organisms'),
  component: Layout,
  subcomponents: {
    Topbar,
    Title,
    Toggler,
    LeftSide,
    RightSide,
    Sidebar,
    TopMenu,
    BottomMenu,
    Item,
    Options,
    TopSide,
    BottomSide,
    OptionItem,
    Content,
    Footer,
  },
};

export const Regular = (): React.ReactNode => (
  <Layout>
    <Topbar>
      <Toggler />

      <Title>Page Title</Title>

      <LeftSide>
        <InputSearch />
      </LeftSide>

      <RightSide>
        <Button icon="bell" />
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
