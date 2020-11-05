import * as React from 'react';
import { Icon } from 'atoms';

import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const simple = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Text Input</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Input placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Input placeholder="Text field" value="Text field" onChange={(): null => null} />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Input hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Input disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Label</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Input label="Label" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Input label="Label" placeholder="Text field" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Input label="Label" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Input label="Label" disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Input extra="Extra" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Input extra="Extra" placeholder="Text field" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Input extra="Extra" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Input extra="Extra" disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Label + Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Input label="Label" extra="Extra" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Input label="Label" extra="Extra" placeholder="Text field" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Input label="Label" extra="Extra" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Input label="Label" extra="Extra" disabled placeholder="Text field" />
      </div>
    </div>
  </div>
);

export const iconRight = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Text Input</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Input suffix={<Icon type="eye" />} placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Input suffix={<Icon type="eye" />} placeholder="Text field" value="Text field" onChange={(): null => null} />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Input suffix={<Icon type="eye" />} hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Input suffix={<Icon type="eye" />} disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Label</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Input suffix={<Icon type="eye" />} label="Label" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Input suffix={<Icon type="eye" />} label="Label" placeholder="Text field" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Input suffix={<Icon type="eye" />} label="Label" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Input suffix={<Icon type="eye" />} label="Label" disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Input suffix={<Icon type="eye" />} extra="Extra" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Input suffix={<Icon type="eye" />} extra="Extra" placeholder="Text field" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Input suffix={<Icon type="eye" />} extra="Extra" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Input suffix={<Icon type="eye" />} extra="Extra" disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Label + Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Input suffix={<Icon type="eye" />} label="Label" extra="Extra" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Input suffix={<Icon type="eye" />} label="Label" extra="Extra" placeholder="Text field" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Input suffix={<Icon type="eye" />} label="Label" extra="Extra" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Input suffix={<Icon type="eye" />} label="Label" extra="Extra" disabled placeholder="Text field" />
      </div>
    </div>
  </div>
);

export const iconLeft = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Text Input</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Input prefix={<Icon type="eye" />} placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Input prefix={<Icon type="eye" />} placeholder="Text field" value="Text field" onChange={(): null => null} />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Input prefix={<Icon type="eye" />} hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Input prefix={<Icon type="eye" />} disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Label</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Input prefix={<Icon type="eye" />} label="Label" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Input prefix={<Icon type="eye" />} label="Label" placeholder="Text field" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Input prefix={<Icon type="eye" />} label="Label" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Input prefix={<Icon type="eye" />} label="Label" disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Input prefix={<Icon type="eye" />} extra="Extra" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Input prefix={<Icon type="eye" />} extra="Extra" placeholder="Text field" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Input prefix={<Icon type="eye" />} extra="Extra" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Input prefix={<Icon type="eye" />} extra="Extra" disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Label + Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Input prefix={<Icon type="eye" />} label="Label" extra="Extra" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Input prefix={<Icon type="eye" />} label="Label" extra="Extra" placeholder="Text field" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Input prefix={<Icon type="eye" />} label="Label" extra="Extra" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Input prefix={<Icon type="eye" />} label="Label" extra="Extra" disabled placeholder="Text field" />
      </div>
    </div>
  </div>
);
