import * as React from 'react';
import { InputSize } from 'components/atoms/Input/Input';
import SizeSwitcher from 'components/SizeSwitcher';

import { InputSearch } from './InputSearch';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('InputSearch', 'molecules'),
  component: InputSearch,
};

export const Regular = (): React.ReactElement => (
  <SizeSwitcher>
    {(size) => (
      <div className="storybook-rows">
        <div className="storybook-row">
          <div className="storybook-header">Input Search & Stroke</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <InputSearch size={size as InputSize} placeholder="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <InputSearch size={size as InputSize} value="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Clearable</div>
            <InputSearch size={size as InputSize} value="Text field" isClearable />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <InputSearch size={size as InputSize} disabled value="Text field" />
          </div>
        </div>

        <div className="storybook-row">
          <div className="storybook-header">Input Search & Fill</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <InputSearch size={size as InputSize} styleType="fill" placeholder="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <InputSearch size={size as InputSize} styleType="fill" value="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Clearable</div>
            <InputSearch size={size as InputSize} styleType="fill" value="Text field" isClearable />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <InputSearch size={size as InputSize} disabled styleType="fill" value="Text field" />
          </div>
        </div>
      </div>
    )}
  </SizeSwitcher>
);

export const IconAlignment = (): React.ReactElement => (
  <SizeSwitcher>
    {(size) => (
      <div className="storybook-rows">
        <div className="storybook-row">
          <div className="storybook-header">Input Search & Left Alignment & Stroke</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <InputSearch size={size as InputSize} iconAlign="prefix" placeholder="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <InputSearch size={size as InputSize} iconAlign="prefix" value="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <InputSearch size={size as InputSize} iconAlign="prefix" disabled value="Text field" />
          </div>
        </div>

        <div className="storybook-row">
          <div className="storybook-header">Input Search & Left Alignment & Fill</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <InputSearch size={size as InputSize} iconAlign="prefix" styleType="fill" placeholder="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <InputSearch size={size as InputSize} iconAlign="prefix" styleType="fill" value="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <InputSearch size={size as InputSize} iconAlign="prefix" disabled styleType="fill" value="Text field" />
          </div>
        </div>
      </div>
    )}
  </SizeSwitcher>
);
