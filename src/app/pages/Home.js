import * as React from 'react';
import { Query } from 'react-apollo';

import LoadingPage from '../components/loading/LoadingPage';
import LatestAccountabilityPosts from '../components/accountability/LatestAccountabilityPosts';
import LineGraphRender from '../components/graphs/LineGraphRender';

import { HOMEPAGE } from '../../graphql/queries/homepage';

class Home extends React.Component {
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

        //  - Total participants etc.
        //  - Total Accountability posts chart.
        //  - Latest Accountability posts (view all accountability posts.
        //  - The NeverFap Deluxe Bot.
        //  - Get involved.
        //  - Visit the website.

          return (
            <div className="homepage">
              <h1 className="homepage__title">NeverFap Deluxe League</h1>
              <h2 className="homepage__description">Where porn addiction comes to die.</h2>
              
              <h3 className="homepage__subtitle">Latest Stats</h3>

              <div className="homepage__stats">
                <div className="homepage__stat__block">
                  <div className="homepage__stat__title">Total lifetime participants:</div>
                  <div className="homepage__stat__number">{getDbUsersStats.total}</div>
                </div>
                <div className="homepage__stat__block">
                  <div className="homepage__stat__title">New participants in the last 24 hours:</div>
                  <div className="homepage__stat__number">{getDbUsersStats.total24Hour}</div>
                </div>
                <div className="homepage__stat__block">
                  <div className="homepage__stat__title">Total #accountability posts:</div>
                  <div className="homepage__stat__number">{getAccountabilityMessagesStats.total}</div>
                </div>
                <div className="homepage__stat__block">
                  <div className="homepage__stat__title">Total #accountability posts in the last 24 hours:</div>
                  <div className="homepage__stat__number">{getAccountabilityMessagesStats.total24Hour}</div>
                </div>
                <div className="homepage__stat__block">
                  <div className="homepage__stat__title">Total #accountability emoji reacts:</div>
                  <div className="homepage__stat__number">{getAccountabilityReactsStats.total}</div>
                </div>
                <div className="homepage__stat__block">
                  <div className="homepage__stat__title">Total #accountability emoji reacts in the last 24 hours:</div>
                  <div className="homepage__stat__number">{getAccountabilityReactsStats.total24Hour}</div>
                </div>
              </div>

              <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                <LineGraphRender collection_type='accountability_messages' graph_type='accumulative'/>
              </div>
              
              <h3 className="homepage__subtitle">Latest Accountability Posts</h3>
              <LatestAccountabilityPosts/>
            </div>
          );
        }}
      </Query>
      
    );
  }
};

export default Home;
