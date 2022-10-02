import * as React from 'react';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-table-mobile');

// FIXME: Fix table on mobile
export const MobileTable: React.FC<any> = (props) => {
  const { columns, data } = props;

  return (
    <div className={bem()}>
      {!data.length && <div className="ebs-empty__list">No data</div>}

      {data.map((item: any, key) => (
        <div key={item.key} className={bem('item')}>
          <div className={bem('item-key')}>{item.key}</div>
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
                    className={bem(column.key ? 'item-child' : !column.key ? 'item-title' : 'item-desc')}
                    key={column.key}
                  >
                    {column.key > 1 && <span className={bem('item-child-title')}>{column.title}:</span>}

                    {render}
                  </div>
                ) : (
                  render && (
                    <div className={bem('item-action')} key={column.key}>
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
