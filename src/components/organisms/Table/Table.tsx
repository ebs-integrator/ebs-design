import * as React from 'react';
import cn from 'classnames';
import OldTable from 'rc-table';
import { RenderedCell } from 'rc-table/lib/interface';
import { Icon } from 'components/atoms';
import { isObject } from 'libs';
import { GenericObject } from 'types';

const types: ['desc', 'asc'] = ['desc', 'asc'];

export interface Column<T> {
  title?: React.ReactNode;
  dataIndex?: string;
  className?: string;
  width?: string | number;
  onFilter?: (type: 'asc' | 'desc') => void;
  render?: (value: T, row: GenericObject, index: number) => React.ReactNode | RenderedCell<GenericObject>;
  mobileRender?: (data: T) => React.ReactNode;
  children?: Column<T>[];
  action?: boolean;
}

interface TableProps<T extends object> {
  className?: string;
  page?: number;
  data?: T[];
  columns: Column<T>[];
  size?: 'small' | 'big' | 'regular';
  expandable?: any;
  expandColumn?: boolean;
  rowClassName?: string;
}

export const Table = <T extends object>({
  page,
  columns: $columns,
  data: $data = [],
  size = 'regular',
  className,
  rowClassName,
}: TableProps<T>): React.ReactElement => {
  const [filters, setFilters] = React.useState<{ [key: number]: 'desc' | 'asc' }>({});

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

      const { onFilter } = $columns[key];
      if ($columns[key] && onFilter !== undefined) {
        onFilter(cloneFilters[key] || '');
      }

      setFilters(cloneFilters);
    },
    [$columns, filters],
  );

  const data = React.useMemo(
    () =>
      $data.map<GenericObject>((item, key) => ({
        ...(item as object),
        key: page !== undefined && page > 1 ? (page - 1) * 25 + key + 1 : key + 1,
      })),
    [$data],
  );

  const columns = React.useMemo(
    () =>
      $columns.map(({ title, onFilter, ...column }, key) => ({
        ...column,
        key,
        className: cn({
          'has-children': column.children !== undefined,
          'is-action': column.action,
        }),
        title: onFilter ? (
          <span
            className={cn(`ebs-table__th--filtered`, `ebs-table__th--filtered-${filters[key] || 'none'}`)}
            onClick={(): void => onFilterHandler(key)}
          >
            {title} <Icon type="arrow-outlined-bottom" />
          </span>
        ) : (
          title
        ),
      })),
    [$columns, filters, onFilterHandler],
  );

  return (
    <div className={cn(`ebs-table__wrapper`, className)}>
      <OldTable
        rowClassName={({ status, is_deleted }) =>
          cn(rowClassName, { [`ebs-table__row-status-${is_deleted ? 'deleted' : status}`]: status || is_deleted })
        }
        className={cn(`ebs-table`, `ebs-table-size-${size}`)}
        data={data}
        columns={columns}
      />

      <div className="ebs-table__mobile">
        {!data.length && <div className="ebs-empty__list">No data</div>}

        {data.map((item: any) => (
          <div key={item.key} className="ebs-table__mobile-item">
            <div className="ebs-table__mobile-item-key">{item.key}</div>
            {columns.map((column, i) => {
              const render =
                column.mobileRender !== undefined
                  ? column.mobileRender(item)
                  : column.render !== undefined
                  ? column.render(item, column, i)
                  : column.dataIndex !== undefined
                  ? item[column.dataIndex]
                  : '---';
              const renderChildren = !isObject(render)
                ? render
                : render && !isObject(render.children)
                ? render.children
                : render && render.children[column.dataIndex!];

              return (
                <React.Fragment key={column.key}>
                  {column.action !== true ? (
                    <div
                      className={
                        column.key > 1
                          ? 'ebs-table__mobile-item-child'
                          : !column.key
                          ? 'ebs-table__mobile-item-title'
                          : 'ebs-table__mobile-item-desc'
                      }
                      key={column.key}
                    >
                      {column.key > 1 && <span className="ebs-table__mobile-item-child-title">{column.title}:</span>}

                      {renderChildren}
                    </div>
                  ) : (
                    <div className="ebs-table__mobile-item-action" key={column.key}>
                      {renderChildren}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
