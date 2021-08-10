import * as React from 'react';
import SizeSwitcher from 'components/SizeSwitcher';

import { Avatar, AvatarCard, AvatarInline } from './';
import { AvatarSize } from './AvatarCard';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Avatar', 'atoms'),
  component: Avatar,
  subcomponents: { AvatarCard, AvatarInline },
};

const sizes = ['small', 'big'];

export const regularWithPhoto = (): React.ReactElement => (
  <SizeSwitcher sizes={sizes} defaultSize="small">
    {(size) => (
      <Avatar
        size={size as AvatarSize}
        img="https://s3.amazonaws.com/TWFiles/328702/userAvatar/tf_ae0f94af-4f65-47f5-bc9e-e5cebb5537e2.photo_2018-08-07_16-57-45.jpg"
        alt="Wladimir Zhosan"
      />
    )}
  </SizeSwitcher>
);

export const regularWithOutPhoto = (): React.ReactElement => (
  <SizeSwitcher sizes={sizes} defaultSize="small">
    {(size) => <Avatar size={size as AvatarSize} alt="Wladimir Zhosan" />}
  </SizeSwitcher>
);

export const regularCicledWithPhoto = (): React.ReactElement => (
  <SizeSwitcher sizes={sizes} defaultSize="small">
    {(size) => (
      <Avatar
        circle
        size={size as AvatarSize}
        img="https://s3.amazonaws.com/TWFiles/328702/userAvatar/tf_ae0f94af-4f65-47f5-bc9e-e5cebb5537e2.photo_2018-08-07_16-57-45.jpg"
        alt="Wladimir Zhosan"
      />
    )}
  </SizeSwitcher>
);

export const regularCicledWithoutPhoto = (): React.ReactElement => (
  <SizeSwitcher sizes={sizes} defaultSize="small">
    {(size) => <Avatar size={size as AvatarSize} circle alt="Wladimir Zhosan" />}
  </SizeSwitcher>
);

export const statusActive = (): React.ReactElement => (
  <SizeSwitcher sizes={sizes} defaultSize="small">
    {(size) => <Avatar size={size as AvatarSize} alt="Wladimir Zhosan" status="active" />}
  </SizeSwitcher>
);

export const statusUnactive = (): React.ReactElement => (
  <SizeSwitcher sizes={sizes} defaultSize="small">
    {(size) => <Avatar size={size as AvatarSize} alt="Wladimir Zhosan" status="unactive" />}
  </SizeSwitcher>
);

export const cardWithPhoto = (): React.ReactElement => (
  <SizeSwitcher sizes={sizes} defaultSize="small">
    {(size) => (
      <AvatarCard
        size={size as AvatarSize}
        img="https://s3.amazonaws.com/TWFiles/328702/userAvatar/tf_ae0f94af-4f65-47f5-bc9e-e5cebb5537e2.photo_2018-08-07_16-57-45.jpg"
        alt="Wladimir Zhosan"
      />
    )}
  </SizeSwitcher>
);

export const cardWithOutPhoto = (): React.ReactElement => (
  <SizeSwitcher sizes={sizes} defaultSize="small">
    {(size) => <AvatarCard size={size as AvatarSize} alt="Wladimir Zhosan" />}
  </SizeSwitcher>
);

export const cardWithStatus = (): React.ReactElement => (
  <SizeSwitcher sizes={sizes} defaultSize="small">
    {(size) => <AvatarCard size={size as AvatarSize} alt="Wladimir Zhosan" status="active" />}
  </SizeSwitcher>
);

export const avatarInline = (): React.ReactElement => (
  <SizeSwitcher sizes={sizes} defaultSize="small">
    {(size) => (
      <AvatarInline size={size as AvatarSize} alt="Wladimir Zhosan" status="active" description="Administrator" />
    )}
  </SizeSwitcher>
);

export const avatarInlineDynamicColor = (): React.ReactElement => (
  <SizeSwitcher sizes={sizes} defaultSize="small">
    {(size) => (
      <AvatarInline
        size={size as AvatarSize}
        alt="Wladimir Zhosan"
        status="active"
        type="dynamic"
        description="Administrator"
      />
    )}
  </SizeSwitcher>
);
