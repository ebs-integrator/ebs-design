import * as React from 'react';
import OldTable from 'rc-table';
import { Icon } from 'components/atoms';

const types: ['desc', 'asc'] = ['desc', 'asc'];

export interface Column<T> {
  title?: React.ReactNode;
  dataIndex?: string;
  className?: string;
  width?: string | number;
  onFilter?: (type: 'asc' | 'desc') => void;
  render?: (value: T) => React.ReactNode;
  mobileRender?: (data: T) => React.ReactNode;
  action?: boolean;
}

interface Props<T extends object> {
  className?: string;
  page?: number;
  data: T[];
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
  className = '',
  size = 'regular',
  rowClassName = '',
}: Props<T>): React.ReactElement => {
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
      $data.map<{ key: number; [key: string]: any }>((item, key) => ({
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
        title: onFilter ? (
          <span
            className={`ebs-table-th-filtered ebs-table-th-filtered-${filters[key] || 'none'}`}
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
    <div className={`ebs-table-wrapper ${className}`}>
      <OldTable
        rowClassName={({ status, is_deleted }) =>
          `${rowClassName} ${
            status || is_deleted ? ` ebs-table-row-status-${status || (is_deleted && 'deleted')}` : ``
          }`
        }
        className={`ebs-table ebs-table-size-${size}`}
        data={data}
        columns={columns}
      />

      <div className="ebs-table-mobile">
        {!data.length && <div className="ebs-empty-list">No data</div>}

        {data.map((item: any) => (
          <div key={item.key} className="ebs-table-mobile-item">
            <div className="ebs-table-mobile-item-key">{item.key}</div>
            {columns.map((column) => {
              const render =
                column.mobileRender !== undefined
                  ? column.mobileRender(item as T)
                  : column.render !== undefined
                  ? column.render(item as T)
                  : column.dataIndex !== undefined
                  ? (item[column.dataIndex] as T)
                  : '---';

              return (
                <React.Fragment key={column.key}>
                  {column.action !== true ? (
                    <div
                      className={
                        column.key > 1
                          ? 'ebs-table-mobile-item-child'
                          : !column.key
                          ? 'ebs-table-mobile-item-title'
                          : 'ebs-table-mobile-item-desc'
                      }
                      key={column.key}
                    >
                      {column.key > 1 && <span className="ebs-table-mobile-item-child-title">{column.title}:</span>}

                      {render}
                    </div>
                  ) : (
                    render && (
                      <div className="ebs-table-mobile-item-action" key={column.key}>
                        {render}
                      </div>
                    )
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
