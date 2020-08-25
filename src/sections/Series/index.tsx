import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import {
  Series as SeriesData,
  SeriesVariables,
} from '../../lib/graphql/queries/Series/__generated__/Series';
import { SERIES } from '../../lib/graphql';
import { ErrorMessage } from '../../lib/components';
import { SeriesDetails, SeriesEpisodes } from './components';
import { EpisodesFilter } from '../../lib/graphql/globalTypes';

interface MatchParams {
  id: string;
}

const PAGE_LIMIT = 6;

export const Series: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const [episodesFilter, setEpisodesFilter] = useState<EpisodesFilter>(
    EpisodesFilter.DATE_HIGH_TO_LOW
  );

  const [episodesPage, setEpisodesPage] = useState(1);

  const { data, loading, error } = useQuery<SeriesData, SeriesVariables>(
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
    return <p>loading</p>;
  }

  if (error) {
    return <ErrorMessage />;
  }

  const series = data ? data.series : null;

  const seriesDetailsElement = series ? (
    <SeriesDetails series={series} />
  ) : null;

  const seriesEpisodes = series ? series.episodes : null;

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
