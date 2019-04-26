import * as React from 'react';
import { Query } from 'react-apollo';

import LineGraphRender from '../components/graphs/LineGraphRender';

import { HOMEPAGE } from '../../graphql/queries/homepage';

class Posts extends React.Component {
  render() {
    return (
      <Query 
        query={HOMEPAGE}
        >
        {({ loading, error, data, client }) => {
          if (loading) return "Loading graph...";
          if (error) return `Error! ${error.message}`;

          const {
            getDbUsersStats,
            getAccountabilityMessagesStats,
            getAccountabilityReactsStats,
            getAllDbUsers,
            getAllAccountabilityMessages,
            getAllAccountabilityReacts,
            getAllAccountabilityTally
          } = data;

          // - Latest accountability posts.
          // - View posts by date. (including the user who wrote the post);
         
         //  - accountability posts

          return (
            <div className="posts">
              <h1 className="posts__title">NeverFap Deluxe League</h1>
              <h2 className="posts__description">Welcome to the NeverFap Deluxe League!</h2>
              
            </div>
          );
        }}
      </Query>
      
    );
  }
};

export default Posts;
