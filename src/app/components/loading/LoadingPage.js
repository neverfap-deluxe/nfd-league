import * as React from 'react';

class LoadingPage extends React.Component {
  render() {    
    return (
      <div className="page">
        <div className="lds-heart"><div></div></div>
      </div>
    );
  };
}

export default LoadingPage;