import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Tabs } from './Tabs';

export default {
  title: exportStory('Tabs', 'navigation'),
  component: Tabs,
  argTypes: {
    activeTab: {
      options: ['first', 'third'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Tabs>;

export const Regular: ComponentStory<typeof Tabs> = ({ children, ...props }) => {
  const data = [
    {
      label: <span>First tab</span>,
      key: 'first',
      content: <span>Content First tab</span>,
    },
    {
      label: <span>Second tab</span>,
      disabled: true,
      key: 'second',
      content: <span>Content Second tab</span>,
    },
    {
      label: <span>Third tab</span>,
      disabled: false,
      key: 'third',
      content: <span>Content Third tab</span>,
    },
    {
      label: <span>Fourth tab</span>,
      disabled: true,
      key: 'fourth',
      content: <span>Content Fourth tab</span>,
    },
  ];

  return (
    <Tabs {...props}>
      {data.map((item) => (
        <Tabs.Tab {...item} tabKey={item.key} />
      ))}
      <h2>Custom elements for all tabs</h2>
      {data.map((item) => (
        <Tabs.Panel key={item.key} tabKey={item.key}>
          {item.content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

Regular.args = {
  className: '',
  activeTab: 'first',
  setActiveTab: (key: string) => console.log(key),
};
