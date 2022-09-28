import * as React from 'react';
import cn from 'classnames';
import { useEventListener } from 'hooks';
import { Space, Label, Loader } from 'components';
import { Item, ItemProps } from './Item';

import { Context } from '../../Context';
import { SelectMode, OptionValue, Option } from '../../interfaces';
import { ScrollMode } from '../Pagination';

export interface OptionsComposition {
  Item: React.FC<ItemProps>;
}

export interface OptionsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  mode?: SelectMode;
  scrollMode?: ScrollMode;
  options?: Option[];
  loading?: boolean;
  value?: OptionValue | OptionValue[];
  emptyLabel?: string;
  newOption?: string;
  onPrev?: () => void;
  onNext?: () => void;
  onClose?: () => void;
  onChange?: (value: OptionValue | OptionValue[]) => void;
  onClickAddNew?: (value: string) => void;
}

const Options = ({
  mode = 'single',
  scrollMode = 'regular',
  loading,
  options = [],
  value,
  emptyLabel = 'No found',
  newOption,
  onNext,
  onClose,
  onChange,
  onClickAddNew,
  ...props
}: OptionsProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { offsetBottom, maxHeight, setState } = React.useContext(Context);
  const [activeItem, setActiveItem] = React.useState(0);

  const onScroll = (e): void => {
    const scrollTop = Math.floor(e.target.scrollTop);

    if (scrollMode !== 'regular' && onNext && e.target.scrollHeight - e.target.offsetHeight - scrollTop <= 3) {
      onNext();
    }
  };

  React.useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();

    if (!maxHeight && rect?.height && offsetBottom && options.length && !loading) {
      const height = window.innerHeight - offsetBottom;

      setState({ maxHeight: height <= rect.height ? height : rect.height - +(scrollMode === 'scroll') });
    }
  }, [ref.current, offsetBottom, scrollMode, options, loading, maxHeight]);

  React.useEffect(() => {
    if (ref.current && !scrollMode && options?.length) {
      ref.current.scrollTop = 0;
    }
  }, [ref.current, options, scrollMode]);

  React.useEffect(() => {
    if (ref.current && scrollMode === 'scroll') {
      ref.current.addEventListener('scroll', onScroll);
    }

    return () => {
      if (ref.current && scrollMode === 'scroll') {
        ref.current.removeEventListener('scroll', onScroll);
      }
    };
  }, [ref.current, onScroll, scrollMode]);

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
      {...props}
      className={cn(
        'ebs-select__options-items',
        {
          'ebs-select__options--multiple': ['multiple', 'tags'].includes(mode),
        },
        props.className,
      )}
      style={maxHeight ? { ...props.style, maxHeight } : props.style}
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

      <Loader
        loading={scrollMode !== 'scroll' ? loading || false : false}
        height={!ref.current || ref.current?.offsetHeight < 300 ? 300 : ref.current.offsetHeight}
      >
        {options.length
          ? options.map((option, key) => (
              <Item
                key={key}
                active={
                  ['multiple', 'tags'].includes(mode) && Array.isArray(value)
                    ? value.includes(option.value)
                    : value === option.value
                }
                mode={mode}
                selected={activeItem === key + 1}
                onClick={onChangeHandler}
                {...option}
              />
            ))
          : !loading && (
              <Space size="large" justify="center" className="ebs-select__options--empty">
                {emptyLabel}
              </Space>
            )}
      </Loader>

      {loading ? (
        <Space justify="center" className="mt-10">
          <Loader.Inline />
        </Space>
      ) : null}
    </div>
  );
};

const OptionsComponent = (props: OptionsProps) => <Options {...props} />;

OptionsComponent.displayName = 'Options';

OptionsComponent.Item = Item;

export { Options, OptionsComponent };
