import * as React from 'react';

import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header__logo__wrapper">
          <h1 className="header__logo">NeverFap <span className="deluxe__font">Deluxe</span> League <i className="em em-rainbow"></i></h1>
        </Link>
        <ul className="header__links">
          <Link className="header__link__wrapper" to="/participate"><div className="header__link">Participate</div></Link>
          <Link className="header__link__wrapper" to="/statistics"><div className="header__link">Statistics</div></Link>
          <Link className="header__link__wrapper" to="/how-it-works"><div className="header__link">Learn</div></Link>
          {/* <Link className="header__link__wrapper" to="/posts"><div className="header__link">posts.</div></Link> */}
          <Link className="header__link__wrapper" to="/about"><div className="header__link">About</div></Link>
        </ul>
      </div>
    )
  };
};


export default Header;
