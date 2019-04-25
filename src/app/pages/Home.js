import * as React from 'react';
import { Query } from 'react-apollo';

import LineGraphRender from '../components/graphs/LineGraphRender';

import { HOMEPAGE } from '../../graphql/queries/homepage';

class Home extends React.Component {
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
          console.log(data)

          return (
            <div className="homepage">
              <h1 className="homepage__title">NeverFap Deluxe League</h1>
              <h2 className="homepage__description">Welcome to the NeverFap Deluxe League!</h2>
              
              <div className="homepage__stats">
                <div>Total lifetime participants: {getDbUsersStats.total}</div>
                <div>New participants in the last 24 hours: {getDbUsersStats.total24Hour}</div>
                <div>Total #accountability posts: {getAccountabilityMessagesStats.total}</div>
                <div>Total #accountability posts in the last 24 hours: {getAccountabilityMessagesStats.total24Hour}</div>
                <div>Total #accountability emoji reacts: {getAccountabilityReactsStats.total}</div>
                <div>Total #accountability emoji reacts in the last 24 hours: {getAccountabilityReactsStats.total24Hour}</div>
              </div>

              <div className="homepage__charts">
                <h3 className="homepage__chart__title">Accountability Messages</h3>
                <LineGraphRender collection_type='accountability_messages'/>
                <LineGraphRender collection_type='accountability_reacts'/>
                <LineGraphRender collection_type='db_users'/>
              </div>
            </div>
          );
        }}
      </Query>
      
    );
  }
};

export default Home;
