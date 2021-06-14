import * as React from 'react';

import { icons } from './iconsList';
import { Icon } from './Icon';
import { exportStory } from '../../../libs';
// import IconSvg from 'resources/svg/example.svg';

export default {
  title: exportStory('Icon', 'atoms'),
  component: Icon,
};

export const Regular = (): React.ReactElement => (
  <div className="storybook-icon-items">
    {Object.keys(icons).map((model) => {
      return Object.keys(icons[model]).map((icon) => {
        return (
          <div className="storybook-icon-item" key={icon}>
            <div className="storybook-icon">
              <Icon type={icon} model={model} />
            </div>

            <div className="storybook-icon-name">{`<Icon type="${icon}" />`}</div>
          </div>
        );
      });
    })}
  </div>
);

// FIXME: Storybook build fail on importing svg
// export const Custom = (): React.ReactElement => {
//   return <Icon type="star" component={IconSvg} />;
// };
