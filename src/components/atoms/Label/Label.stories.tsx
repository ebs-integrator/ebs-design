import * as React from 'react';

import { Label } from './Label';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Label', 'atoms'),
  component: Label,
};

export const Circled = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Label & Text Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label type="circle" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label disabled type="circle" text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Success Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label status="success" type="circle" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="success" disabled type="circle" text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Warning Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label status="warning" type="circle" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="warning" disabled type="circle" text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Danger Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label status="danger" type="circle" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="danger" disabled type="circle" text="Label" />
      </div>
    </div>

    <div className="storybook-row">
      <div className="storybook-header">Label & Info Status</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>
        <Label status="info" type="circle" text="Label" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <Label status="info" disabled type="circle" text="Label" />
      </div>
    </div>
  </div>
);

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
