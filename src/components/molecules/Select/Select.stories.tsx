import * as React from 'react';
import { AvatarInline, Space, Icon } from 'components/atoms';
import { Form, useForm } from 'components/organisms';
import SizeSwitcher from 'components/SizeSwitcher';
import { capitalize, makeid } from 'libs/string';
import { SizeType } from 'types';

import { Select } from './Select';
import { Option } from './interfaces';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Select', 'molecules'),
  component: Select,
};

const limit = 20;

export const Regular = (): React.ReactNode => {
  const [form] = useForm();
  const [search, setSearch] = React.useState<string>('');
  const [list, setList] = React.useState<Option[]>([]);
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

  const handleChange = (values): void => {
    console.log('values :>> ', values);
  };

  return (
    <SizeSwitcher>
      {(size) => (
        <Space direction="vertical">
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
                size={size as SizeType}
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

  const handleChange = (values): void => {
    console.log('values :>> ', values);
  };

  return (
    <SizeSwitcher>
      {(size) => (
        <Space direction="vertical">
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
                mode="single"
                size={size as SizeType}
                placeholder="Select"
                optionsMode="box"
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

export const OptionsMultiple = (): React.ReactNode => {
  const [form] = useForm();
  const [search, setSearch] = React.useState<string>('');
  const [loading, setLoaded] = React.useState(true);
  const [list, setList] = React.useState<Option[]>([]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);

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

  const handleChange = (values): void => {
    console.log('values :>> ', values);
  };

  return (
    <SizeSwitcher>
      {(size) => (
        <Space direction="vertical">
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
                mode="multiple"
                size={size as SizeType}
                placeholder="Select"
                optionsMode="box"
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

  const handleChange = (values): void => {
    console.log('values :>> ', values);
  };

  return (
    <SizeSwitcher>
      {(size) => (
        <Space direction="vertical">
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
              <Select loading={loading} mode="multiple" size={size as SizeType} placeholder="Select" isClearable>
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

    fetch(`https://randomuser.me/api/1.2/?page=${page}&results=${limit}&seed=abc&inc=id,name,picture`)
      .then((response) => response.json())
      .then(({ results }) => {
        const newList: Option[] = [];
        results.forEach((item) => {
          newList.push({
            value: makeid(),
            text: `${capitalize(item.name.first)} ${capitalize(item.name.last)}`,
          });
        });

        setTotal(1000);
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
        <Space direction="vertical">
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
                size={size as SizeType}
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

export const InlineValueMode = (): React.ReactNode => {
  const [form] = useForm();
  const [, setSearch] = React.useState<string>('');
  const [list, setList] = React.useState<Option[]>([]);
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
            text: `${capitalize(item.name.first)} ${capitalize(item.name.last)}`,
          });
        });

        setTotal(1000);
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
        <Space direction="vertical">
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
                valueMode="inline"
                size={size as SizeType}
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
