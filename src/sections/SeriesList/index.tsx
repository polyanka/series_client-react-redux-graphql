import { List, Typography, Row, Col, Divider } from 'antd';
import React, { FC, useState, useEffect, useRef } from 'react';
import { useQuery } from 'react-apollo';
import { RouteComponentProps, Link } from 'react-router-dom';
import { SeriesListFilter, GenresType } from '../../lib/graphql/globalTypes';
import {
  SeriesList as SeriesListData,
  SeriesListVariables,
} from '../../lib/graphql/queries/SeriesList/__generated__/SeriesList';
import { ErrorMessage, SeriesCard } from '../../lib/components';

import { SERIES_LIST } from '../../lib/graphql';
import { SeriesListPagination } from './components';

interface MatchParams {
  genres: string;
  name: string;
}

const { Title, Paragraph, Text } = Typography;
const PAGE_LIMIT = 4;

export const SeriesList: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const nameRef = match.params.genres ? 'genres' : 'name';
  const valueRef = useRef(match.params[nameRef]);

  const [filter, setFilter] = useState<SeriesListFilter>(
    SeriesListFilter.RATING_HIGH_TO_LOW
  );

  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery<
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
  }, [match.params[nameRef]]);

  const seriesList = data ? data.seriesList : null;

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
          No result fount for query <Text mark>"{valueRef.current}"</Text>
        </Paragraph>
        <Paragraph>
          Be the first person to create a{' '}
          <Link to="/create">series in this {nameRef}</Link>!
        </Paragraph>
      </>
    );

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <ErrorMessage />;
  }
  return (
    <>
      <Row>
        <Col xs={24}>
          <Title level={3}>
            Results for {nameRef} "{valueRef.current}"
          </Title>
          <Divider />
        </Col>
      </Row>
      {seriesListSectionElement}
    </>
  );
};
