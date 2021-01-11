import * as React from 'react';

import { Switch } from './Switch';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Switch', 'atoms'),
  component: Switch,
};

export const Regular = (): React.ReactElement => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="storybook-rows">
      <div className="storybook-row">
        <div className="storybook-header">Switch</div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Switcher</div>
          <Switch onChange={setChecked} checked={checked} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Inactive</div>
          <Switch checked={false} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Active</div>
          <Switch checked />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Inactive</div>
          <Switch disabled />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Active</div>
          <Switch checked disabled />
        </div>
      </div>
    </div>
  );
};
