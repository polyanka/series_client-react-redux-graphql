import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { SeriesDetails, SeriesEpisodes } from './components';
import { ErrorMessage, Spinner } from '../../lib/components';
import { SERIES } from '../../lib/graphql';
import { EpisodesFilter } from '../../lib/graphql/globalTypes';
import {
  Series as SeriesData,
  SeriesVariables,
} from '../../lib/graphql/queries/Series/__generated__/Series';

interface MatchParams {
  id: string;
}

const PAGE_LIMIT = 6;

export const Series: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const [episodesFilter, setEpisodesFilter] = useState<EpisodesFilter>(
    EpisodesFilter.DATE_HIGH_TO_LOW
  );

  const [episodesPage, setEpisodesPage] = useState(1);

  const { loading, error, data } = useQuery<SeriesData, SeriesVariables>(
    SERIES,
    {
      variables: {
        id: match.params.id,
        episodesPage,
        episodesLimit: PAGE_LIMIT,
        episodesFilter: episodesFilter,
      },
    }
  );

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  const series = data?.series || null;

  const seriesDetailsElement = series ? (
    <SeriesDetails series={series} />
  ) : null;

  const seriesEpisodes = series?.episodes || null;

  const seriesEpisodesElement = seriesEpisodes ? (
    <SeriesEpisodes
      seriesEpisodes={seriesEpisodes}
      episodesPage={episodesPage}
      setEpisodesPage={setEpisodesPage}
      episodesLimit={PAGE_LIMIT}
      episodesFilter={episodesFilter}
      setEpisodesFilter={setEpisodesFilter}
    />
  ) : null;

  return (
    <>
      {seriesDetailsElement}
      {seriesEpisodesElement}
    </>
  );
};
