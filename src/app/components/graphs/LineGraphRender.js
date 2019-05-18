// import moment from 'moment';
import * as React from 'react';
import { Query } from 'react-apollo';

import LineGraph from '../graphs/LineGraph';
import LoadingGraph from '../loading/LoadingGraph';

import { GET_LINE_GRAPH } from '../../../graphql/queries/getLineGraph';

class LineGraphRender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      variables: {
        to: -1,
        from: -8,
        collection_type: props.collection_type,
        graph_type: props.graph_type,
      }
    }
  }

  changeVariables = (from, to) => {
    this.setState({
      variables: {
        ...this.state.variables,
        from,
        to,
      }
    });
  }

  render() {    
    const { variables } = this.state;

    return (
      <Query 
        query={GET_LINE_GRAPH}
        variables={variables}
        fetchPolicy='network-only'
        >
        {({ loading, error, data, client }) => {
          if (loading) return <LoadingGraph/>;
          if (error) return `Error! ${error.message}`;
          const { getLineGraph } = data; 

          return (
            <div className="graph__container">
              <div className="graph__display__range">
                <div className="graph__display__range__button graph__display__range__7" onClick={() => this.changeVariables(-8, -1)}>
                  7 day range
                </div>
                <div className="graph__display__range__button graph__display__range__30" onClick={() => this.changeVariables(-31, -1)}>
                  30 day range
                </div>
              </div>
              <div className="graph__line__container">
                <LineGraph data={getLineGraph}/>
              </div>
            </div>            
          );
        }}
      </Query>
      
    );
  };
}

export default LineGraphRender;