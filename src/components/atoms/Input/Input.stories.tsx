import * as React from 'react';
import { Icon } from 'components/atoms';

import { Input } from './Input';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Input', 'atoms'),
  component: Input,
};

export const Regular = (): React.ReactElement => {
  const [inputValues, setInputValues] = React.useState({
    numMin: '',
    numMax: '',
  });

  return (
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

        <div className="storybook-header">Number Input</div>

        <div className="storybook-row-item">
          <div className="storybook-label">Number</div>
          <Input
            type="number"
            name="numMin"
            value={inputValues.numMin}
            placeholder="min"
            min="0"
            max={inputValues.numMax}
            onChange={(value) => {
              setInputValues((s) => ({ ...s, numMin: value }));
            }}
          />
        </div>

        <div className="storybook-row-item">
          <div className="storybook-label">Number</div>
          <Input
            type="number"
            name="numMax"
            value={inputValues.numMax}
            placeholder="max"
            min={inputValues.numMin}
            max="100"
            onChange={(value) => setInputValues((s) => ({ ...s, numMax: value }))}
          />
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
};
export const IconRight = (): React.ReactElement => (
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

export const IconLeft = (): React.ReactElement => (
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
