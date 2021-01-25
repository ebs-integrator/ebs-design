import * as React from 'react';

import { Label } from './Label';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Label', 'atoms'),
  component: Label,
};

export const Regular = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Label & Text Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label disabled text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Success Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label status="success" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="success" disabled text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Warning Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label status="warning" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="warning" disabled text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Danger Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label status="danger" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="danger" disabled text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Info Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label status="info" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="info" disabled text="Label" />
      </div>
    </div>
  </div>
);

export const Ghost = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Label & Text Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label type="ghost" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular circle</div>
        <Label type="ghost" circle text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label disabled type="ghost" text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Success Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label status="success" type="ghost" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular circle</div>
        <Label status="success" type="ghost" circle text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="success" disabled type="ghost" text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Warning Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label status="warning" type="ghost" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular circle</div>
        <Label status="warning" type="ghost" circle text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="warning" disabled type="ghost" text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Danger Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label status="danger" type="ghost" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular circle</div>
        <Label status="danger" type="ghost" circle text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="danger" disabled type="ghost" text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Info Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label status="info" type="ghost" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular circle</div>
        <Label status="info" type="ghost" circle text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="info" disabled type="ghost" text="Label" />
      </div>
    </div>
  </div>
);

export const Filled = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Label & Text Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Filled</div>
        <Label type="fill" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Filled circle</div>
        <Label type="fill" text="Label" circle />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label disabled type="fill" text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Success Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Filled</div>
        <Label status="success" type="fill" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Filled circle</div>
        <Label status="success" type="fill" circle text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="success" disabled type="fill" text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Warning Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Filled</div>
        <Label status="warning" type="fill" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Filled circle</div>
        <Label status="warning" type="fill" circle text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="warning" disabled type="fill" text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Danger Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Filled</div>
        <Label status="danger" type="fill" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Filled circle</div>
        <Label status="danger" type="fill" circle text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="danger" disabled type="fill" text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Info Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Filled</div>
        <Label status="info" type="fill" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Filled circle</div>
        <Label status="info" type="fill" circle text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="info" disabled type="fill" text="Label" />
      </div>
    </div>
  </div>
);
