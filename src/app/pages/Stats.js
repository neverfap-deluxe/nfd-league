import * as React from 'react';
import { Query } from 'react-apollo';

import LineGraphRender from '../components/graphs/LineGraphRender';

import { HOMEPAGE } from '../../graphql/queries/homepage';

class Stats extends React.Component {
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

          // - 7/30 day totals
          // - Complete emoji reacts collection.
         
          return (
            <div className="stats">
              <h1 className="stats__title">NeverFap Deluxe League</h1>
              <h2 className="stats__description">Welcome to the NeverFap Deluxe League!</h2>

              <div className="stats__charts">
                <h3 className="stats__chart__title">Daily Accountability Messages</h3>
                <LineGraphRender collection_type='accountability_messages' graph_type={null}/>
                <h3 className="stats__chart__title">Daily Accountability Emoji Reacts</h3>
                <LineGraphRender collection_type='accountability_reacts' graph_type={null}/>
                <h3 className="stats__chart__title">Daily Participant New Registrations</h3>
                <LineGraphRender collection_type='db_users' graph_type={null}/>
              </div>

            </div>
          );
        }}
      </Query>
      
    );
  }
};

export default Stats;
