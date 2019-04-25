import * as React from 'react';

import AccountabilityMessagesLineGraph from '../components/AccountabilityMessagesLineGraph';
// import AccountabilityReactsLineGraph from '../components/AccountabilityReactsLineGraph';
// import DbUsers../components/AccountabilityReactsLineGraphersLineGraph';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>NeverFap Deluxe League</h1>
        <p>Welcome to the NeverFap Deluxe League!</p>

        <AccountabilityMessagesLineGraph/>
        {/* <AccountabilityReactsLineGraph/>
        <DbUsersLineGraph/> */}
      </div>
    );
  }
};

export default Home;
