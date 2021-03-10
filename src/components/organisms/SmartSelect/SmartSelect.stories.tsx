import * as React from 'react';

import { SmartSelect, Option } from './SmartSelect';
import { exportStory } from '../../../libs';
import { Space } from 'components/atoms';

export default {
  title: exportStory('SmartSelect', 'organisms'),
  component: SmartSelect,
};

const limit = 15;

export const Regular = (): React.ReactNode => {
  const [value, setValue] = React.useState<number | undefined>(undefined);
  const [values, setValues] = React.useState<number[] | undefined>(undefined);
  const [search, setSearch] = React.useState<string>('');
  const [list, setList] = React.useState<Option[]>([]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoaded] = React.useState(true);

  React.useEffect(() => {
    setLoaded(true);

    fetch(`https://api.first.org/data/v1/countries?region=europe&limit=${limit}&offset=${(page - 1) * limit}`)
      .then((response) => response.json())
      .then(({ data, total: count }) => {
        let newList: Option[] = [];
        Object.keys(data).map((item) => {
          newList.push({ value: item, text: data[item].country });
        });

        setTotal(count);
        setList(newList);
        setLoaded(false);
      });
  }, [page]);

  return (
    <Space>
      <Space direction="vertical">
        <SmartSelect value={value} loading={loading} placeholder="Select" onChange={setValue} optionsMode="box">
          <SmartSelect.Search value={search} onSearch={setSearch} />
          {list.map((item, i) => (
            <SmartSelect.Option key={i} value={item.value}>
              {item.text}
            </SmartSelect.Option>
          ))}
          <SmartSelect.Pagination count={total} limit={limit} page={page} setPage={setPage} />
        </SmartSelect>
      </Space>
      <Space direction="vertical">
        <SmartSelect value={value} loading={loading} placeholder="Select" onChange={setValue}>
          <SmartSelect.Search value={search} onSearch={setSearch} />
          {list.map((item, i) => (
            <SmartSelect.Option key={i} value={item.value}>
              {item.text}
            </SmartSelect.Option>
          ))}
          <SmartSelect.Pagination count={total} limit={limit} page={page} setPage={setPage} />
        </SmartSelect>
      </Space>
      <Space direction="vertical">
        <SmartSelect
          value={values}
          options={list}
          loading={loading}
          mode="multiple"
          placeholder="Select"
          onChange={setValues}
          optionsMode="box"
        >
          <SmartSelect.Search value={search} onSearch={setSearch} />
          <SmartSelect.Pagination count={total} limit={limit} page={page} setPage={setPage} />
        </SmartSelect>
      </Space>
      <Space direction="vertical">
        <SmartSelect
          value={values}
          options={list}
          loading={loading}
          mode="multiple"
          placeholder="Select"
          onChange={setValues}
        >
          <SmartSelect.Search value={search} onSearch={setSearch} />
          <SmartSelect.Pagination count={total} limit={limit} page={page} setPage={setPage} />
        </SmartSelect>
      </Space>
    </Space>
  );
};
