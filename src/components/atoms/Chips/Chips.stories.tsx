import * as React from 'react';
import { Icon } from 'components/atoms';
import { Chips } from './Chips';

export default {
  title: 'Chips',
  component: Chips,
};

export const Regular = (): React.ReactElement => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="storybook-rows">
      <div className="storybook-row">
        <div className="storybook-header">Chips</div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Switcher</div>
          <Chips onChange={setChecked} checked={checked} text="Simple Chips" />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Inactive</div>
          <Chips checked={false} text="Simple Chips" />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Active</div>
          <Chips checked text="Simple Chips" />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Inactive</div>
          <Chips disabled text="Simple Chips" />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Active</div>
          <Chips checked disabled text="Simple Chips" />
        </div>
      </div>

      <div className="storybook-row">
        <div className="storybook-header">Chips + Prefix</div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Switcher</div>
          <Chips onChange={setChecked} checked={checked} text="Simple Chips" prefix={<Icon type="check" />} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Inactive</div>
          <Chips checked={false} text="Simple Chips" prefix={<Icon type="check" />} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Active</div>
          <Chips checked text="Simple Chips" prefix={<Icon type="check" />} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Inactive</div>
          <Chips disabled text="Simple Chips" prefix={<Icon type="check" />} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Active</div>
          <Chips checked disabled text="Simple Chips" prefix={<Icon type="check" />} />
        </div>
      </div>

      <div className="storybook-row">
        <div className="storybook-header">Chips + Suffix</div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Switcher</div>
          <Chips onChange={setChecked} checked={checked} text="Simple Chips" suffix={<Icon type="check" />} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Inactive</div>
          <Chips checked={false} text="Simple Chips" suffix={<Icon type="check" />} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Active</div>
          <Chips checked text="Simple Chips" suffix={<Icon type="check" />} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Inactive</div>
          <Chips disabled text="Simple Chips" suffix={<Icon type="check" />} />
        </div>

        <div className="storybook-row-item inline">
          <div className="storybook-label">Disabled & Active</div>
          <Chips checked disabled text="Simple Chips" suffix={<Icon type="check" />} />
        </div>
      </div>
    </div>
  );
};
