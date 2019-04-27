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
                <h1 className="participate__title title">Participate</h1>
                <h2 className="participate__description">Here's how you can participate in the program.</h2>
              </div>
              
              <div style={{ marginTop: '3rem', marginBottom: '3rem' }}></div>
              
              <div className="single__wrapper">
                <div className="single__content">
                  <p>So, you've had a look around and you're interested in joining the NeverFap Deluxe League!</p>
                  <p>That's cool! Here's what you have to do to get up to speed.</p>
                  <h3>Step 1 - Read the website</h3>
                  <p>The first thing you must do is read the comprehensive guide on how to overcome porn addiction at the NeverFap Deluxe website. With reading this first you will have basically zero context about what The NeverFap Deluxe League is about.</p>
                  <p><a className="link" href="https://neverfapdeluxe.com/">https://neverfapdeluxe.com/</a></p>
                  <h3>Step 2 - Join the Discord</h3>
                  <p>Once you feel comfortable with this idea of Healthy Coping Mechanisms and Meditation, feel free to join the Discord where all the magic happens!</p>
                  <p><a className="link" href="https://discord.gg/YETRkSj">https://discord.gg/YETRkSj</a></p>
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
