import gql from 'graphql-tag';

export const LATEST_ACCOUNTABILITY_MESSAGES = gql`
  query getAllAccountabilityMessages($limit: Int) {
    getAllAccountabilityMessages(limit: $limit) {
      id
      username
      content
      created_at
      # db_user {
      #   username
      #   created_at
      # }
    }
  }
`;