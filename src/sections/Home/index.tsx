import React, { FC } from 'react';
import { useQuery } from 'react-apollo';
import { HomeSearch, HomeSeriesList } from './components';
import { ErrorMessage, Spinner } from '../../lib/components';
import { SERIES_LIST } from '../../lib/graphql';
import { SeriesListFilter } from '../../lib/graphql/globalTypes';
import {
  SeriesListVariables,
  SeriesList as SeriesListData,
} from '../../lib/graphql/queries/SeriesList/__generated__/SeriesList';

const PAGE_LIMIT = 3;
const PAGE_NUMBER = 1;

export const Home: FC = () => {
  const { loading, error, data } = useQuery<
    SeriesListData,
    SeriesListVariables
  >(SERIES_LIST, {
    variables: {
      filter: SeriesListFilter.RATING_HIGH_TO_LOW,
      limit: PAGE_LIMIT,
      page: PAGE_NUMBER,
    },
  });

  const RenderSeriesSection = () => {
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorMessage />;
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
      <RenderSeriesSection />
    </>
  );
};
