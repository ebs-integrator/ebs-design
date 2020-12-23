import * as React from 'react';

import { Textarea } from './Textarea';

export default {
  title: 'Textarea',
  component: Textarea,
};

export const simple = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Text Input</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Textarea placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Textarea placeholder="Text field" value="Text field" onChange={(): null => null} />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Textarea hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Textarea disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Label</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Textarea label="Label" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Textarea label="Label" placeholder="Text field" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Textarea label="Label" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Textarea label="Label" disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Textarea extra="Extra" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Textarea extra="Extra" placeholder="Text field" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Textarea extra="Extra" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Textarea extra="Extra" disabled placeholder="Text field" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Text Input + Label + Extra</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <Textarea label="Label" extra="Extra" placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <Textarea label="Label" extra="Extra" placeholder="Text field" value="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <Textarea label="Label" extra="Extra" hasError placeholder="Text field" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Textarea label="Label" extra="Extra" disabled placeholder="Text field" />
      </div>
    </div>
  </div>
);
