import * as React from 'react';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-sidebar');

export const BottomMenu = ({ children }: React.PropsWithChildren) => <div className={bem('bottom')}>{children}</div>;
