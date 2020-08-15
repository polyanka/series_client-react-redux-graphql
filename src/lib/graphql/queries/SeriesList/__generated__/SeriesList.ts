/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SeriesListFilter, StatusType, GenresType } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: SeriesList
// ====================================================

export interface SeriesList_seriesList_result {
  __typename: "Series";
  id: string;
  name: string;
  date: number;
  status: StatusType;
  genres: GenresType[];
}

export interface SeriesList_seriesList {
  __typename: "SeriesList";
  total: number;
  result: SeriesList_seriesList_result[];
}

export interface SeriesList {
  seriesList: SeriesList_seriesList;
}

export interface SeriesListVariables {
  genres: string;
  filter: SeriesListFilter;
  limit: number;
  page: number;
}
