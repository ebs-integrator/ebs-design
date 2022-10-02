import * as React from 'react';

import { makeBEM } from 'libs';
import { Topbar } from './Topbar';
import { Container, Content, Footer } from './Parts';
import { LayoutProvider } from './context';

const bem = makeBEM('ebs-layout');

const Layout = ({ className, children }: React.PropsWithChildren<JSX.IntrinsicElements['div']>) => {
  const childs = React.useMemo(() => React.Children.toArray(children), [children]);
  const FooterElement = React.useMemo(
    () => childs.find((child) => React.isValidElement(child) && child.type === Footer),
    [childs],
  );
  const isFixedFooter = React.useMemo(
    () => React.isValidElement(FooterElement) && FooterElement?.props?.fixed,
    [FooterElement],
  );

  return (
    <LayoutProvider>
      <Container className={className}>
        {childs.map((child, i) => {
          if (!React.isValidElement(child)) return null;

          const isFooter = child.type === Footer;

          return child.type === Content ? (
            <div key={i} className={bem('container', { 'has-fixed-footer': isFixedFooter })}>
              {child}
              {FooterElement}
            </div>
          ) : (
            !isFooter && child
          );
        })}
      </Container>
    </LayoutProvider>
  );
};

Layout.Topbar = Topbar;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
