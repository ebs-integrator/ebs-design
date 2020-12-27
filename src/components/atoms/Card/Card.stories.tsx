import * as React from 'react';
import { Button, Table } from 'components/organisms';
import { Column } from 'organisms/Table/Table';
import { Card, CardHeader, CardFooter } from './Card';

export default {
  title: 'Card',
  component: Card,
};

const data = [
  { title: 'Test', desc: 'Desc', created: 'Today' },
  { title: 'Test', desc: 'Desc', created: 'Today' },
  { title: 'Test', desc: 'Desc', created: 'Today' },
  { title: 'Test', desc: 'Desc', created: 'Today' },
];

const columns: Column<{ title: string; desc: string; created: string }>[] = [
  {
    title: 'Title',
    dataIndex: 'title',
    onFilter: console.log,
  },
  {
    title: 'Description',
    dataIndex: 'desc',
  },
  {
    title: 'Created',
    dataIndex: 'created',
  },
  {
    title: 'Action',
    action: true,
    render: (): React.ReactNode => <Button>Example</Button>,
  },
];

export const Regular = (): React.ReactElement => (
  <Card>
    <CardHeader
      title="Title"
      leftSide={<Button type="primary">A regular button</Button>}
      rightSide={<Button>Another one</Button>}
    />

    <Table page={1} data={data} columns={columns} />

    <CardFooter
      leftSide={<span className="no-wrap">1 of 5</span>}
      rightSide={
        <>
          <Button disabled>Prev</Button>
          <Button>Next</Button>
        </>
      }
    />
  </Card>
);
