import * as React from 'react';
// import moment from 'moment';

import { Query } from 'react-apollo';

import GET_LINE_GRAPH from '../../graphql/queries/getLineGraph';

import ResponsiveLineGraph from './graphs/ResponsiveLineGraph';

class AccountabilityMessagesLineGraph extends React.Component {
  render() {
    const variables = {
      collection_type: 'accountability_messages',
      to: 0,
      from: -7,
    }

    return (
      <Query query={GET_LINE_GRAPH} variables={variables}>
        {({ loading, error, data, client }) => {
          const { getLineGraph } = data;

          if (loading) return "Loading graph...";
          if (error) return `Error! ${error.message}`;
    
          return (
            <div class="line__graph__container">
              <ResponsiveLineGraph data={getLineGraph}/>
            </div>
          );
        }}
      </Query>
      
    );
  };
}

export default AccountabilityMessagesLineGraph;