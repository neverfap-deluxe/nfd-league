import * as React from 'react';
import { Query } from 'react-apollo';

import { HOMEPAGE } from '../../graphql/queries/homepage';

import LatestAccountabilityPosts from '../components/accountability/LatestAccountabilityPosts';
import LoadingPage from '../components/loading/LoadingPage';
class Posts extends React.Component {
  render() {
    return (
      <Query 
        query={HOMEPAGE}
        >
        {({ loading, error, data, client }) => {
          if (loading) return <LoadingPage/>;
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
            <div className="posts page">
              <h1 className="posts__title title">Accountability Posts</h1>
              <h2 className="posts__description">The list of posts.</h2>
              
              <div style={{ marginTop: '3rem', marginBottom: '3rem' }}></div>
              
              <LatestAccountabilityPosts/>
            </div>
          );
        }}
      </Query>
      
    );
  }
};

export default Posts;
