import * as React from 'react';
import { Query } from 'react-apollo';

import LineGraphRender from '../components/graphs/LineGraphRender';
import LoadingPage from '../components/loading/LoadingPage';

import { HOMEPAGE } from '../../graphql/queries/homepage';

class Stats extends React.Component {
  render() {
    return (
      <Query 
        query={HOMEPAGE}
        >
        {({ loading, error, data, client }) => {
          if (loading) return <LoadingPage/>;
          if (error) return `Error! ${error.message}`;

          // - 7/30 day totals
          // - Complete emoji reacts collection.
         
          return (
            <div className="stats page">
              <div className="single__hero">
                <h1 className="participate__title title">Stats</h1>
                <h2 className="participate__description">NeverFap Deluxe League statistics</h2>
              </div>

              <div style={{ marginTop: '3rem', marginBottom: '3rem' }}></div>

              <div className="stats__charts">
                <div style={{ marginTop: '3rem' }}></div>

                <h2 className="stats__chart__title">Daily Accountability Messages</h2>
                <LineGraphRender collection_type='accountability_messages' graph_type={null}/>

                <div style={{ marginTop: '3rem' }}></div>
                <h2 className="stats__chart__title">Daily Accountability Emoji Reacts</h2>
                <LineGraphRender collection_type='accountability_reacts' graph_type={null}/>

                <div style={{ marginTop: '3rem' }}></div>
                <h2 className="stats__chart__title">Daily Participant New Registrations</h2>
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
