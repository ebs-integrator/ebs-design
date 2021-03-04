import * as React from 'react';

import { Topbar } from './Topbar';
import { Container, Content, Footer } from './Parts';
import { LayoutProvider } from './context';

const Layout: React.FC<{ className?: string }> = ({ className, children }) => {
  const childs = React.useMemo(() => React.Children.toArray(children), [children]);
  const FoolterElement = React.useMemo(() => childs.find((child: any) => child.type === Footer) as any, [childs]);
  const hasFooter = React.useMemo(() => !!FoolterElement, [FoolterElement]);
  const isFixedFooter = React.useMemo(() => FoolterElement?.props?.fixed, [FoolterElement]);

  return (
    <LayoutProvider>
      <Container className={className}>
        {childs.map((child: any) => {
          const isFooter = child.type === Footer;

          return child.type === Content && hasFooter && !isFixedFooter ? (
            <div className="ebs-layout__container">
              {child}
              {FoolterElement}
            </div>
          ) : (
            (!isFooter || (isFooter && isFixedFooter)) && child
          );
        })}
      </Container>
    </LayoutProvider>
  );
};

export default Object.assign(Layout, { Topbar, Content, Footer });
