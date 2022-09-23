import * as React from 'react';
import { Button, Label } from 'components';
import { Template } from 'components/storybook';
import { useNotify } from 'hooks';

import { NotifyContainer, NotifyProvider } from './Notify';
import { NotifyItem, NotifyItemProps } from './NotifyItem';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Notify', 'molecules'),
  component: NotifyItem,
  subcomponents: { NotifyItem },
};

export const Regular: React.FC<NotifyItemProps> & { args: NotifyItemProps } = ({ children, ...props }) => {
  const Notify: React.FC<NotifyItemProps> = ({ ...params }) => {
    const notify = useNotify();

    return (
      <Template>
        <Button size="small" type="fill" onClick={() => notify.regular(params)}>
          Regular
        </Button>
        <Button size="small" type="primary" onClick={() => notify.primary(params)}>
          Primary
        </Button>
        <Button type="text">
          <Label status="success" type="fill" text="Success" onClick={() => notify.success(params)} />
        </Button>
        <Button type="text">
          <Label status="danger" type="fill" text="Danger" onClick={() => notify.error(params)} />
        </Button>
        <Button type="text">
          <Label status="info" type="fill" text="Info" onClick={() => notify.info(params)} />
        </Button>
        <Button type="text">
          <Label status="warning" type="fill" text="Warning" onClick={() => notify.warning(params)} />
        </Button>
      </Template>
    );
  };

  return (
    <NotifyProvider>
      <NotifyContainer />
      <Notify {...props} />
    </NotifyProvider>
  );
};

Regular.args = {
  title: 'Example',
  description: 'This is an example component',
  size: 'medium',
  direction: 'vertical',
};
