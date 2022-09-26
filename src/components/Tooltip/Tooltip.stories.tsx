import * as React from 'react';
import { Button } from 'components';

import { Tooltip, TooltipProps } from './Tooltip';
import { exportStory } from 'libs';

export default {
  title: exportStory('Tooltip', 'data-display'),
  component: Tooltip,
  argTypes: {
    title: { control: { type: 'text' } },
  },
};

export const Regular: React.FC<React.PropsWithChildren<TooltipProps>> & { args: TooltipProps } = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <div>
      <Tooltip {...props}>
        <Button>Example</Button>
      </Tooltip>
      <div className="mr-15 inline"></div>
      <Tooltip {...props}>
        <Button>Example</Button>
      </Tooltip>
      <div className="mr-15 inline"></div>
      <Tooltip {...props}>
        <Button>Example</Button>
      </Tooltip>
    </div>
  );
};

Regular.args = {
  tooltip: 'Tooltip content',
  inline: true,
  trigger: 'hover',
};
