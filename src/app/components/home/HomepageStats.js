import * as React from 'react';

class HomepageStats extends React.Component {
  render() {   
    const {
      getDbUsersStats,
      getAccountabilityMessagesStats,
      getAccountabilityReactsStats,
    } = this.props;
    
    return (
      <div className="stat">
        <div className="stat__block">
          <h3 className="homepage__subtitle">Lifetime Stats</h3>

          <div className="homepage__stats">
            <div className="homepage__stat__block">
              <div className="homepage__stat__title">Total Participants:</div>
              <div className="homepage__stat__number">{getDbUsersStats.total}</div>
            </div>
            <div className="homepage__stat__block">
              <div className="homepage__stat__title">Total Posts:</div>
              <div className="homepage__stat__number">{getAccountabilityMessagesStats.total}</div>
            </div>
            <div className="homepage__stat__block">
              <div className="homepage__stat__title">Total Reacts:</div>
              <div className="homepage__stat__number">{getAccountabilityReactsStats.total}</div>
            </div>
          </div>
        </div>
      
        <div className="stat__block">
          <h3 className="homepage__subtitle">Last 24 Hours</h3>

          <div className="homepage__stats">
            <div className="homepage__stat__block">
              <div className="homepage__stat__title">New Participants:</div>
              <div className="homepage__stat__number">{getDbUsersStats.total24Hour}</div>
            </div>
            <div className="homepage__stat__block">
              <div className="homepage__stat__title">New Posts:</div>
              <div className="homepage__stat__number">{getAccountabilityMessagesStats.total24Hour}</div>
            </div>
            <div className="homepage__stat__block">
              <div className="homepage__stat__title">New Reacts:</div>
              <div className="homepage__stat__number">{getAccountabilityReactsStats.total24Hour}</div>
            </div>
          </div>
        </div>
      </div>    
    );
  };
}

export default HomepageStats;