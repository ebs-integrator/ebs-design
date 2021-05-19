import * as React from 'react';

import { Avatar, AvatarCard, AvatarInline } from './';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Avatar', 'atoms'),
  component: Avatar,
  subcomponents: { AvatarCard, AvatarInline },
};

export const regularWithPhoto = (): React.ReactElement => (
  <Avatar
    img="https://s3.amazonaws.com/TWFiles/328702/userAvatar/tf_ae0f94af-4f65-47f5-bc9e-e5cebb5537e2.photo_2018-08-07_16-57-45.jpg"
    alt="Wladimir Zhosan"
  />
);

export const regularWithOutPhoto = (): React.ReactElement => <Avatar alt="Wladimir Zhosan" />;

export const regularCicledWithPhoto = (): React.ReactElement => (
  <Avatar
    circle
    img="https://s3.amazonaws.com/TWFiles/328702/userAvatar/tf_ae0f94af-4f65-47f5-bc9e-e5cebb5537e2.photo_2018-08-07_16-57-45.jpg"
    alt="Wladimir Zhosan"
  />
);

export const regularCicledWithoutPhoto = (): React.ReactElement => <Avatar circle alt="Wladimir Zhosan" />;

export const statusActive = (): React.ReactElement => <Avatar alt="Wladimir Zhosan" status="active" />;

export const statusUnactive = (): React.ReactElement => <Avatar alt="Wladimir Zhosan" status="unactive" />;

export const bigWithPhoto = (): React.ReactElement => (
  <Avatar
    size="big"
    img="https://s3.amazonaws.com/TWFiles/328702/userAvatar/tf_ae0f94af-4f65-47f5-bc9e-e5cebb5537e2.photo_2018-08-07_16-57-45.jpg"
    alt="Wladimir Zhosan"
  />
);

export const bigWithOutPhoto = (): React.ReactElement => <Avatar size="big" alt="Wladimir Zhosan" />;

export const cardWithPhoto = (): React.ReactElement => (
  <AvatarCard
    img="https://s3.amazonaws.com/TWFiles/328702/userAvatar/tf_ae0f94af-4f65-47f5-bc9e-e5cebb5537e2.photo_2018-08-07_16-57-45.jpg"
    alt="Wladimir Zhosan"
  />
);

export const cardWithOutPhoto = (): React.ReactElement => <AvatarCard alt="Wladimir Zhosan" />;

export const cardWithStatus = (): React.ReactElement => <AvatarCard alt="Wladimir Zhosan" status="active" />;

export const avatarInline = (): React.ReactElement => (
  <AvatarInline alt="Wladimir Zhosan" status="active" description="Administrator" />
);

export const avatarInlineDynamicColor = (): React.ReactElement => (
  <AvatarInline alt="Wladimir Zhosan" status="active" type="dynamic" description="Administrator" />
);
