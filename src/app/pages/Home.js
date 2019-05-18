import * as React from 'react';
import Iframe from 'react-iframe';
import { Query } from 'react-apollo';

import LoadingPage from '../components/loading/LoadingPage';
import HomepageStats from '../components/home/HomepageStats';
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
            // getAllDbUsers,
            // getAllAccountabilityMessages,
            // getAllAccountabilityReacts,
            // getAllAccountabilityTally
          } = data;

        //  - Total participants etc.
        //  - Total Accountability posts chart.
        //  - Latest Accountability posts (view all accountability posts.
        //  - The NeverFap Deluxe Bot.
        //  - Get involved.
        //  - Visit the website.

          return (
            <div className="homepage page">
              <div className="single__hero">
                <h1 className="title">NeverFap Deluxe League</h1>
                <h2 className="homepage__description">Where porn addiction comes to die.</h2>
              </div>

              <div style={{ marginTop: '3rem', marginBottom: '3rem' }}></div>

              <div style={{display: "flex", flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
                <Iframe 
                  url="https://discordapp.com/widget?id=548970920115699742&theme=dark" 
                  width="350px" 
                  height="500px" 
                  allowTransparency="true" 
                  frameBorder="0"/>

                <HomepageStats 
                  getDbUsersStats={getDbUsersStats}
                  getAccountabilityMessagesStats={getAccountabilityMessagesStats}
                  getAccountabilityReactsStats={getAccountabilityReactsStats}
                />
              </div>

              <div className="divider"></div>

              <div className="join__the__discord__button__container">
                <a href="https://discord.gg/YETRkSj" className="join__the__discord__button">
                  Join The League
                </a>
                <div className="join__the__discord__button__divide">
                </div>
                <a href="https://neverfapdeluxe.com/" className="join__the__discord__button">
                  Visit The Website
                </a>
              </div>

              {/* TODO: Section about the NFD Bot */}

              <div className="divider"></div>

              <h2 className="subtitle">NeverFap Deluxe Bot</h2>
              <div className="nfd__bot__container">
                
              </div>

              <div className="divider"></div>

              <h2 className="subtitle">Accumulative Accountability Messages</h2>
              {/* TODO LineGraphRender takes an initial object of what days it should be */}
              <LineGraphRender collection_type='accountability_messages' graph_type='accumulative'/>
              

              <div className="divider"></div>

              <h2 className="subtitle">Latest Accountability Posts</h2>
              <LatestAccountabilityPosts/>
            </div>
          );
        }}
      </Query>
      
    );
  }
};

export default Home;
