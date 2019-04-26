import * as React from 'react';
import { Query } from 'react-apollo';

import LineGraphRender from '../components/graphs/LineGraphRender';

import { HOMEPAGE } from '../../graphql/queries/homepage';

class HowItWorks extends React.Component {
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

          // NeverFap Deluxe League is an accountability system that is designed to help you with your porn addiction. Essentially how it works is that you'll post once a day into our #accountability channel in Discord listing a number of things.
          // - The Date
          // - Healthy Coping mechanisms
          // - TO Improve
         
          // Doing this is effective for a number of reasons:
          //   - By journaling your progress it will help you become aware of the physical and mental actions you're making on a daily basis, therefore building your awareness which is vital for change.
          //   - By focusing on Healthy Coping Mechanisms it empowers you to focus on what you achieved for that day.
          //   - By focusing on what you aim to improve you also focus on your actions in the future, and how you
          //   - You have the ability to gain inspiration from the community and see what they're doing.
         
          // - What is the process?
         
          
          return (
            <div className="howitworks">
              <h1 className="howitworks__title">NeverFap Deluxe League</h1>
              <h2 className="howitworks__description">Welcome to the NeverFap Deluxe League!</h2>
              
            </div>
          );
        }}
      </Query>
      
    );
  }
};

export default HowItWorks;
