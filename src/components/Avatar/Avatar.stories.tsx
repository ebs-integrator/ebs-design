import * as React from 'react';
import { Template } from 'components/storybook';

import { Avatar, AvatarProps } from './Avatar';
import { AvatarCard, CardProps } from './AvatarCard';
import { AvatarInline } from './AvatarInline';
import { exportStory } from 'libs';

export default {
  title: exportStory('Avatar', 'data-display'),
  component: Avatar,
  subcomponents: { AvatarCard, AvatarInline },
  argTypes: {
    icon: { control: 'text' },
    shortAlt: { control: 'text' },
  },
};

export const Regular: React.FC<AvatarProps> & { args: AvatarProps } = ({ children, ...props }) => (
  <Template>
    <Avatar {...props} />
  </Template>
);

Regular.args = {
  type: 'regular',
  img:
    'https://s3.amazonaws.com/TWFiles/328702/userAvatar/tf_ae0f94af-4f65-47f5-bc9e-e5cebb5537e2.photo_2018-08-07_16-57-45.jpg',
  alt: 'Wladimir Zhosan',
  size: 'small',
};

export const Card: React.FC<CardProps> & { args: CardProps } = ({ children, ...props }) => (
  <Template>
    <AvatarCard {...props} />
  </Template>
);

Card.args = Regular.args;

export const Inline: React.FC<CardProps> & { args: CardProps } = ({ children, ...props }) => (
  <Template>
    <AvatarInline {...props} />
  </Template>
);

Inline.args = {
  status: 'active',
  description: 'Administrator',
  alt: Regular.args.alt,
  type: Regular.args.type,
  size: Regular.args.size,
};
