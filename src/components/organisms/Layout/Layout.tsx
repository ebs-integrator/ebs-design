import * as React from 'react';

import { Topbar } from './Topbar';
import { Container, Content, Footer } from './Parts';
import { LayoutProvider } from './context';

const Layout: React.FC<{ className?: string }> = ({ className, children }) => (
  <LayoutProvider>
    <Container className={className}>{children}</Container>
  </LayoutProvider>
);

export default Object.assign(Layout, { Topbar, Content, Footer });
