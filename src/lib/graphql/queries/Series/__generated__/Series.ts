/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { StatusType, GenresType } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: Series
// ====================================================

export interface Series_series {
  __typename: "Series";
  id: string;
  name: string;
  date: number;
  status: StatusType;
  genres: GenresType[];
}

export interface Series {
  series: Series_series;
}

export interface SeriesVariables {
  id: string;
}
