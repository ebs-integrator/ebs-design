import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Space, Button } from 'components';

export default {
  title: exportStory('Pagination', 'navigation'),
} as ComponentMeta<typeof Space>;

const t = (value: string): string => value;

export const Regular: ComponentStory<typeof Space> = () => {
  const Pagination: React.FC<any> = ({ count = 3, filters = { page: 1, limit: 15 }, setFilters, className }) => {
    // const { t } = useTranslation();

    const state = React.useMemo(
      () => (count ? `${filters.page} of ${Math.ceil(count / filters.limit)}` : null),
      [filters],
    );

    const onClickPrevious = React.useCallback(
      () => setFilters((current) => ({ page: parseInt(current.page) - 1 })),
      [setFilters],
    );
    const onClickNext = React.useCallback(
      () => setFilters((current) => ({ page: parseInt(current.page) + 1 })),
      [setFilters],
    );

    return (
      <Space align="center" justify="space-between" className={className}>
        <span className="no-wrap">{state}</span>
        <Space>
          <Button size="small" type="ghost" onClick={onClickPrevious}>
            {t('previous')}
          </Button>

          <Button size="small" type="ghost" onClick={onClickNext}>
            {t('next')}
          </Button>
        </Space>
      </Space>
    );
  };

  return <Pagination />;
};
