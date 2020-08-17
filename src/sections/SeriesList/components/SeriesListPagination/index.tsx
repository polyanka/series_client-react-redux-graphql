import React, { FC } from 'react';
import { Select, Pagination } from 'antd';
import { SeriesListFilter } from '../../../../lib/graphql/globalTypes';

interface Props {
  filter: SeriesListFilter;
  setFilter: (filter: SeriesListFilter) => void;
  total: number;
  page: number;
  limit: number;
  setPage: (page: number) => void;
}

const { Option } = Select;

export const SeriesListPagination: FC<Props> = ({
  filter,
  setFilter,
  page,
  total,
  limit,
  setPage,
}) => {
  return (
    <div>
      <span>Filter By</span>
      <Select
        value={filter}
        onChange={(filter: SeriesListFilter) => setFilter(filter)}
      >
        <Option value={SeriesListFilter.RATING_HIGH_TO_LOW}>
          Rating: Low to High
        </Option>
        <Option value={SeriesListFilter.RATING_LOW_TO_HIGH}>
          Rating: High to Low
        </Option>
      </Select>
      <Pagination
        current={page}
        total={total}
        defaultPageSize={limit}
        onChange={(pageValue) => setPage(pageValue)}
      />
    </div>
  );
};
