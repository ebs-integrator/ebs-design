import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Icon, AvatarInline, Button, Row, Col, Card, Space, InputSearch, Table } from 'components';
import Layout from './Layout';
import Sidebar from '../Sidebar/Sidebar';

const { Topbar, Content, Footer } = Layout;
const { Title, Toggler, LeftSide, RightSide } = Topbar;
const { TopMenu, BottomMenu, Item, Options } = Sidebar;
const { TopSide, BottomSide, Item: OptionItem } = Options;

export default {
  title: exportStory('Layout', 'layout'),
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
} as ComponentMeta<typeof Layout>;

export const Regular: ComponentStory<typeof Layout> = () => (
  <Layout>
    <Layout.Topbar>
      <Layout.Topbar.Toggler />

      <Layout.Topbar.Title>Logo</Layout.Topbar.Title>

      <Layout.Topbar.LeftSide>
        <InputSearch />
      </Layout.Topbar.LeftSide>

      <Layout.Topbar.RightSide>
        <Button type="ghost" icon="bell" />
        <AvatarInline alt="Wladimir Zhosan" status="active" reversed />
      </Layout.Topbar.RightSide>
    </Layout.Topbar>

    <Sidebar>
      <Sidebar.TopMenu>
        <Sidebar.Item label="Category 1" prefix={<Icon type="search" />} text="Top parent tab">
          <Sidebar.Item text="Child tab" />
          <Sidebar.Item text="Disabled Child tab" disabled />
        </Sidebar.Item>

        <Sidebar.Item prefix={<Icon type="eye" />} text="Top tab" active={true} />
      </Sidebar.TopMenu>

      <Sidebar.Options>
        <Sidebar.Options.TopSide>
          <Sidebar.Options.Item text="Organizations" />

          <Sidebar.Options.Item text="Company profile" disabled />
        </Sidebar.Options.TopSide>
      </Sidebar.Options>

      <Sidebar.BottomMenu>
        <Sidebar.Item prefix={<Icon type="check" />} text="Bottom tab" />
      </Sidebar.BottomMenu>
    </Sidebar>

    <Layout.Content>
      <ExampleContent />
    </Layout.Content>
    <Layout.Footer />
  </Layout>
);

export const withoutTopbar: ComponentStory<typeof Layout> = () => (
  <Layout>
    <Sidebar>
      <Sidebar.TopMenu>
        <Sidebar.Item label="Category 1" prefix={<Icon type="search" />} text="Top parent tab">
          <Sidebar.Item text="Child tab" />
          <Sidebar.Item text="Disabled Child tab" disabled />
        </Sidebar.Item>

        <Sidebar.Item prefix={<Icon type="eye" />} text="Top tab" active={true} />
      </Sidebar.TopMenu>

      <Sidebar.Options>
        <Sidebar.Options.TopSide>
          <Sidebar.Options.Item text="Organizations" />

          <Sidebar.Options.Item text="Company profile" disabled />
        </Sidebar.Options.TopSide>
      </Sidebar.Options>

      <Sidebar.BottomMenu>
        <Sidebar.Item prefix={<Icon type="check" />} text="Bottom tab" />
      </Sidebar.BottomMenu>
    </Sidebar>

    <Layout.Content>
      <ExampleContent />
    </Layout.Content>
    <Layout.Footer />
  </Layout>
);

export const withoutSidebarOptions: ComponentStory<typeof Layout> = () => (
  <Layout>
    <Layout.Topbar>
      <Layout.Topbar.Toggler />

      <Layout.Topbar.Title>Logo</Layout.Topbar.Title>

      <Layout.Topbar.LeftSide>
        <InputSearch />
      </Layout.Topbar.LeftSide>

      <Layout.Topbar.RightSide>
        <Button icon="bell" />
        <AvatarInline alt="Wladimir Zhosan" status="active" reversed />
      </Layout.Topbar.RightSide>
    </Layout.Topbar>

    <Sidebar>
      <Sidebar.TopMenu>
        <Sidebar.Item label="Category 1" prefix={<Icon type="search" />} text="Top parent tab">
          <Sidebar.Item text="Child tab" />
          <Sidebar.Item text="Disabled Child tab" disabled />
        </Sidebar.Item>

        <Sidebar.Item prefix={<Icon type="eye" />} text="Top tab" active={true} />
      </Sidebar.TopMenu>

      <Sidebar.BottomMenu>
        <Sidebar.Item prefix={<Icon type="check" />} text="Bottom tab" />
      </Sidebar.BottomMenu>
    </Sidebar>

    <Layout.Content>
      <ExampleContent />
    </Layout.Content>
    <Layout.Footer />
  </Layout>
);

export const withoutSidebar: ComponentStory<typeof Layout> = () => (
  <Layout>
    <Layout.Topbar>
      <Layout.Topbar.Toggler />

      <Layout.Topbar.Title>Logo</Layout.Topbar.Title>

      <Layout.Topbar.LeftSide>
        <InputSearch />
      </Layout.Topbar.LeftSide>

      <Layout.Topbar.RightSide>
        <Button icon="bell" />
        <AvatarInline alt="Wladimir Zhosan" status="active" reversed />
      </Layout.Topbar.RightSide>
    </Layout.Topbar>

    <Layout.Content>
      <ExampleContent />
    </Layout.Content>
    <Layout.Footer />
  </Layout>
);

export const withoutFooter: ComponentStory<typeof Layout> = () => (
  <Layout>
    <Layout.Topbar>
      <Layout.Topbar.Toggler />

      <Layout.Topbar.Title>Logo</Layout.Topbar.Title>

      <Layout.Topbar.LeftSide>
        <InputSearch />
      </Layout.Topbar.LeftSide>

      <Layout.Topbar.RightSide>
        <Button icon="bell" />
        <AvatarInline alt="Wladimir Zhosan" status="active" reversed />
      </Layout.Topbar.RightSide>
    </Layout.Topbar>

    <Sidebar>
      <Sidebar.TopMenu>
        <Sidebar.Item label="Category 1" prefix={<Icon type="search" />} text="Top parent tab">
          <Sidebar.Item text="Child tab" />
          <Sidebar.Item text="Disabled Child tab" disabled />
        </Sidebar.Item>

        <Sidebar.Item prefix={<Icon type="eye" />} text="Top tab" active={true} />
      </Sidebar.TopMenu>

      <Sidebar.Options>
        <Sidebar.Options.TopSide>
          <Sidebar.Options.Item text="Organizations" />

          <Sidebar.Options.Item text="Company profile" disabled />
        </Sidebar.Options.TopSide>
      </Sidebar.Options>

      <Sidebar.BottomMenu>
        <Sidebar.Item prefix={<Icon type="check" />} text="Bottom tab" />
      </Sidebar.BottomMenu>
    </Sidebar>

    <Layout.Content>
      <ExampleContent />
    </Layout.Content>
  </Layout>
);

export const withFixedFooter: ComponentStory<typeof Layout> = () => (
  <Layout>
    <Layout.Topbar>
      <Layout.Topbar.Toggler />

      <Layout.Topbar.Title>Logo</Layout.Topbar.Title>

      <Layout.Topbar.LeftSide>
        <InputSearch />
      </Layout.Topbar.LeftSide>

      <Layout.Topbar.RightSide>
        <Button icon="bell" />
        <AvatarInline alt="Wladimir Zhosan" status="active" reversed />
      </Layout.Topbar.RightSide>
    </Layout.Topbar>

    <Sidebar>
      <Sidebar.TopMenu>
        <Sidebar.Item label="Category 1" prefix={<Icon type="search" />} text="Top parent tab">
          <Sidebar.Item text="Child tab" />
          <Sidebar.Item text="Disabled Child tab" disabled />
        </Sidebar.Item>

        <Sidebar.Item prefix={<Icon type="eye" />} text="Top tab" active={true} />
      </Sidebar.TopMenu>

      <Sidebar.Options>
        <Sidebar.Options.TopSide>
          <Sidebar.Options.Item text="Organizations" />

          <Sidebar.Options.Item text="Company profile" disabled />
        </Sidebar.Options.TopSide>
      </Sidebar.Options>

      <Sidebar.BottomMenu>
        <Sidebar.Item prefix={<Icon type="check" />} text="Bottom tab" />
      </Sidebar.BottomMenu>
    </Sidebar>

    <Layout.Content>
      <ExampleContent />
    </Layout.Content>
    <Layout.Footer fixed />
  </Layout>
);

const ExampleContent: React.FC = () => (
  <Row gy={3}>
    {new Array(3).fill(null).map(() => (
      <Col size={12}>
        <Card collapsible>
          <Card.Header bordered>
            <Space align="center" justify="space-between">
              <Space align="center">
                <h4>Card title</h4>
                <Button type="primary">A regular button</Button>
              </Space>
              <Button>Another one</Button>
            </Space>
          </Card.Header>

          <Card.Body className="p-0">
            <Table className="table-no-border" data={data} columns={columns} />
          </Card.Body>

          <Card.Footer bordered>
            <Space align="center" justify="space-between">
              <span className="no-wrap">1 of 5</span>
              <Space>
                <Button disabled>Prev</Button>
                <Button>Next</Button>
              </Space>
            </Space>
          </Card.Footer>
        </Card>
      </Col>
    ))}
  </Row>
);

const data = [
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
];

const columns = [
  {
    key: 'title',
    title: 'Title',
    dataIndex: 'title',
  },
  {
    key: 'desc',
    title: 'Description',
    dataIndex: 'desc',
  },
  {
    key: 'date',
    title: 'Time',
    dataIndex: 'date',
  },
];
