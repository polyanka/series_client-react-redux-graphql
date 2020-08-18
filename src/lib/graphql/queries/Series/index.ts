import { gql } from 'apollo-boost';

export const SERIES = gql`
  query Series(
    $id: ID!
    $episodesFilter: EpisodesFilter!
    $episodesPage: Int!
    $episodesLimit: Int!
  ) {
    series(id: $id) {
      id
      name
      date
      status
      genres
      rating
      episodes(
        filter: $episodesFilter
        limit: $episodesLimit
        page: $episodesPage
      ) {
        total
        result {
          id
          name
          date
          rating
          episode
          season
        }
      }
    }
  }
`;
