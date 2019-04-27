import * as React from 'react';

class LoadingGraph extends React.Component {
  render() {    
    return (
      <div className="chart graph__line__container">
        <div className="lds-heart"><div></div></div>
      </div>
    );
  };
}

export default LoadingGraph;