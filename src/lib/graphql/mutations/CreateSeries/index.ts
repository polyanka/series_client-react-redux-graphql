import { gql } from 'apollo-boost';

export const CREATE_Series = gql`
  mutation CreateSeries($input: CreateSeriesInput!) {
    createSeries(input: $input) {
      id
    }
  }
`;
