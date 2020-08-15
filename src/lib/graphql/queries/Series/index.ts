import { gql } from 'apollo-boost';

export const SERIES = gql`
  query Series($id: ID!) {
    series(id: $id) {
      id
      name
      date
      status
      genres
    }
  }
`;
