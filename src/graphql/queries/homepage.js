import gql from 'graphql-tag';

const HOMEPAGE = gql`{
    getAllDbUsers {
      id
      email
      username
      created_at    
    }

    getAllAccountabilityMessages {
      id
      username
      content
      db_user {
        id
        email
        username
        created_at
      }
      created_at
    }

    getAllAccountabilityReacts {
      id
      username
      emoji_id
      emoji_name
      created_at
      db_user {
        id
        email
        username
        created_at
      }
      db_user_reacted_to {
        id
        email
        username
        created_at    
      }
      accountability_message {
        id
        username
        content
        created_at
      }
    }

    getAllAccountabilityTallys {
      id
      tally_date
      post_message
      react_message
      total_participants
      total_reacts
      created_at
      completed
    }
  }
`;

export default HOMEPAGE;


