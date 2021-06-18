import * as React from 'react';
import cn from 'classnames';
import { useEventListener } from 'hooks';
import { Animated, Space, Label } from 'components/atoms';
import { Item, ItemProps } from './Item';

import { SelectMode, OptionValue, Option } from '../Select';
import { ScrollMode } from '../Pagination';

export interface OptionsComposition {
  Item: React.FC<ItemProps>;
}

export interface OptionsProps {
  className?: string;
  mode?: SelectMode;
  scrollMode?: ScrollMode;
  options?: Option[];
  loading?: boolean;
  value?: OptionValue | OptionValue[];
  emptyLabel?: string;
  maxHeight?: number;
  newOption?: string;
  onPrev?: () => void;
  onNext?: () => void;
  onClose?: () => void;
  onChange?: (value: OptionValue | OptionValue[]) => void;
  onClickAddNew?: (value: string) => void;
}

const Options: React.FC<OptionsProps> & OptionsComposition = ({
  mode = 'single',
  scrollMode = 'regular',
  loading,
  options = [],
  value,
  emptyLabel = 'No found',
  maxHeight,
  newOption,
  onNext,
  onClose,
  onChange,
  onClickAddNew,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [activeItem, setActiveItem] = React.useState(0);

  const onScroll = (e): void => {
    const scrollTop = Math.floor(e.target.scrollTop);

    if (onNext && e.target.scrollHeight - e.target.offsetHeight - scrollTop <= 3) {
      onNext();
    }
  };

  React.useEffect(() => {
    if (ref?.current && !scrollMode && options?.length) {
      ref.current.scrollTop = 0;
    }
  }, [ref, options, scrollMode]);

  React.useEffect(() => {
    if (ref?.current && scrollMode) {
      ref.current.addEventListener('scroll', onScroll);
    }

    return () => {
      if (ref?.current && scrollMode) {
        ref.current.removeEventListener('scroll', onScroll);
      }
    };
  }, [ref, onScroll, scrollMode]);

  useEventListener(
    'keydown',
    ({ key }: { key: string }) => {
      if (['ArrowUp', 'ArrowDown', 'Escape', 'Enter'].includes(key)) {
        if (key === 'Escape' && mode === 'single' && onClose !== undefined) {
          onClose();
        }

        if (key === 'Enter' && onChange !== undefined) {
          const option = options[activeItem - 1];
          onChange(option.value);

          if (mode === 'single' && onClose !== undefined) {
            onClose();
          }
        }

        // User pressed the up arrow
        if (key === 'ArrowUp') {
          setActiveItem((s) => (s !== 0 ? s - 1 : options.length));
        }

        // User pressed the down arrow
        if (key === 'ArrowDown') {
          setActiveItem((s) => (s < options.length ? s + 1 : 0));
        }
      }
    },
    ref,
  );

  const onChangeHandler = (value: any): void => {
    if (onChange !== undefined) {
      onChange(value);
    }

    if (onClose !== undefined) {
      onClose();
    }
  };

  return (
    <div
      ref={ref}
      className={cn('ebs-select__options-items', {
        'ebs-select__options--multiple': ['multiple', 'tags'].includes(mode),
      })}
      style={maxHeight ? { maxHeight } : undefined}
    >
      {newOption && onClickAddNew && (
        <Item
          value={newOption}
          text={newOption}
          selected
          onClick={() => onClickAddNew(newOption)}
          suffix={<Label type="ghost" text="CTRL+Enter" />}
        />
      )}
      <Animated loading={loading} duration={100}>
        {options.length ? (
          options.map((option, key) => (
            <Item
              key={key}
              mode={mode}
              active={
                ['multiple', 'tags'].includes(mode) && Array.isArray(value)
                  ? value.includes(option.value)
                  : value === option.value
              }
              selected={activeItem === key + 1}
              text={option.text}
              onClick={onChangeHandler}
              {...option}
            />
          ))
        ) : (
          <Space size="large" justify="center" className="ebs-select__options--empty">
            {emptyLabel}
          </Space>
        )}
      </Animated>
    </div>
  );
};

Options.displayName = 'Options';

Options.Item = Item;

export { Options };
