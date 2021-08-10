import * as React from 'react';
import SizeSwitcher from 'components/SizeSwitcher';

import { InputPhone } from './InputPhone';
import { exportStory } from '../../../libs';
import { SizeType } from 'types';

export default {
  title: exportStory('InputPhone', 'molecules'),
  component: InputPhone,
};

export const Regular: React.FC = () => (
  <SizeSwitcher>
    {(size) => (
      <div className="storybook-rows">
        <div className="storybook-row">
          <div className="storybook-header">Input Phone</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <InputPhone size={size as SizeType} />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <InputPhone size={size as SizeType} value="+37378014910" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Clearable</div>
            <InputPhone size={size as SizeType} value="+37378014910" isClearable />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Error</div>
            <InputPhone size={size as SizeType} hasError />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <InputPhone size={size as SizeType} disabled />
          </div>
        </div>

        <div className="storybook-row">
          <div className="storybook-header">Input Phone + Label</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <InputPhone size={size as SizeType} label="Label" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <InputPhone size={size as SizeType} label="Label" value="+37378014910" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Error</div>
            <InputPhone size={size as SizeType} label="Label" hasError />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <InputPhone size={size as SizeType} label="Label" disabled />
          </div>
        </div>

        <div className="storybook-row">
          <div className="storybook-header">Input Phone + Extra</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <InputPhone size={size as SizeType} extra="Extra" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <InputPhone size={size as SizeType} extra="Extra" value="+37378014910" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Error</div>
            <InputPhone size={size as SizeType} extra="Extra" hasError />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <InputPhone size={size as SizeType} extra="Extra" disabled />
          </div>
        </div>

        <div className="storybook-row">
          <div className="storybook-header">Input Phone + Label & Extra</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <InputPhone size={size as SizeType} label="Label" extra="Extra" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <InputPhone size={size as SizeType} label="Label" extra="Extra" value="+37378014910" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Error</div>
            <InputPhone size={size as SizeType} label="Label" extra="Extra" hasError />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <InputPhone size={size as SizeType} label="Label" extra="Extra" disabled />
          </div>
        </div>
      </div>
    )}
  </SizeSwitcher>
);
