import * as React from 'react';

import { default as Table } from './Table';
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
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Table</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>

        <Table columns={columns} data={data} />
      </div>
    </div>
  </div>
);
