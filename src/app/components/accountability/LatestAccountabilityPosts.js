import * as React from 'react';
import { Query } from 'react-apollo';

import LoadingPage from '../loading/LoadingPage';
import AccountabilityPost from './AccountabilityPost';

import { LATEST_ACCOUNTABILITY_MESSAGES } from '../../../graphql/queries/accountability_messages';

class LatestAccountabilityPosts extends React.Component {
  render() {
    return (
      <Query query={LATEST_ACCOUNTABILITY_MESSAGES} variables={{limit: 10}}>
        {({ loading, error, data, client }) => {
          if (loading) return <LoadingPage/>;
          if (error) return `Error! ${error.message}`;

          const { getAllAccountabilityMessages } = data;

          return (
            <div className="latest__accountability__posts">
              {getAllAccountabilityMessages.map(message => (
                <AccountabilityPost key={message.id} message={message}/>
              ))}
            </div>
          );
        }}
      </Query>
      
    );
  }
};

export default LatestAccountabilityPosts;


