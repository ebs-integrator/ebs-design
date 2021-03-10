import * as React from 'react';
import { Space, Button } from 'components/atoms';

interface PaginationProps {
  className?: string;
  count: number;
  page: number;
  limit: number;
  setPage: (value: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ count, page, limit, setPage, className }) => {
  const totals = React.useMemo(() => Math.ceil(count / limit), [count, limit]);
  const state = React.useMemo(() => (count ? `${page} of ${totals}` : null), [count, page]);

  const disabled = React.useMemo(
    () => ({
      previous: page <= 1,
      next: page >= totals,
    }),
    [page, totals],
  );

  const onClickPrevious = React.useCallback(() => setPage(page - 1), [page, setPage]);
  const onClickNext = React.useCallback(() => setPage(page + 1), [page, setPage]);

  return (
    <div className="ebs-smart-select__input__pagination">
      <Space align="center" justify="space-between" className={className}>
        <span className="no-wrap">{state}</span>
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
