import * as React from 'react';
import { Button, Space } from 'components';
import { Table } from 'components/organisms';

import { Card, CardProps } from './Card';
import { exportStory } from 'libs';

const { Header: CardHeader, Footer: CardFooter, Body: CardBody } = Card;

export default {
  title: exportStory('Card', 'surfaces'),
  component: Card,
  subcomponents: { CardHeader, CardBody, CardFooter },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
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

export const Regular: React.FC<CardProps> & { args: CardProps } = ({ children, ...props }) => (
  <Card {...props}>
    <Card.Header bordered>
      <Space align="center" justify="space-between">
        <Space align="center">
          <h4>Card title</h4>
          <Button type="primary">A regular button</Button>
        </Space>
        <Button>Another one</Button>
      </Space>
    </Card.Header>

    <Card.Body>
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
);

Regular.args = {
  size: 'medium',
  collapsible: true,
  className: '',
};
