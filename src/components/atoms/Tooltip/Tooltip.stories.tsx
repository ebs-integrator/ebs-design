import * as React from 'react';
import { Button } from 'components/atoms';

import { Tooltip } from './Tooltip';

export default {
  title: exportStory('Tooltip', 'atoms'),
  component: Tooltip,
};

export const Regular = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Tooltip Standart</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Top alignment</div>

        <div className="storybook-flex">
          <Tooltip placement="top" trigger="click" tooltip="Tooltip content">
            <Button type="primary">Click</Button>
          </Tooltip>

          <Tooltip placement="top" trigger="right-click" tooltip="Tooltip content">
            <Button type="primary">Right Click</Button>
          </Tooltip>

          <Tooltip placement="top" trigger="hover" tooltip="Tooltip content">
            <Button type="primary">Hover</Button>
          </Tooltip>
        </div>
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Right alignment</div>

        <div className="storybook-flex">
          <Tooltip placement="right" trigger="click" tooltip="Tooltip content">
            <Button type="primary">Click</Button>
          </Tooltip>

          <Tooltip placement="right" trigger="right-click" tooltip="Tooltip content">
            <Button type="primary">Right Click</Button>
          </Tooltip>

          <Tooltip placement="right" trigger="hover" tooltip="Tooltip content">
            <Button type="primary">Hover</Button>
          </Tooltip>
        </div>
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Bottom alignment</div>

        <div className="storybook-flex">
          <Tooltip placement="bottom" trigger="click" tooltip="Tooltip content">
            <Button type="primary">Click</Button>
          </Tooltip>

          <Tooltip placement="bottom" trigger="right-click" tooltip="Tooltip content">
            <Button type="primary">Right Click</Button>
          </Tooltip>

          <Tooltip placement="bottom" trigger="hover" tooltip="Tooltip content">
            <Button type="primary">Hover</Button>
          </Tooltip>
        </div>
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Left alignment</div>

        <div className="storybook-flex">
          <Tooltip placement="left" trigger="click" tooltip="Tooltip content">
            <Button type="primary">Click</Button>
          </Tooltip>

          <Tooltip placement="left" trigger="right-click" tooltip="Tooltip content">
            <Button type="primary">Right Click</Button>
          </Tooltip>

          <Tooltip placement="left" trigger="hover" tooltip="Tooltip content">
            <Button type="primary">Hover</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  </div>
);

export const Titled = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Tooltip Standart & Title</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Top alignment</div>

        <div className="storybook-flex">
          <Tooltip placement="top" trigger="click" title="Tooltip Title" tooltip="Tooltip content">
            <Button type="primary">Click</Button>
          </Tooltip>

          <Tooltip placement="top" trigger="right-click" title="Tooltip Title" tooltip="Tooltip content">
            <Button type="primary">Right Click</Button>
          </Tooltip>

          <Tooltip placement="top" trigger="hover" title="Tooltip Title" tooltip="Tooltip content">
            <Button type="primary">Hover</Button>
          </Tooltip>
        </div>
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Right alignment</div>

        <div className="storybook-flex">
          <Tooltip placement="right" trigger="click" title="Tooltip Title" tooltip="Tooltip content">
            <Button type="primary">Click</Button>
          </Tooltip>

          <Tooltip placement="right" trigger="right-click" title="Tooltip Title" tooltip="Tooltip content">
            <Button type="primary">Right Click</Button>
          </Tooltip>

          <Tooltip placement="right" trigger="hover" title="Tooltip Title" tooltip="Tooltip content">
            <Button type="primary">Hover</Button>
          </Tooltip>
        </div>
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Bottom alignment</div>

        <div className="storybook-flex">
          <Tooltip placement="bottom" trigger="click" title="Tooltip Title" tooltip="Tooltip content">
            <Button type="primary">Click</Button>
          </Tooltip>

          <Tooltip placement="bottom" trigger="right-click" title="Tooltip Title" tooltip="Tooltip content">
            <Button type="primary">Right Click</Button>
          </Tooltip>

          <Tooltip placement="bottom" trigger="hover" title="Tooltip Title" tooltip="Tooltip content">
            <Button type="primary">Hover</Button>
          </Tooltip>
        </div>
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Left alignment</div>

        <div className="storybook-flex">
          <Tooltip placement="left" trigger="click" title="Tooltip Title" tooltip="Tooltip content">
            <Button type="primary">Click</Button>
          </Tooltip>

          <Tooltip placement="left" trigger="right-click" title="Tooltip Title" tooltip="Tooltip content">
            <Button type="primary">Right Click</Button>
          </Tooltip>

          <Tooltip placement="left" trigger="hover" title="Tooltip Title" tooltip="Tooltip content">
            <Button type="primary">Hover</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  </div>
);
