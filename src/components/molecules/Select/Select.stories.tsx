import * as React from 'react';
import { AvatarInline, Space, ButtonGroup, Button, Icon } from 'components/atoms';
import { ButtonSize } from 'components/atoms/Button/Button';

import { Select, Option, OptionValue } from './Select';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Select', 'molecules'),
  component: Select,
};

const SizeSwitcher: React.FC<{ children: (size: ButtonSize) => React.ReactNode }> = ({ children }) => {
  const [size, setSize] = React.useState<ButtonSize>('medium');

  return (
    <>
      <ButtonGroup className="mb-30">
        <Button size="small" type={size === 'small' ? 'primary' : 'fill'} onClick={() => setSize('small')}>
          Small
        </Button>

        <Button size="small" type={size === 'medium' ? 'primary' : 'fill'} onClick={() => setSize('medium')}>
          Medium
        </Button>

        <Button size="small" type={size === 'large' ? 'primary' : 'fill'} onClick={() => setSize('large')}>
          Large
        </Button>
      </ButtonGroup>

      {children(size)}
    </>
  );
};

const limit = 15;

export const Regular = (): React.ReactNode => {
  const [value, setValue] = React.useState<OptionValue | undefined>();
  const [search, setSearch] = React.useState<string>('');
  const [list, setList] = React.useState<Option[]>([]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoaded] = React.useState(true);

  React.useEffect(() => {
    setLoaded(true);

    fetch(`https://api.first.org/data/v1/countries?limit=${limit}&offset=${(page - 1) * limit}`)
      .then((response) => response.json())
      .then(({ data, total: count }) => {
        let newList: Option[] = [];
        Object.keys(data).map((item) => {
          newList.push({
            value: item,
            text: <AvatarInline type="primary" shortAlt={item} alt={data[item].country} />,
          });
        });

        setTotal(count);
        setList(newList);
        setLoaded(false);
      });
  }, [page]);

  return (
    <SizeSwitcher>
      {(size) => (
        <Space direction="vertical" style={{ minWidth: 300 }}>
          <Select
            value={value}
            // options={list}
            loading={loading}
            size={size}
            // mode="multiple"
            // mode="single" // by default
            placeholder="Select"
            onChange={(value) => setValue(value as OptionValue)}
            // optionsMode="dropdown" // by default
            // optionsMode="box"
            prefix={<Icon type="eye" />}
          >
            <Select.Search value={search} onSearch={setSearch} />

            <Select.Options>
              {list.map((item, i) => (
                <Select.Options.Item key={i} value={item.value}>
                  {item.text}
                </Select.Options.Item>
              ))}
            </Select.Options>

            <Select.Pagination
              count={total}
              limit={limit}
              page={page}
              setPage={setPage}
              mode="regular"
              // mode="scroll"
            />
          </Select>
        </Space>
      )}
    </SizeSwitcher>
  );
};

export const OptionsBox = (): React.ReactNode => {
  const [value, setValue] = React.useState<OptionValue | undefined>(undefined);
  const [search, setSearch] = React.useState<string>('');
  const [list, setList] = React.useState<Option[]>([]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoaded] = React.useState(true);

  React.useEffect(() => {
    setLoaded(true);

    fetch(`https://api.first.org/data/v1/countries?limit=${limit}&offset=${(page - 1) * limit}`)
      .then((response) => response.json())
      .then(({ data, total: count }) => {
        let newList: Option[] = [];
        Object.keys(data).map((item) => {
          newList.push({
            value: item,
            text: <AvatarInline type="primary" shortAlt={item} alt={data[item].country} />,
          });
        });

        setTotal(count);
        setList(newList);
        setLoaded(false);
      });
  }, [page]);

  return (
    <SizeSwitcher>
      {(size) => (
        <Space direction="vertical" style={{ minWidth: 300 }}>
          <Select
            value={value}
            loading={loading}
            mode="single"
            size={size}
            placeholder="Select"
            onChange={(value) => setValue(value as OptionValue)}
            optionsMode="box"
          >
            <Select.Search value={search} onSearch={setSearch} />

            <Select.Options>
              {list.map((item, i) => (
                <Select.Options.Item key={i} value={item.value}>
                  {item.text}
                </Select.Options.Item>
              ))}
            </Select.Options>

            <Select.Pagination
              count={total}
              limit={limit}
              page={page}
              setPage={setPage}
              mode="regular"
              // mode="scroll"
            />
          </Select>
        </Space>
      )}
    </SizeSwitcher>
  );
};

export const OptionsMultiple = (): React.ReactNode => {
  const [values, setValues] = React.useState<OptionValue[] | undefined>(undefined);
  const [search, setSearch] = React.useState<string>('');
  const [loading, setLoaded] = React.useState(true);
  const [list, setList] = React.useState<Option[]>([]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setLoaded(true);

    fetch(`https://api.first.org/data/v1/countries?limit=${limit}&offset=${(page - 1) * limit}`)
      .then((response) => response.json())
      .then(({ data, total: count }) => {
        let newList: Option[] = [];
        Object.keys(data).map((item) => {
          newList.push({
            value: item,
            text: <AvatarInline type="primary" shortAlt={item} alt={data[item].country} />,
          });
        });

        setTotal(count);
        setList(newList);
        setLoaded(false);
      });
  }, [page]);

  return (
    <SizeSwitcher>
      {(size) => (
        <Space direction="vertical" style={{ minWidth: 300 }}>
          <Select
            value={values}
            loading={loading}
            mode="multiple"
            size={size}
            placeholder="Select"
            onChange={(value) => setValues(value as OptionValue[])}
            optionsMode="box"
          >
            <Select.Search value={search} onSearch={setSearch} />

            <Select.Options>
              {list.map((item, i) => (
                <Select.Options.Item key={i} value={item.value}>
                  {item.text}
                </Select.Options.Item>
              ))}
            </Select.Options>

            <Select.Pagination count={total} limit={limit} page={page} setPage={setPage} mode="regular" />
          </Select>
        </Space>
      )}
    </SizeSwitcher>
  );
};

export const InfiniteScrollPagination = (): React.ReactNode => {
  const [values, setValues] = React.useState<OptionValue[] | undefined>(undefined);
  const [search, setSearch] = React.useState<string>('');
  const [list, setList] = React.useState<Option[]>([]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoaded] = React.useState(true);

  React.useEffect(() => {
    setLoaded(true);

    fetch(`https://api.first.org/data/v1/countries?limit=${limit}&offset=${(page - 1) * limit}`)
      .then((response) => response.json())
      .then(({ data, total: count }) => {
        let newList: Option[] = [];
        Object.keys(data).map((item) => {
          newList.push({
            value: item,
            text: <AvatarInline type="primary" shortAlt={item} alt={data[item].country} />,
          });
        });

        setTotal(count);
        setList(newList);
        setLoaded(false);
      });
  }, [page]);

  return (
    <SizeSwitcher>
      {(size) => (
        <Space direction="vertical" style={{ minWidth: 300 }}>
          <Select
            value={values}
            loading={loading}
            mode="multiple"
            size={size}
            placeholder="Select"
            onChange={(value) => setValues(value as OptionValue[])}
          >
            <Select.Search value={search} onSearch={setSearch} />

            <Select.Options>
              {list.map((item, i) => (
                <Select.Options.Item key={i} value={item.value}>
                  {item.text}
                </Select.Options.Item>
              ))}
            </Select.Options>

            <Select.Pagination count={total} limit={limit} page={page} setPage={setPage} mode="scroll" />
          </Select>
        </Space>
      )}
    </SizeSwitcher>
  );
};
