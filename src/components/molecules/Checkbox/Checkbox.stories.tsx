import * as React from 'react';

import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Checkbox', 'molecules'),
  component: Checkbox,
};

export const Regular = (): React.ReactElement => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="storybook-rows">
      <div className="storybook-row">
        <div className="storybook-header">Checkbox</div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Switcher</div>
          <Checkbox checked={checked} onChange={setChecked} text="Simple checkbox" />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Active</div>
          <Checkbox checked text="Simple checkbox" />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Inactive</div>
          <Checkbox disabled text="Simple checkbox" />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Active</div>
          <Checkbox disabled checked text="Simple checkbox" />
        </div>
      </div>

      <div className="storybook-row">
        <div className="storybook-header">Checkbox & Align right</div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Switcher</div>
          <Checkbox checkAlign="right" checked={checked} onChange={setChecked} text="Simple checkbox" />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Active</div>
          <Checkbox checkAlign="right" checked text="Simple checkbox" />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Inactive</div>
          <Checkbox checkAlign="right" disabled text="Simple checkbox" />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Active</div>
          <Checkbox checkAlign="right" disabled checked text="Simple checkbox" />
        </div>
      </div>
    </div>
  );
};

export const Indeterminate = (): React.ReactElement => {
  const [checked, setChecked] = React.useState(1);

  return (
    <div className="storybook-rows">
      <div className="storybook-row">
        <div className="storybook-header">Checkbox Indeterminate</div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Switcher</div>
          <Checkbox
            indeterminate={checked === 2}
            checked={checked === 3}
            onChange={() => setChecked((s) => (s < 3 ? s + 1 : 1))}
            text="Simple checkbox"
          />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Active</div>
          <Checkbox indeterminate text="Simple checkbox" />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled</div>
          <Checkbox indeterminate disabled text="Simple checkbox" />
        </div>
      </div>

      <div className="storybook-row">
        <div className="storybook-header">Checkbox & Align right</div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Switcher</div>
          <Checkbox
            checkAlign="right"
            indeterminate={checked === 2}
            checked={checked === 3}
            onChange={() => setChecked((s) => (s < 3 ? s + 1 : 1))}
            text="Simple checkbox"
          />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Active</div>
          <Checkbox checkAlign="right" indeterminate text="Simple checkbox" />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled</div>
          <Checkbox checkAlign="right" indeterminate disabled text="Simple checkbox" />
        </div>
      </div>
    </div>
  );
};

const options = [
  { value: 1, text: 'Simple checkbox 1' },
  { value: 2, text: 'Simple checkbox 2' },
];

export const Group = (): React.ReactElement => {
  const [values, setValues] = React.useState<(string | number)[]>([]);

  return (
    <div className="storybook-rows">
      <div className="storybook-row">
        <div className="storybook-header">Checkbox Group</div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Switcher</div>
          <CheckboxGroup options={options} values={values} onChange={setValues} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Active</div>
          <CheckboxGroup options={options} values={[1]} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled</div>
          <CheckboxGroup disabled options={options} values={[]} />
        </div>
      </div>

      <div className="storybook-row">
        <div className="storybook-header">Checkbox Group & Align right</div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Switcher</div>
          <CheckboxGroup checkAlign="right" options={options} values={values} onChange={setValues} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Active</div>
          <CheckboxGroup checkAlign="right" options={options} values={[1]} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled</div>
          <CheckboxGroup checkAlign="right" disabled options={options} values={[]} />
        </div>
      </div>
    </div>
  );
};
