import * as React from 'react';
import { Button, Icon } from 'components/atoms';

import { DetailsCard, HeadLeft } from './DetailsCard';
import { exportStory } from 'libs';

export default {
  title: exportStory('DetailsCard', 'atoms'),
  component: DetailsCard,
  subcomponents: { HeadLeft },
};

export const Regular = (): React.ReactElement => (
  <DetailsCard
    headLeft={
      <HeadLeft
        title="Petr SR"
        subtitle={<span style={{ borderRadius: '50%' }}>Approved</span>}
        icon={<Icon type="info" />}
      />
    }
    headRight={<Button>Push Me</Button>}
    footer={<Button>Push Me</Button>}
  >
    <div style={{ padding: '20px' }}>Story Book Card Details</div>
  </DetailsCard>
);
