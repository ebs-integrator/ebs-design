import * as React from 'react';
import { AvatarInline, Space, ButtonGroup, Button, Icon } from 'components/atoms';
import { Form, useForm } from 'components/organisms';
import { ButtonSize } from 'components/atoms/Button/Button';

import { Select, Option } from './Select';
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
  const [form] = useForm();
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
        const newList: Option[] = [];
        Object.keys(data).forEach((item) => {
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

  const handleChange = (values): void => {
    console.log('values :>> ', values);
  };

  return (
    <SizeSwitcher>
      {(size) => (
        <Space direction="vertical" style={{ minWidth: 300 }}>
          <Form
            form={form}
            initialValues={{
              date: '10/10/2025',
              time: '15-11-2020 11:30',
              range: ['09-10-2029', '10-10-2029'],
            }}
            onFinish={handleChange}
          >
            <Form.Field name="select" label="Select" rules={[{ required: true }]}>
              <Select
                // options={list}
                loading={loading}
                size={size}
                // mode="multiple"
                // mode="single" // by default
                placeholder="Select"
                // optionsMode="dropdown" // by default
                // optionsMode="box"
                prefix={<Icon type="eye" />}
                isClearable
              >
                <Select.Search value={search} onSearch={(val) => setSearch(val)} />

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
            </Form.Field>
          </Form>
        </Space>
      )}
    </SizeSwitcher>
  );
};

export const OptionsBox = (): React.ReactNode => {
  const [form] = useForm();
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
        const newList: Option[] = [];
        Object.keys(data).forEach((item) => {
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

  const handleChange = (values): void => {
    console.log('values :>> ', values);
  };

  return (
    <SizeSwitcher>
      {(size) => (
        <Space direction="vertical" style={{ minWidth: 300 }}>
          <Form
            form={form}
            initialValues={{
              date: '10/10/2025',
              time: '15-11-2020 11:30',
              range: ['09-10-2029', '10-10-2029'],
            }}
            onFinish={handleChange}
          >
            <Form.Field name="select" label="Select" rules={[{ required: true }]}>
              <Select loading={loading} mode="single" size={size} placeholder="Select" optionsMode="box" isClearable>
                <Select.Search value={search} onSearch={(val) => setSearch(val)} />

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
            </Form.Field>
          </Form>
        </Space>
      )}
    </SizeSwitcher>
  );
};

export const OptionsMultiple = (): React.ReactNode => {
  const [form] = useForm();
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
        const newList: Option[] = [];
        Object.keys(data).forEach((item) => {
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

  const handleChange = (values): void => {
    console.log('values :>> ', values);
  };

  return (
    <SizeSwitcher>
      {(size) => (
        <Space direction="vertical" style={{ minWidth: 300 }}>
          <Form
            form={form}
            initialValues={{
              date: '10/10/2025',
              time: '15-11-2020 11:30',
              range: ['09-10-2029', '10-10-2029'],
            }}
            onFinish={handleChange}
          >
            <Form.Field name="select" label="Select" rules={[{ required: true }]}>
              <Select loading={loading} mode="multiple" size={size} placeholder="Select" optionsMode="box" isClearable>
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
            </Form.Field>
          </Form>
        </Space>
      )}
    </SizeSwitcher>
  );
};

export const InfiniteScrollPagination = (): React.ReactNode => {
  const [form] = useForm();
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
        const newList: Option[] = [];
        Object.keys(data).forEach((item) => {
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

  const handleChange = (values): void => {
    console.log('values :>> ', values);
  };

  return (
    <SizeSwitcher>
      {(size) => (
        <Space direction="vertical" style={{ minWidth: 300 }}>
          <Form
            form={form}
            initialValues={{
              date: '10/10/2025',
              time: '15-11-2020 11:30',
              range: ['09-10-2029', '10-10-2029'],
            }}
            onFinish={handleChange}
          >
            <Form.Field name="select" label="Select" rules={[{ required: true }]}>
              <Select loading={loading} mode="multiple" size={size} placeholder="Select" isClearable>
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
            </Form.Field>
          </Form>
        </Space>
      )}
    </SizeSwitcher>
  );
};

export const TagsMode = (): React.ReactNode => {
  const [form] = useForm();
  const [, setSearch] = React.useState<string>('');
  const [list, setList] = React.useState<Option[]>([]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoaded] = React.useState(true);

  React.useEffect(() => {
    setLoaded(true);

    fetch(`https://api.first.org/data/v1/countries?limit=${limit}&offset=${(page - 1) * limit}`)
      .then((response) => response.json())
      .then(({ data, total: count }) => {
        const newList: Option[] = [];
        Object.keys(data).forEach((item) => {
          newList.push({
            value: item,
            text: data[item].country,
          });
        });

        setTotal(count);
        setList(newList);
        setLoaded(false);
      });
  }, [page]);

  const handleChange = (values): void => {
    console.log('values :>> ', values);
  };

  return (
    <SizeSwitcher>
      {(size) => (
        <Space direction="vertical" style={{ minWidth: 300 }}>
          <Form
            form={form}
            initialValues={{
              date: '10/10/2025',
              time: '15-11-2020 11:30',
              range: ['09-10-2029', '10-10-2029'],
            }}
            onFinish={handleChange}
          >
            <Form.Field name="select" label="Select" rules={[{ required: true }]}>
              <Select
                loading={loading}
                mode="tags"
                size={size}
                newPlaceholder="Add new..."
                isClearable
                onSearch={(val) => setSearch(val)}
                onAddNew={(value) => setList([{ value, text: value }, ...list])}
              >
                <Select.Options mode="multiple">
                  {list.map((item, i) => (
                    <Select.Options.Item key={i} value={item.value}>
                      {item.text}
                    </Select.Options.Item>
                  ))}
                </Select.Options>

                <Select.Pagination count={total} limit={limit} page={page} setPage={setPage} mode="scroll" />
              </Select>
            </Form.Field>
          </Form>
        </Space>
      )}
    </SizeSwitcher>
  );
};
