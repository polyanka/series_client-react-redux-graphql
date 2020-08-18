import { gql } from 'apollo-boost';

export const SERIES_LIST = gql`
  query SeriesList(
    $genres: GenresType
    $name: String
    $filter: SeriesListFilter!
    $limit: Int!
    $page: Int!
  ) {
    seriesList(
      genres: $genres
      name: $name
      filter: $filter
      limit: $limit
      page: $page
    ) {
      total
      result {
        id
        name
        date
        status
        genres
        rating
      }
    }
  }
`;
