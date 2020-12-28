import * as React from 'react';

import { Stepper } from './Stepper';

export default {
  title: 'Stepper',
  component: Stepper,
};

export const StepperRight = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Stepper</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Stepper min={0} max={100} placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Stepper placeholder="Text field" value={100} onChange={(): null => null} />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Stepper hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Stepper disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Stepper + Label</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Stepper label="Label" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Stepper label="Label" placeholder="Text field" value={100} />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Stepper label="Label" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Stepper label="Label" disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Stepper extra="Extra" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Stepper extra="Extra" placeholder="Text field" value={100} />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Stepper extra="Extra" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Stepper extra="Extra" disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Stepper + Label + Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Stepper label="Label" extra="Extra" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Stepper label="Label" extra="Extra" placeholder="Text field" value={100} />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Stepper label="Label" extra="Extra" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Stepper label="Label" extra="Extra" disabled placeholder="Text field" />
      </div>
    </div>
  </div>
);

export const StepperLeft = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Stepper</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Stepper align="left" min={0} max={100} placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Stepper align="left" placeholder="Text field" value={100} onChange={(): null => null} />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Stepper align="left" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Stepper align="left" disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Stepper + Label</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Stepper align="left" label="Label" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Stepper align="left" label="Label" placeholder="Text field" value={100} />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Stepper align="left" label="Label" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Stepper align="left" label="Label" disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Stepper align="left" extra="Extra" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Stepper align="left" extra="Extra" placeholder="Text field" value={100} />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Stepper align="left" extra="Extra" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Stepper align="left" extra="Extra" disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Stepper + Label + Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Stepper align="left" label="Label" extra="Extra" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Stepper align="left" label="Label" extra="Extra" placeholder="Text field" value={100} />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Stepper align="left" label="Label" extra="Extra" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Stepper align="left" label="Label" extra="Extra" disabled placeholder="Text field" />
      </div>
    </div>
  </div>
);
