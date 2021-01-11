import * as React from 'react';

import { Radio } from './Radio';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Radio', 'atoms'),
  component: Radio,
};

const options = [{ text: 'Simple Radio', value: 1 }];

export const Regular = (): React.ReactElement => {
  const [checked, setChecked] = React.useState('');

  return (
    <div className="storybook-rows">
      <div className="storybook-row">
        <div className="storybook-header">Radio</div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Switcher</div>
          <Radio options={options} value={checked} onChange={setChecked} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Inactive</div>
          <Radio options={options} value={2} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Active</div>
          <Radio options={options} value={1} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Inactive</div>
          <Radio options={[{ ...options[0], disabled: true }]} value={2} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Active</div>
          <Radio options={[{ ...options[0], disabled: true }]} value={1} />
        </div>
      </div>

      <div className="storybook-row">
        <div className="storybook-header">Radio & Align right</div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Switcher</div>
          <Radio radioAlign="right" options={options} value={checked} onChange={setChecked} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Inactive</div>
          <Radio radioAlign="right" options={options} value={2} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Active</div>
          <Radio radioAlign="right" options={options} value={1} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Inactive</div>
          <Radio radioAlign="right" options={[{ ...options[0], disabled: true }]} value={2} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Active</div>
          <Radio radioAlign="right" options={[{ ...options[0], disabled: true }]} value={1} />
        </div>
      </div>
    </div>
  );
};
