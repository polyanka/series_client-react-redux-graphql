/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateSeriesInput } from "./../../../globalTypes";

// ====================================================
// GraphQL mutation operation: CreateSeries
// ====================================================

export interface CreateSeries_createSeries {
  __typename: "Series";
  id: string;
}

export interface CreateSeries {
  createSeries: CreateSeries_createSeries;
}

export interface CreateSeriesVariables {
  input: CreateSeriesInput;
}
