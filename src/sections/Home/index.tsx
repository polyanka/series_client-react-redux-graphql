import React, { FC } from 'react';
import { HomeSearch, HomeSeriesList } from './components';
import { SeriesListFilter } from '../../lib/graphql/globalTypes';
import {
  SeriesListVariables,
  SeriesList as SeriesListData,
} from '../../lib/graphql/queries/SeriesList/__generated__/SeriesList';
import { useQuery } from 'react-apollo';
import { SERIES_LIST } from '../../lib/graphql';

const PAGE_LIMIT = 3;
const PAGE_NUMBER = 1;

export const Home: FC = () => {
  const { data, loading } = useQuery<SeriesListData, SeriesListVariables>(
    SERIES_LIST,
    {
      variables: {
        filter: SeriesListFilter.RATING_HIGH_TO_LOW,
        limit: PAGE_LIMIT,
        page: PAGE_NUMBER,
      },
    }
  );

  const renderSeriesSection = () => {
    if (loading) {
      return <h1>Loading</h1>;
    }

    if (data) {
      return (
        <HomeSeriesList
          title="Premium TV Series"
          seriesList={data.seriesList.result}
        />
      );
    }

    return null;
  };

  return (
    <>
      <HomeSearch />
      {renderSeriesSection()}
    </>
  );
};
