import { gql } from 'apollo-boost';

export const CREATE_SERIES = gql`
  mutation CreateSeries($input: CreateSeriesInput!) {
    createSeries(input: $input) {
      id
    }
  }
`;
