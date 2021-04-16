import * as React from 'react';
import cn from 'classnames';
import { GenericObject } from 'types';

import { Topbar } from './Topbar';
import { Container, Content, Footer } from './Parts';
import { LayoutProvider } from './context';

const Layout: React.FC<{ className?: string }> = ({ className, children }) => {
  const childs = React.useMemo(() => React.Children.toArray(children) as GenericObject[], [children]);
  const FoolterElement = React.useMemo(() => childs.find((child) => child.type === Footer), [childs]);
  const isFixedFooter = React.useMemo(() => FoolterElement?.props?.fixed, [FoolterElement]);

  return (
    <LayoutProvider>
      <Container className={className}>
        {childs.map((child, i) => {
          const isFooter = child.type === Footer;

          return child.type === Content ? (
            <div
              key={i}
              className={cn('ebs-layout__container', { 'ebs-layout__container--has-fixed-footer': isFixedFooter })}
            >
              {child}
              {FoolterElement}
            </div>
          ) : (
            !isFooter && child
          );
        })}
      </Container>
    </LayoutProvider>
  );
};

export default Object.assign(Layout, { Topbar, Content, Footer });
