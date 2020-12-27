import * as React from 'react';

import { InputPhone } from './InputPhone';

export default {
  title: 'InputPhone',
  component: InputPhone,
};

export const Regular: React.FC = () => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Input Phone</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <InputPhone />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <InputPhone value="+37378014910" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <InputPhone hasError />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <InputPhone disabled />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Input Phone + Label</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <InputPhone label="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <InputPhone label="Label" value="+37378014910" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <InputPhone label="Label" hasError />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <InputPhone label="Label" disabled />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Input Phone + Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <InputPhone extra="Extra" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <InputPhone extra="Extra" value="+37378014910" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <InputPhone extra="Extra" hasError />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <InputPhone extra="Extra" disabled />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Input Phone + Label & Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <InputPhone label="Label" extra="Extra" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <InputPhone label="Label" extra="Extra" value="+37378014910" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <InputPhone label="Label" extra="Extra" hasError />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <InputPhone label="Label" extra="Extra" disabled />
      </div>
    </div>
  </div>
);
