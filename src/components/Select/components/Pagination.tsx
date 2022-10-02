import * as React from 'react';

import { makeBEM } from 'libs';
import { Button, Space } from 'components';

const bem = makeBEM('ebs-select');

export type ScrollMode = 'regular' | 'scroll';

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
  page: number;
  limit: number;
  mode?: ScrollMode;
  setPage: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ count, page, limit, setPage, className, ...props }) => {
  const totalPages = React.useMemo(() => Math.ceil(count / limit), [count, limit]);
  const currentPage = React.useMemo(() => (count ? `${page} of ${totalPages}` : null), [count, page, totalPages]);

  const disabled = React.useMemo(
    () => ({
      previous: page <= 1,
      next: page >= totalPages,
    }),
    [page, totalPages],
  );

  const onClickPrevious = React.useCallback(() => setPage(page - 1), [page, setPage]);
  const onClickNext = React.useCallback(() => setPage(page + 1), [page, setPage]);

  return (
    <div className={bem('pagination')} {...props}>
      <Space align="center" justify="space-between" className={className}>
        <span className="no-wrap">{currentPage}</span>
        <Space>
          <Button size="small" disabled={disabled.previous} type="ghost" onClick={onClickPrevious}>
            {'Previous'}
          </Button>

          <Button size="small" disabled={disabled.next} type="ghost" onClick={onClickNext}>
            {'Next'}
          </Button>
        </Space>
      </Space>
    </div>
  );
};

Pagination.defaultProps = {
  mode: 'regular',
};

export { Pagination };
