import * as React from 'react';
import { Query } from 'react-apollo';

import LineGraphRender from '../components/graphs/LineGraphRender';
import LoadingPage from '../components/loading/LoadingPage';

import { HOMEPAGE } from '../../graphql/queries/homepage';

class Participate extends React.Component {
  render() {
    return (
      <Query 
        query={HOMEPAGE}
        >
        {({ loading, error, data, client }) => {
          if (loading) return <LoadingPage/>;
          if (error) return `Error! ${error.message}`;

          return (
            <div className="participate page">
              <div className="single__hero">
                <h1 className="participate__title title">About</h1>
                <h2 className="participate__description">The NeverFap Deluxe League</h2>
              </div>

              <div className="single__wrapper">
                <div className="single__content">
                  <p>NeverFap Deluxe League is an affiliate of NeverFap Deluxe.</p>
                  <p>For more information, please check out our wonderful website:</p>
                  <p><a className="link" href="https://neverfapdeluxe.com/">https://neverfapdeluxe.com/</a></p>
                  <p>The Reade&copy;</p>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
      
    );
  }
};

export default Participate;
