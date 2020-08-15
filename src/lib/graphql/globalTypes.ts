/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum GenresType {
  COMICS = "COMICS",
  DRAMA = "DRAMA",
  FANTASY = "FANTASY",
  HORROR = "HORROR",
  THRILLER = "THRILLER",
}

export enum SeriesListFilter {
  RATING_HIGH_TO_LOW = "RATING_HIGH_TO_LOW",
  RATING_LOW_TO_HIGH = "RATING_LOW_TO_HIGH",
}

export enum StatusType {
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

export interface CreateSeriesInput {
  name: string;
  date: number;
  status: StatusType;
  genres: GenresType[];
  rating: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
