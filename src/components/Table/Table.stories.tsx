import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Table, ColumnType } from './Table';

export default {
  title: exportStory('Table', 'data-display'),
  component: Table,
  argTypes: {
    emptyCell: { control: 'text' },
  },
} as ComponentMeta<typeof Table>;

const data = [
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
];

const columns: ColumnType<any>[] = [
  {
    title: 'Title',
    onFilter: (field) => field,
    dataIndex: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'desc',
  },
  {
    title: 'Time',
    dataIndex: 'date',
  },
];

export const Regular: ComponentStory<typeof Table> = ({ children, ...props }) => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Table</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>

        <Table data={data} columns={columns} {...props} />
      </div>
    </div>
  </div>
);

Regular.args = {
  size: 'medium',
};

const data2 = [
  { fullname: 'First Last name', id: '1', percent: '2,95%', money: '7375$', paid: '25000$', sold: '50000$' },
  { fullname: 'First Last name', id: '2', percent: '2,95%', money: '7375$', paid: '25000$', sold: '50000$' },
  { fullname: 'First Last name', id: '3', percent: '2,95%', money: '7375$', paid: '25000$', sold: '50000$' },
  { fullname: 'First Last name', id: '4', percent: '2,95%', money: '7375$', paid: '25000$', sold: '50000$' },
  { fullname: 'First Last name', id: '5', percent: '2,95%', money: '7375$', paid: '25000$', sold: '50000$' },
];

const columns2: ColumnType<any>[] = [
  {
    title: 'Full name',
    dataIndex: 'fullname',
  },
  {
    title: 'Invoice №',
    dataIndex: 'id',
  },
  {
    title: 'Commission',
    children: [
      {
        title: '%',
        dataIndex: 'percent',
      },
      {
        title: 'Money',
        dataIndex: 'money',
      },
    ],
  },
  {
    title: 'Paid',
    dataIndex: 'paid',
  },
  {
    title: 'Sold',
    dataIndex: 'sold',
  },
];

export const WithHeadChildrens: ComponentStory<typeof Table> = ({ children, ...props }) => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Table</div>

      <div className="storybook-row-item">
        <div className="storybook-label">With head childrens</div>

        <Table data={data2} columns={columns2} {...props} />
      </div>
    </div>
  </div>
);

WithHeadChildrens.args = Regular.args;
