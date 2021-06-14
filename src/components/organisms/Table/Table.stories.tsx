import * as React from 'react';

import { Table, ColumnType } from './Table';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Table', 'organisms'),
  component: Table,
};

const data = [
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
];

const columns: ColumnType<any>[] = [
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
    title: 'Time',
    dataIndex: 'date',
  },
];

export const Regular = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Table</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>

        <Table data={data} columns={columns} bordered />
      </div>
    </div>
  </div>
);

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
    onFilter: console.log,
  },
  {
    title: 'Invoice №',
    dataIndex: 'id',
    onFilter: console.log,
  },
  {
    title: 'Commission',
    onFilter: console.log,
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

export const WithHeadChildrens = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Table</div>

      <div className="storybook-row-item">
        <div className="storybook-label">With head childrens</div>

        <Table data={data2} columns={columns2} striped bordered />
      </div>
    </div>
  </div>
);

const data3 = [
  {
    fullname: 'First Last name',
    id: '1',
    commission: '3,95%',
    percent: '2,95%',
    money: '7375$',
    paid: '25000$',
    sold: '50000$',
  },
  {
    fullname: 'First Last name',
    id: '2',
    commission: '3,95%',
    percent: '2,95%',
    money: '7375$',
    paid: '25000$',
    sold: '50000$',
  },
  {
    fullname: 'First Last name',
    id: '3',
    commission: '3,95%',
    percent: '2,95%',
    money: '7375$',
    paid: '25000$',
    sold: '50000$',
  },
  {
    fullname: 'First Last name',
    id: '4',
    commission: '3,95%',
    percent: '2,95%',
    money: '7375$',
    paid: '25000$',
    sold: '50000$',
  },
  {
    fullname: 'First Last name',
    id: '5',
    commission: '3,95%',
    percent: '2,95%',
    money: '7375$',
    paid: '25000$',
    sold: '50000$',
  },
  {
    fullname: 'First Last name',
    id: '6',
    commission: '3,95%',
    percent: '2,95%',
    money: '7375$',
    paid: '25000$',
    sold: '50000$',
  },
  {
    fullname: 'First Last name',
    id: '7',
    commission: '3,95%',
    percent: '2,95%',
    money: '7375$',
    paid: '25000$',
    sold: '50000$',
  },
  {
    fullname: 'First Last name',
    id: '8',
    commission: '3,95%',
    percent: '2,95%',
    money: '7375$',
    paid: '25000$',
    sold: '50000$',
  },
  {
    fullname: 'First Last name',
    id: '9',
    commission: '3,95%',
    percent: '2,95%',
    money: '7375$',
    paid: '25000$',
    sold: '50000$',
  },
  {
    fullname: 'First Last name',
    id: '10',
    commission: '3,95%',
    percent: '2,95%',
    money: '7375$',
    paid: '25000$',
    sold: '50000$',
  },
];

const columns3: ColumnType<any>[] = [
  {
    title: 'Full name',
    dataIndex: 'fullname',
    onFilter: console.log,
  },
  {
    title: 'Invoice №',
    dataIndex: 'id',
    onFilter: console.log,
  },
  {
    title: 'Commission',
    dataIndex: 'commission',
    onFilter: console.log,
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

export const WithScroll = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Table</div>

      <div className="storybook-row-item">
        <div className="storybook-label">With scroll</div>

        <Table scroll={{ x: 1500, y: 300 }} columns={columns3} data={data3} bordered />
      </div>
    </div>
  </div>
);
