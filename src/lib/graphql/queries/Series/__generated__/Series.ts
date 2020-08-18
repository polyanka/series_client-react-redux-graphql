/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EpisodesFilter, StatusType, GenresType } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: Series
// ====================================================

export interface Series_series_episodes_result {
  __typename: "Episode";
  id: string;
  name: string;
  date: string;
  rating: number;
  episode: number;
  season: number;
}

export interface Series_series_episodes {
  __typename: "Episodes";
  total: number;
  result: Series_series_episodes_result[];
}

export interface Series_series {
  __typename: "Series";
  id: string;
  name: string;
  date: number;
  status: StatusType;
  genres: GenresType[];
  rating: number;
  episodes: Series_series_episodes;
}

export interface Series {
  series: Series_series;
}

export interface SeriesVariables {
  id: string;
  episodesFilter: EpisodesFilter;
  episodesPage: number;
  episodesLimit: number;
}
