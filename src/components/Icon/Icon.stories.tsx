import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory, copyToClipboard } from 'libs';
import { useNotify } from 'hooks';
import { IconButton, NotifyContainer, NotifyProvider, Space } from 'components';
import { modelType, Icon } from './Icon';
import { icons } from './iconsList';

export default {
  title: exportStory('Icon', 'data-display'),
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Regular: ComponentStory<typeof Icon> = () => {
  const IconList: React.FC = () => {
    const notify = useNotify();

    const onCopied = (iconName: string): void => {
      notify.success({ title: 'Success', description: iconName + '\n Copied to clipboard' });
    };

    return (
      <Space direction="vertical">
        <div className="storybook-header">Copy to clipboard on hover</div>
        <div className="storybook-icon-items">
          {(Object.keys(icons) as modelType[]).map((model) => {
            return Object.keys(icons[model]).map((icon) => {
              const iconName = `<Icon type="${icon}" ${model === 'bold' ? 'model="bold"' : ''} />`;

              const onCopy = async (): Promise<void> => {
                await copyToClipboard(iconName);
                onCopied(iconName);
              };

              return (
                <IconButton
                  key={icon}
                  type="ghost"
                  size="large"
                  icon={icon}
                  iconType={model}
                  className="storybook-icon-item"
                  title={iconName}
                  onClick={onCopy}
                />
              );
            });
          })}
        </div>
      </Space>
    );
  };

  return (
    <NotifyProvider>
      <NotifyContainer />
      <IconList />
    </NotifyProvider>
  );
};
