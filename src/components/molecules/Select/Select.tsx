import React, { FC, ReactNode, Children } from 'react';
import RCSelect, { SelectProps as RCSelectProps } from 'rc-select';
import cn from 'classnames';

import { Option, OptionProps } from './Option';

export type SelectSize = 'small' | 'medium' | 'large';

export interface SelectProps extends Omit<RCSelectProps, 'options' | 'mode'> {
    multiple?: boolean;
    className?: string;
    size?: SelectSize;
    hasError?: boolean;
    label?: ReactNode;
    extra?: ReactNode;
    options?: OptionProps[];
}

const Select: FC<SelectProps> & { Option: typeof Option } = ({
    multiple, value, className, options = [], children, ...props
}) => {
    let _options: ReactNode[];
    if (options.length) {
        _options = options.map((optionProps) => <Option {...optionProps}/>)
    } else {
        _options = Children.toArray(children).filter((child: any) => child.type === Option);
    }
    const values = Array.isArray(value) ? value : [value];
    const missingOptions = values.reduce<any[]>((acc, value) => {
        const _value = typeof value === 'object' ? value.value : value;
        if (!_options.some((option: any) => option.props.value === _value )) {
            let optionProps;
            if (typeof value === 'object') {
                optionProps = value;
            } else {
                optionProps = { value: _value }
            }
            return [...acc, <Option hidden {...optionProps}/>]
        }
        return acc;
    }, []) 

    return (
        <RCSelect
            value={value}
            mode={multiple ? 'multiple' : 'combobox'}
            className={cn('ebs-select', className)}
            inputIcon="aaa"
            {...props}
        >
            {missingOptions}
            {_options}
        </RCSelect>
    )
};

Select.Option = Option;

export { Select };