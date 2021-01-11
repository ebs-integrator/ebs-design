import * as React from 'react';

import { InputSearch } from './InputSearch';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('InputSearch', 'molecules'),
  component: InputSearch,
};

export const Simple = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Input Search & Stroke</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <InputSearch placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <InputSearch value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <InputSearch disabled value="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Input Search & Fill</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <InputSearch styleType="fill" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <InputSearch styleType="fill" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <InputSearch disabled styleType="fill" value="Text field" />
      </div>
    </div>
  </div>
);

export const IconAlignment = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Input Search & Left Alignment & Stroke</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <InputSearch iconAlign="prefix" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <InputSearch iconAlign="prefix" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <InputSearch iconAlign="prefix" disabled value="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Input Search & Left Alignment & Fill</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <InputSearch iconAlign="prefix" styleType="fill" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <InputSearch iconAlign="prefix" styleType="fill" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <InputSearch iconAlign="prefix" disabled styleType="fill" value="Text field" />
      </div>
    </div>
  </div>
);
