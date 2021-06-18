import * as React from 'react';
import { useNotify } from 'hooks';

import { icons } from './iconsList';
import { modelType } from './Icon';
import { Button, Space, Icon } from '../';
import { NotifyProvider, NotifyContainer } from '../../molecules';
import { exportStory, copyToClipboard } from '../../../libs';

export default {
  title: exportStory('Icon', 'atoms'),
  component: Icon,
};

export const Regular = (): React.ReactNode => {
  const IconList: React.FC = () => {
    const notify = useNotify();

    const onCopied = (): void => {
      notify.success({ title: 'Success', description: 'Copied to clipboard' });
    };

    return (
      <Space direction="vertical">
        <div className="storybook-header">Copy to clipboard on hover</div>
        <div className="storybook-icon-items">
          {(Object.keys(icons) as modelType[]).map((model) => {
            return Object.keys(icons[model]).map((icon) => {
              const iconName = `<Icon type="${icon}" ${model === 'bold' ? 'model="bold"' : ''} />`;

              const onCopy = (): void => {
                copyToClipboard(iconName);
                onCopied();
              };

              return (
                <Button className="storybook-icon-item" key={icon} onClick={onCopy}>
                  <div className="storybook-icon">
                    <Icon type={icon} model={model} />
                  </div>

                  <div className="storybook-icon-name">{iconName}</div>
                </Button>
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
