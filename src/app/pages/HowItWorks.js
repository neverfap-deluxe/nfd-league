import * as React from 'react';
import { Query } from 'react-apollo';

import LineGraphRender from '../components/graphs/LineGraphRender';
import LoadingPage from '../components/loading/LoadingPage';

import { HOMEPAGE } from '../../graphql/queries/homepage';

class HowItWorks extends React.Component {
  render() {
    return (
      <Query 
        query={HOMEPAGE}
        >
        {({ loading, error, data, client }) => {
          if (loading) return <LoadingPage/>;
          if (error) return `Error! ${error.message}`;

          return (
            <div className="howitworks page">
              <h1 className="howitworks__title title">How It Works</h1>
              <h2 className="howitworks__description">Here's what the system can do for your porn addiction.</h2>
              <div style={{ marginTop: '3rem', marginBottom: '3rem' }}></div>

              <div className="single__wrapper">
                <div className="single__content">
                  <p>NeverFap Deluxe League is an accountability system that is designed to help you with your porn addiction.</p>
                  <p>The whole process is actually explained in a lot more detail here: <a href="https://neverfapdeluxe.com/accountability-program">https://neverfapdeluxe.com/accountability-program</a>.</p>
                  <p>Essentially how it works is that you'll post once a day into our #accountability channel in Discord listing a number of things.</p>
                  
                  <p>- The Date</p>
                  <p>- Healthy Coping mechanisms</p>
                  <p>- TO Improve</p>
                  <p>Doing this is effective for a number of reasons:</p>
                  <p>  - By journaling your progress it will help you become aware of the physical and mental actions you're making on a daily basis, therefore building your awareness which is vital for change.</p>
                  <p>  - By focusing on Healthy Coping Mechanisms it empowers you to focus on what you achieved for that day.</p>
                  <p>  - By focusing on what you aim to improve you also focus on your actions in the future, and how you</p>
                  <p>  - You have the ability to gain inspiration from the community and see what they're doing.</p>
                
               </div>
              </div>

            </div>
          );
        }}
      </Query>
      
    );
  }
};

export default HowItWorks;
