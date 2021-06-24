import * as React from 'react';

import { Radio, RadioProps } from './Radio';
import { exportStory } from 'libs';
import { Form, Space, useForm } from 'index';
import { Icon } from '../Icon/Icon';
import { useRadio } from './useRadio';

export default {
  title: exportStory('Radio', 'atoms'),
  component: Radio,
  subcomponents: {
    'Radio.Button': Radio.Button,
    'Radio.Group': Radio.Group,
    'Radio.ButtonContainer': Radio.ButtonContainer,
  },
};

export const Standalone = (): React.ReactElement => {
  return (
    <div className="storybook-rows">
      <div className="storybook-row">
        <div className="storybook-row-item">
          <div className="storybook-label">Plain</div>
          <Radio.Group name="radio-group">
            <Radio value="1">One</Radio>
            <Radio value="2">Two</Radio>
            <Radio value="3">Three</Radio>
            <Radio value="4" disabled>
              Four
            </Radio>
          </Radio.Group>
        </div>
        <div className="storybook-row-item">
          <div className="storybook-label">With spaces</div>
          <Radio.Group name="radio-group-2">
            <Space>
              <Radio value="1">One</Radio>
              <Radio value="2">Two</Radio>
              <Radio value="3">Three</Radio>
              <Radio value="4" disabled>
                Four
              </Radio>
            </Space>
          </Radio.Group>
        </div>
        <div className="storybook-row-item">
          <div className="storybook-label">Vertical</div>
          <Radio.Group name="radio-group-3">
            <Space direction="vertical" align="start">
              <Radio value="1">One</Radio>
              <Radio value="2">Two</Radio>
              <Radio value="3">Three</Radio>
              <Radio value="4" disabled>
                Four
              </Radio>
            </Space>
          </Radio.Group>
        </div>
        <div className="storybook-row-item">
          <div className="storybook-label">With Buttons</div>
          <Radio.Group name="radio-group-4">
            <Radio.ButtonContainer>
              <Radio.Button value="1">One</Radio.Button>
              <Radio.Button value="2">Two</Radio.Button>
              <Radio.Button value="3">Three</Radio.Button>
              <Radio.Button value="4" disabled>
                Four
              </Radio.Button>
            </Radio.ButtonContainer>
          </Radio.Group>
        </div>
        <div className="storybook-row-item">
          <div className="storybook-label">With Buttons (customized)</div>
          <Radio.Group name="radio-group-5">
            <Radio.ButtonContainer checkedType="dark" type="light">
              <Radio.Button value="1">One</Radio.Button>
              <Radio.Button value="2" type="fill">
                Two
              </Radio.Button>
              <Radio.Button value="3" prefix={<Icon type="globe" />}>
                Three
              </Radio.Button>
              <Radio.Button value="4" disabled>
                Four
              </Radio.Button>
              <Radio.Button value="5" loading>
                five
              </Radio.Button>
              <Radio.Button value="6">six</Radio.Button>
            </Radio.ButtonContainer>
          </Radio.Group>
        </div>
        <div className="storybook-row-item">
          <div className="storybook-label">Disabled from Radio.Group</div>
          <Radio.Group disabled name="radio-group-6">
            <Radio.ButtonContainer>
              <Radio.Button value="1">One</Radio.Button>
              <Radio.Button value="2">Two</Radio.Button>
              <Radio.Button value="3">Three</Radio.Button>
              <Radio.Button value="4" disabled>
                Four
              </Radio.Button>
            </Radio.ButtonContainer>
          </Radio.Group>
          <br />
          <Radio.Group disabled name="radio-group-6">
            <Radio value="1">One</Radio>
            <br />
            <Radio value="2">Two</Radio>
            <br />
            <Radio value="3">Three</Radio>
            <br />
            <Radio value="4" disabled>
              Four
            </Radio>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export const ControlledByState = (): React.ReactElement => {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('four');
  const [value3, setValue3] = React.useState('');
  const [value4, setValue4] = React.useState('');
  const [value5, setValue5] = React.useState('');

  return (
    <div className="storybook-rows">
      <div className="storybook-row">
        <div className="storybook-row-item">
          <div className="storybook-label">
            1. Value: <small>{value}</small>
          </div>
          <Radio.Group value={value} onChange={setValue} name="state-radio-group">
            <Space>
              <Radio value="one">One</Radio>
              <Radio value="two">Two</Radio>
              <Radio value="three">Three</Radio>
              <Radio value="four" disabled>
                Four
              </Radio>
            </Space>
          </Radio.Group>
          <button onClick={() => setValue('')}>clear</button>
        </div>
        <div className="storybook-row-item">
          <div className="storybook-label">
            2. (With default value in state) Value: <small>{value2}</small>
          </div>
          <Radio.Group value={value2} onChange={setValue2} name="state-radio-group-2">
            <Space>
              <Radio value="one">One</Radio>
              <Radio value="two">Two</Radio>
              <Radio value="three">Three</Radio>
              <Radio value="four" disabled>
                Four
              </Radio>
            </Space>
          </Radio.Group>
          <button onClick={() => setValue2('')}>clear</button>
        </div>
        <div className="storybook-row-item">
          <div className="storybook-label">
            3. (With default value in Radio.Group) Value: <small>{value3}</small>
          </div>
          <Radio.Group value={value3} onChange={setValue3} defaultValue="two" name="state-radio-group-3">
            <Space>
              <Radio value="one">One</Radio>
              <Radio value="two">Two</Radio>
              <Radio value="three">Three</Radio>
              <Radio value="four" disabled>
                Four
              </Radio>
            </Space>
          </Radio.Group>
          <button onClick={() => setValue3('')}>clear</button>
        </div>
        <div className="storybook-row-item">
          <div className="storybook-label">
            4. (With defaultChecked in Radio) Value: <small>{value4}</small>
          </div>
          <Radio.Group value={value4} onChange={setValue4} name="state-radio-group-4">
            <Radio.ButtonContainer>
              <Radio.Button value="one">One</Radio.Button>
              <Radio.Button value="two">Two</Radio.Button>
              <Radio.Button value="three" defaultChecked>
                Three
              </Radio.Button>
              <Radio.Button value="four" disabled>
                Four
              </Radio.Button>
            </Radio.ButtonContainer>
          </Radio.Group>
          <br />
          <button onClick={() => setValue4('')}>clear</button>
        </div>
        <div className="storybook-row-item">
          <div className="storybook-label">
            4. (With condition in checked of Radio) Value: <small>{value5}</small>
          </div>
          <Radio.Group onChange={setValue5} name="state-radio-group-5">
            <Radio.ButtonContainer>
              <Radio.Button value="one" checked={value5 === 'one'}>
                One
              </Radio.Button>
              <Radio.Button value="two" checked={value5 === 'two'}>
                Two
              </Radio.Button>
              <Radio.Button value="three" defaultChecked checked={value5 === 'three'}>
                Three
              </Radio.Button>
              <Radio.Button value="four" disabled checked={value5 === 'four'}>
                Four
              </Radio.Button>
            </Radio.ButtonContainer>
          </Radio.Group>
          <br />
          <button onClick={() => setValue5('')}>clear</button>
        </div>
      </div>
    </div>
  );
};

export const ControlledByForm = (): React.ReactElement => {
  const [, setFormData] = React.useState<any>(null);
  const [form] = useForm();

  return (
    <div className="storybook-rows">
      <div className="storybook-row">
        <div className="storybook-row-item">
          <Form
            onFinish={(values) => alert('Form result:\n' + JSON.stringify(values, null, 2))}
            form={form}
            onFieldsChange={setFormData}
            initialValues={{ 'radio-group-1': 'one' }}
          >
            <Form.Field name="radio-group-1" label="1. Choose something">
              <Radio.Group>
                <Space>
                  <Radio value="one">One</Radio>
                  <Radio value="two">Two</Radio>
                  <Radio value="three" disabled>
                    Three
                  </Radio>
                  <Radio value="four">Four</Radio>
                </Space>
              </Radio.Group>
            </Form.Field>
            <Form.Field
              name="radio-group-2"
              label="2. With validator"
              rules={[
                {
                  validator: async (rule, value) => {
                    if (value !== 'two') return Promise.reject('Not equal to "two"');
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Radio.Group>
                <Space>
                  <Radio value="one">One</Radio>
                  <Radio value="two">Two</Radio>
                  <Radio value="three" disabled>
                    Three
                  </Radio>
                  <Radio value="four" defaultChecked>
                    Four
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Field>
            <Form.Field name="radio-group-3" label="3. Required" rules={[{ required: true }]}>
              <Radio.Group>
                <Space>
                  <Radio value="one">One</Radio>
                  <Radio value="two">Two</Radio>
                  <Radio value="three" disabled>
                    Three
                  </Radio>
                  <Radio value="four">Four</Radio>
                  <button onClick={() => form.setFieldsValue({ 'radio-group-3': '' })}>clear</button>
                </Space>
              </Radio.Group>
            </Form.Field>
            <button type="submit">Submit</button>
          </Form>
          <br />
          <div className="storybook-label">Form data:</div>
          <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

const MyRadio: React.FC<RadioProps> = (radioProps) => {
  const {
    props: { checked, disabled },
    inputProps,
  } = useRadio(radioProps);
  return (
    <label
      style={{
        color: disabled ? 'grey' : 'initial',
      }}
    >
      <input
        {...inputProps}
        style={{
          visibility: 'hidden',
        }}
      />
      {checked ? '>' : '|'}
      {radioProps.children}
    </label>
  );
};

export const CustomRadio = (): React.ReactElement => {
  /*
  // Custom Radio element
  const MyRadio: React.FC<RadioProps> = (myProps) => {
    const {
      props: { checked, disabled },
      inputProps,
    } = Radio.useRadio(myProps);
    return (
      <label
        style={{
          color: disabled ? 'grey' : 'initial',
        }}
      >
        <input
          {...inputProps}
          style={{
            visibility: 'hidden',
          }}
        />
        {checked ? '>' : '|'}
        {myProps.children}
      </label>
    );
  };
  */

  const [value, setValue] = React.useState('');

  return (
    <div className="storybook-rows">
      <div className="storybook-row">
        <div className="storybook-row-item">
          <div className="storybook-label">Value: {value}</div>
          <Radio.Group name="cool-radio-group" value={value} onChange={setValue}>
            <MyRadio value="1">one</MyRadio> <br />
            <MyRadio value="2">two</MyRadio> <br />
            <MyRadio value="3">three</MyRadio>
            <br />
            <MyRadio value="4" disabled defaultChecked>
              four
            </MyRadio>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};
