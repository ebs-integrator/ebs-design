import * as React from 'react';

// FIXME: Fix table on mobile
export const MobileTable = (props: any) => {
  const { columns, data } = props;

  return (
    <div className="ebs-table__mobile">
      {!data.length && <div className="ebs-empty__list">No data</div>}

      {data.map((item: any, key) => (
        <div key={item.key} className="ebs-table__mobile-item">
          <div className="ebs-table__mobile-item-key">{item.key}</div>
          {columns.map((column) => {
            const render =
              column.mobileRender !== undefined
                ? column.mobileRender(item)
                : column.render !== undefined
                ? column.render(item)
                : column.dataIndex !== undefined
                ? item[column.dataIndex]
                : '---';

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

                    {render}
                  </div>
                ) : (
                  render && (
                    <div className="ebs-table__mobile-item-action" key={column.key}>
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
  );
};
