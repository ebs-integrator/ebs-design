import * as React from 'react';
import cn from 'classnames';
import * as BaseTableComponents from 'react-base-table';

const { default: BaseTable } = BaseTableComponents;

const Table: React.FC<BaseTableComponents.BaseTableProps> = ({
  className,
  columns = [],
  data,
  width = 1280,
  ...props
}) => {
  return (
    <div className={cn('ebs-table', className)}>
      <BaseTable columns={columns} data={data} width={width} maxHeight={Infinity} {...props} />
    </div>
  );
};

export default Object.assign(Table, { ...BaseTableComponents });
