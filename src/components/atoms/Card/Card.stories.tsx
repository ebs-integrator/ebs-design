import * as React from 'react';
import { Button } from 'components/atoms';
import { Table } from 'components/organisms';

import { Card, CardHeader, CardFooter } from './Card';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Card', 'atoms'),
  component: Card,
  subcomponents: { CardHeader, CardFooter },
};

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
    dataKey: 'title',
    resizable: true,
    sortable: true,
    width: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  {
    key: 'desc',
    title: 'Description',
    dataKey: 'desc',
    resizable: true,
    sortable: true,
    width: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  {
    key: 'date',
    title: 'Time',
    dataKey: 'date',
    resizable: true,
    sortable: true,
    width: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
];

export const Regular = (): React.ReactElement => (
  <Card>
    <CardHeader
      title="Title"
      leftSide={<Button type="primary">A regular button</Button>}
      rightSide={<Button>Another one</Button>}
    />

    <Table data={data} columns={columns} />

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
