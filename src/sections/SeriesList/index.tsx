import React, { FC, useState, useEffect, useRef } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { useQuery } from 'react-apollo';
import { List, Typography, Row, Col, Divider } from 'antd';
import { SeriesListPagination } from './components';
import { ErrorMessage, SeriesCard, Spinner } from '../../lib/components';
import { SERIES_LIST } from '../../lib/graphql';
import { SeriesListFilter, GenresType } from '../../lib/graphql/globalTypes';
import {
  SeriesList as SeriesListData,
  SeriesListVariables,
} from '../../lib/graphql/queries/SeriesList/__generated__/SeriesList';

interface MatchParams {
  genres: string;
  name: string;
}

const { Paragraph, Text, Title } = Typography;
const PAGE_LIMIT = 4;

export const SeriesList: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const nameRef = match.params.genres ? 'genres' : 'name';
  const valueRef = useRef(match.params[nameRef]);

  const [filter, setFilter] = useState<SeriesListFilter>(
    SeriesListFilter.RATING_HIGH_TO_LOW
  );

  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery<
    SeriesListData,
    SeriesListVariables
  >(SERIES_LIST, {
    variables: {
      genres:
        GenresType[
          valueRef.current.toLocaleUpperCase() as keyof typeof GenresType
        ],
      filter,
      limit: PAGE_LIMIT,
      page,
    },
  });

  useEffect(() => {
    setPage(1);
    valueRef.current = match.params[nameRef];
  }, [nameRef, match.params]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  const seriesList = data?.seriesList || null;

  const seriesListSectionElement =
    seriesList && seriesList.result.length ? (
      <SeriesListPagination
        filter={filter}
        setFilter={setFilter}
        total={seriesList.total}
        page={page}
        limit={PAGE_LIMIT}
        setPage={setPage}
      >
        <List
          grid={{ gutter: 16, column: 4, xs: 1, sm: 2, lg: 4 }}
          dataSource={seriesList.result}
          renderItem={(series) => (
            <List.Item>
              <SeriesCard series={series} />
            </List.Item>
          )}
        />
      </SeriesListPagination>
    ) : (
      <>
        <Paragraph>
          No result fount for query{' '}
          <Text mark>&quot;{valueRef.current}&quot;</Text>
        </Paragraph>
        <Paragraph>
          Be the first person to create a{' '}
          <Link to="/create">series in this {nameRef}</Link>!
        </Paragraph>
      </>
    );

  return (
    <>
      <Row>
        <Col xs={24}>
          <Title level={3}>
            Results for {nameRef} &quot;{valueRef.current}&quot;
          </Title>
          <Divider />
        </Col>
      </Row>
      {seriesListSectionElement}
    </>
  );
};
