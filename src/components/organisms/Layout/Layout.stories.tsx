import * as React from 'react';
import { Icon, AvatarInline, Button, Row, Col, Card, Space } from 'components/atoms';
import { InputSearch } from 'components/molecules';
import { Table } from 'components/organisms';

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
        <Sidebar.Item
          label="Category 1"
          prefix={<Icon type="search" />}
          text="Top parent tab"
          options={
            <>
              <Sidebar.Item text="Child tab" />
              <Sidebar.Item text="Disabled Child tab" disabled />
            </>
          }
        />

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

export const withoutTopbar = (): React.ReactNode => (
  <Layout>
    <Sidebar>
      <Sidebar.TopMenu>
        <Sidebar.Item
          label="Category 1"
          prefix={<Icon type="search" />}
          text="Top parent tab"
          options={
            <>
              <Sidebar.Item text="Child tab" />
              <Sidebar.Item text="Disabled Child tab" disabled />
            </>
          }
        />

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

export const withoutSidebarOptions = (): React.ReactNode => (
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
        <Sidebar.Item
          label="Category 1"
          prefix={<Icon type="search" />}
          text="Top parent tab"
          options={
            <>
              <Sidebar.Item text="Child tab" />
              <Sidebar.Item text="Disabled Child tab" disabled />
            </>
          }
        />

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

export const withoutFooter = (): React.ReactNode => (
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
        <Sidebar.Item
          label="Category 1"
          prefix={<Icon type="search" />}
          text="Top parent tab"
          options={
            <>
              <Sidebar.Item text="Child tab" />
              <Sidebar.Item text="Disabled Child tab" disabled />
            </>
          }
        />

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

export const withFixedFooter = (): React.ReactNode => (
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
        <Sidebar.Item
          label="Category 1"
          prefix={<Icon type="search" />}
          text="Top parent tab"
          options={
            <>
              <Sidebar.Item text="Child tab" />
              <Sidebar.Item text="Disabled Child tab" disabled />
            </>
          }
        />

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
            <Table data={data} columns={columns} />
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
