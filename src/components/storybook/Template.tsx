import * as React from 'react';

const Template = ({ children }: React.PropsWithChildren) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>{children}</div>
);

export default Template;
