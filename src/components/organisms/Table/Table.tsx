import * as React from 'react';
import cn from 'classnames';
import RCTable, { Column, ColumnGroup, Summary } from 'rc-table';
import { TableProps as RCTableProps } from 'rc-table/lib/Table';
import { ColumnType as RCColumnType } from 'rc-table/lib/interface';
import { Icon } from 'components/atoms';
import { SizeType } from 'types';
import { flattenArray } from 'libs';

type FilterType = 'asc' | 'desc';

// Extend default rc-table Column
interface ColumnType<T> extends RCColumnType<T> {
  onFilter?: (type: FilterType) => FilterType;
  mobileRender?: (data: T) => React.ReactNode;
  emptyCell?: string | React.ReactNode; // Empty value fallback for the specific column
  children?: ColumnType<T>[];
}

interface TableProps<T> extends RCTableProps<T> {
  size?: SizeType;
  columns?: ColumnType<T>[];
  emptyCell?: string | React.ReactNode; // Global fallback for empty cell value
}

// Filter types
const types: FilterType[] = ['desc', 'asc'];

const Table = <T extends object>({
  size = 'medium',
  emptyCell,
  children,
  ...props
}: TableProps<T>): React.ReactElement => {
  const [filters, setFilters] = React.useState<{ [key: string]: FilterType }>({});

  const transformColumns = (column: ColumnType<T>, index: number): ColumnType<T> => {
    // Get column key or generate unique one
    const key: React.Key =
      column.key ||
      `${Array(column.dataIndex || column.title || 'key')
        .join()
        .replace(',', '_')}-${index}`;

    const transformedColumn = {
      key,
      // Return fallback value for void data
      render: (value: any) => {
        const _emptyCell = column.emptyCell || emptyCell;

        if (value != null) {
          return value;
        }

        return typeof _emptyCell === 'function' ? _emptyCell() : _emptyCell;
      },
      ...column,
      className: cn(column.className, {
        'has-children': column.children !== undefined,
      }),
      title: column.onFilter ? (
        <span
          className={cn(`ebs-table__th--filtered`, `ebs-table__th--filtered-${filters[key] || 'none'}`)}
          onClick={(): void => onFilterHandler(key)}
        >
          {column.title} <Icon type="arrow-outline-bottom" model="bold" />
        </span>
      ) : (
        column.title
      ),
    };

    if (column && column.children) {
      return {
        ...transformedColumn,
        children: column.children.map(transformColumns),
      };
    } else {
      return transformedColumn;
    }
  };

  const columns = React.useMemo(() => props.columns?.map(transformColumns), [props.columns, filters]);

  // Handle column filters
  const onFilterHandler = React.useCallback(
    (key: React.Key) => {
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

      if (columns) {
        const column = flattenArray(columns).find((item) => item.key === key);

        if (column && column.onFilter) {
          column.onFilter(cloneFilters[key]);
        }
      }

      setFilters(cloneFilters);
    },
    [columns, filters],
  );

  return (
    <RCTable
      rowKey={(_, i) => `row-key-${i}`}
      {...props}
      className={cn(`ebs-table ebs-table--${size}`, props.className)}
      columns={columns}
    >
      {children}
    </RCTable>
  );
};

export { Table, Column, ColumnGroup, Summary };
export type { TableProps, ColumnType };
