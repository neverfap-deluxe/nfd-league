import * as React from 'react';

import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/"><div className="navbar__link">home.</div></Link>
        <Link to="/how-it-works"><div className="navbar__link">how it works.</div></Link>
        <Link to="/participate"><div className="navbar__link">participate.</div></Link>
        {/* <Link to="/posts"><div className="navbar__link">posts.</div></Link> */}
        <Link to="/stats"><div className="navbar__link">stats.</div></Link>
        <Link to="/about"><div className="navbar__link">about.</div></Link>
      </div>
    )
  };
};


export default Navbar;
