import * as React from 'react';
import { Query } from 'react-apollo';
import HOMEPAGE from '../../graphql/queries/homepage';

class Home extends React.Component {

  render() {

    return (
      <Query query={HOMEPAGE}>
        {({ data, client }) => {
          return (
            <div>
              <h1>NeverFap Deluxe League</h1>
              <p>Welcome to the NeverFap Deluxe League!</p>
              <div>
                <h2>Total Participants to date: </h2>
              </div>

            </div>
          )      
        }
      }
    </Query>
  )
  };

};

export default Home;
