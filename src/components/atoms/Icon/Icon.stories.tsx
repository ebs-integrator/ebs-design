import * as React from 'react';
import { iconsList } from './iconsList';
import { Icon } from './Icon';
import { ReactComponent as IconSvg } from './icon-example.svg';

export default {
  title: 'Icon',
  component: Icon,
};

export const Regular = (): React.ReactElement => (
  <div className="storybook-icon-items">
    {iconsList.map((icon) => (
      <div className="storybook-icon-item" key={icon}>
        <div className="storybook-icon">
          <Icon type={icon} />
        </div>

        <div className="storybook-icon-name">{`<Icon type="${icon}" />`}</div>
      </div>
    ))}
  </div>
);

export const Custom = (): React.ReactElement => {
  return <Icon type="star" component={IconSvg} />;
};
