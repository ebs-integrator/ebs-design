import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory, capitalize, makeid } from 'libs';
import { Option } from './interfaces';
import { AvatarInline, Icon } from 'components';
import { Template } from 'components/storybook';

import { SelectComponent as Select } from './Select';
import { Select as _Select, Options } from './components';

const { Pagination, Search } = Select;

export default {
  title: exportStory('Select', 'form'),
  component: _Select,
  subcomponents: { Options, Pagination, Search },
  argTypes: {
    label: { control: 'text' },
  },
} as ComponentMeta<typeof _Select>;

const limit = 20;

export const Regular: ComponentStory<typeof _Select> = (args) => {
  const [search, setSearch] = React.useState<string>('');
  const [list, setList] = React.useState<Option[]>([]);
  const [value, setValue] = React.useState<any>();
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoaded] = React.useState(true);

  React.useEffect(() => {
    setLoaded(true);

    fetch(`https://randomuser.me/api/1.2/?page=${page}&results=${limit}&seed=abc&inc=id,name,picture`)
      .then((response) => response.json())
      .then(({ results }) => {
        const newList: Option[] = [];
        results.forEach((item) => {
          newList.push({
            value: makeid(),
            text: (
              <AvatarInline
                img={item.picture.thumbnail}
                type="primary"
                alt={`${capitalize(item.name.title)} ${capitalize(item.name.first)} ${capitalize(item.name.last)}`}
              />
            ),
          });
        });

        setTotal(1000);
        setList(newList);
        setLoaded(false);
      });
  }, [page]);

  return (
    <Template>
      <Select loading={loading} value={value} onChange={setValue} {...args}>
        <Select.Search value={search} onSearch={(val) => setSearch(val)} />

        <Select.Options>
          {list.map((item, i) => (
            <Select.Options.Item key={i} value={item.value}>
              {item.text}
            </Select.Options.Item>
          ))}
        </Select.Options>

        <Select.Pagination count={total} limit={limit} page={page} setPage={setPage} mode="regular" />
      </Select>
    </Template>
  );
};

Regular.args = {
  mode: 'single',
  optionsMode: 'dropdown',
  valueMode: 'regular',
  size: 'medium',
  placeholder: 'Select',
  newPlaceholder: 'Add new...',
  emptyLabel: 'No found',
  loading: false,
  disabled: false,
  isClearable: true,
  prefix: <Icon type="eye" />,
  suffix: undefined,
};

export const InfiniteScrollPagination: ComponentStory<typeof _Select> = (args) => {
  const [search, setSearch] = React.useState<string>('');
  const [list, setList] = React.useState<Option[]>([]);
  const [value, setValue] = React.useState<any>();
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoaded] = React.useState(true);

  React.useEffect(() => {
    setLoaded(true);

    fetch(`https://randomuser.me/api/1.2/?page=${page}&results=${limit}&seed=abc&inc=id,name,picture`)
      .then((response) => response.json())
      .then(({ results }) => {
        const newList: Option[] = [];
        results.forEach((item) => {
          newList.push({
            value: makeid(),
            text: (
              <AvatarInline
                img={item.picture.thumbnail}
                type="primary"
                alt={`${capitalize(item.name.title)} ${capitalize(item.name.first)} ${capitalize(item.name.last)}`}
              />
            ),
          });
        });

        setTotal(1000);
        setList(newList);
        setLoaded(false);
      });
  }, [page]);

  return (
    <Template>
      <Select loading={loading} value={value} onChange={setValue} {...args}>
        <Select.Search value={search} onSearch={(val) => setSearch(val)} />

        <Select.Options>
          {list.map((item, i) => (
            <Select.Options.Item key={i} value={item.value}>
              {item.text}
            </Select.Options.Item>
          ))}
        </Select.Options>

        <Select.Pagination count={total} limit={limit} page={page} setPage={setPage} mode="scroll" />
      </Select>
    </Template>
  );
};

InfiniteScrollPagination.args = Regular.args;
