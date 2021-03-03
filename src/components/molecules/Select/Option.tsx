import React, { FC, ReactNode } from 'react';
import { Option as RCOption } from 'rc-select';
import cn from 'classnames';

export interface OptionProps {
    className?: string;
    key?: string | number;
    label?: ReactNode; /* alias for children */
    value: string | number;
    disabled?: boolean;
    hidden?: boolean;
    children?: ReactNode;
}

export const Option: FC<OptionProps> = ({
    value, label, hidden = false, children, className, ...props
}) => (
    <RCOption
        value={value}
        className={cn('ebs-select__option', className, { 'ebs-select__option--hidden': hidden })}
        key={String(value)}
        {...props}
    >
        {label || children}
    </RCOption>
);