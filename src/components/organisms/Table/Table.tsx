import * as React from 'react';
import cn from 'classnames';
import RCTable, { Column, ColumnGroup, Summary } from 'rc-table';
import { TableProps as RCTableProps } from 'rc-table/lib/Table';
import { ColumnType as RCColumnType } from 'rc-table/lib/interface';
import { Icon } from 'components/atoms';
import { SizeType } from 'types';

type FilterType = 'asc' | 'desc';

// Extend default rc-table Column
interface ColumnType<T> extends RCColumnType<T> {
  onFilter?: (type: FilterType) => void;
  mobileRender?: (data: T) => React.ReactNode;
  children?: ColumnType<T>[];
}

interface TableProps<T> extends RCTableProps<T> {
  size?: SizeType;
  columns?: ColumnType<T>[];
  striped?: boolean;
  bordered?: boolean;
}

// Filter types
const types: FilterType[] = ['desc', 'asc'];

const Table = <T extends object>({
  size = 'medium',
  striped,
  bordered,
  children,
  ...props
}: TableProps<T>): React.ReactElement => {
  const [filters, setFilters] = React.useState<{ [key: number]: FilterType }>({});

  const onFilterHandler = React.useCallback(
    (key: number) => {
      const cloneFilters = { ...filters };

      if (cloneFilters[key]) {
        if (types[types.length - 1] === cloneFilters[key]) {
          delete cloneFilters[key];
        } else {
          // get next to
          cloneFilters[key] = types[types.indexOf(cloneFilters[key]) + 1];
        }
      } else {
        cloneFilters[key] = types[0];
      }

      if (props.columns && props.columns[key]) {
        const column: ColumnType<T> = props.columns[key];

        if (column.onFilter) {
          column.onFilter(cloneFilters[key] || '');
        }
      }

      setFilters(cloneFilters);
    },
    [props.columns, filters],
  );

  const columns = React.useMemo(
    () =>
      props.columns?.map(({ title, onFilter, ...column }: ColumnType<T>, index) => ({
        key: index,
        ...column,
        className: cn(column.className, {
          'has-children': column.children !== undefined,
        }),
        title: onFilter ? (
          <span
            className={cn(`ebs-table__th--filtered`, `ebs-table__th--filtered-${filters[index] || 'none'}`)}
            onClick={(): void => onFilterHandler(index)}
          >
            {title} <Icon type="arrow-outlined-bottom" />
          </span>
        ) : (
          title
        ),
      })),
    [props.columns, filters, onFilterHandler],
  );

  return (
    <RCTable
      {...props}
      prefixCls="ebs-table"
      className={cn(
        `ebs-table ebs-table--${size}`,
        { 'ebs-table-striped': striped },
        { 'ebs-table-bordered': bordered },
        props.className,
      )}
      columns={columns}
    >
      {children}
    </RCTable>
  );
};

export { Table, Column, ColumnGroup, Summary, TableProps, ColumnType };
