import React, { FC } from 'react';
import { Select, Pagination, Row, Col, Space, Affix } from 'antd';
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
  children,
  filter,
  setFilter,
  page,
  total,
  limit,
  setPage,
}) => {
  return (
    <>
      <Row>
        <Col>
          <Affix offsetTop={64}>
            <Space>
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
            </Space>
          </Affix>
        </Col>
      </Row>
      {children}
      <Row>
        <Col>
          <Pagination
            current={page}
            total={total}
            defaultPageSize={limit}
            onChange={(pageValue) => setPage(pageValue)}
          />
        </Col>
      </Row>
    </>
  );
};
