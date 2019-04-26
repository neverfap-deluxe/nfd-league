import * as React from 'react';
import { Query } from 'react-apollo';

import LineGraphRender from '../components/graphs/LineGraphRender';

import { HOMEPAGE } from '../../graphql/queries/homepage';

class Participate extends React.Component {
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

          // - So, ya wanna participate?
          // - There's a few things that you'll need to do.
          // - Link to the Discord.
         
                  
          
          return (
            <div className="participate">
              <h1 className="participate__title">NeverFap Deluxe League</h1>
              <h2 className="participate__description">Welcome to the NeverFap Deluxe League!</h2>
              
            </div>
          );
        }}
      </Query>
      
    );
  }
};

export default Participate;
