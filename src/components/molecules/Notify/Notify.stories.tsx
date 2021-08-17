import * as React from 'react';
import { Space, Button, Label } from 'components/atoms';
import { SizeSwitcher } from 'components/storybook';
import { SpaceSize } from 'components/atoms/Space/Space';
import { useNotify } from 'hooks';

import { NotifyContainer, NotifyProvider } from './Notify';
import { NotifyItem } from './NotifyItem';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Notify', 'molecules'),
  component: NotifyContainer,
  subcomponents: { NotifyItem },
};

const description = 'This is an example component';

export const Regular = (): React.ReactNode => {
  const Notify: React.FC = () => {
    const notify = useNotify();

    return (
      <>
        <SizeSwitcher>{(size) => <NotifyContainer size={size as SpaceSize} />}</SizeSwitcher>
        <Space justify="space-between">
          <Button size="small" type="fill" onClick={() => notify.regular({ title: 'Regular', description })}>
            Regular
          </Button>
          <Button size="small" type="primary" onClick={() => notify.primary({ title: 'Primary', description })}>
            Primary
          </Button>
          <Button type="text">
            <Label
              status="success"
              type="fill"
              text="Success"
              onClick={() => notify.success({ title: 'Success', description })}
            />
          </Button>
          <Button type="text">
            <Label
              status="danger"
              type="fill"
              text="Danger"
              onClick={() => notify.error({ title: 'Error', description })}
            />
          </Button>
          <Button type="text">
            <Label status="info" type="fill" text="Info" onClick={() => notify.info({ title: 'Info', description })} />
          </Button>
          <Button type="text">
            <Label
              status="warning"
              type="fill"
              text="Warning"
              onClick={() => notify.warning({ title: 'Warning', description })}
            />
          </Button>
        </Space>
      </>
    );
  };

  return (
    <NotifyProvider>
      <Notify />
    </NotifyProvider>
  );
};
