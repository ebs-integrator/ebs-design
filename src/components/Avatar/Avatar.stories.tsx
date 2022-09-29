import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Avatar } from './Avatar';
import { AvatarCard } from './AvatarCard';
import { AvatarInline } from './AvatarInline';

export default {
  title: exportStory('Avatar', 'data-display'),
  component: Avatar,
  subcomponents: { AvatarCard, AvatarInline },
  argTypes: {
    icon: { control: 'text' },
    shortAlt: { control: 'text' },
  },
} as ComponentMeta<typeof Avatar>;

export const Regular: ComponentStory<typeof Avatar> = (args) => (
  <Template>
    <Avatar {...args} />
  </Template>
);

Regular.args = {
  type: 'regular',
  img: 'https://s3.amazonaws.com/TWFiles/328702/userAvatar/tf_ae0f94af-4f65-47f5-bc9e-e5cebb5537e2.photo_2018-08-07_16-57-45.jpg',
  alt: 'Wladimir Zhosan',
  size: 'small',
};

export const Card: ComponentStory<typeof AvatarCard> = (args) => (
  <Template>
    <AvatarCard {...args} />
  </Template>
);

Card.args = Regular.args;

export const Inline: ComponentStory<typeof AvatarInline> = (args) => (
  <Template>
    <AvatarInline {...args} />
  </Template>
);

Inline.args = {
  status: 'active',
  description: 'Administrator',
  alt: Regular.args.alt,
  type: Regular.args.type,
  size: Regular.args.size,
};
