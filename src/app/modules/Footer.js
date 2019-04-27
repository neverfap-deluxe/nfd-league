import * as React from 'react';

import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Link to="/" className="header__logo__wrapper">
          <h1 className="header__logo">NeverFap <span className="deluxe__font">Deluxe</span> League <i className="em em-rainbow"></i></h1>
        </Link>
        <div className="footer__designed">
          Made in Melbourne, Australia.
        </div>

        <ul className="footer__links">
          <a className="footer__link__wrapper" href="/disclaimer"><li className="footer__link">Disclaimer</li></a>
          <a className="footer__link__wrapper" href="/privacy"><li className="footer__link">Privacy</li></a>
          <a className="footer__link__wrapper" href="/terms-and-conditions"><li className="footer__link">Terms & Conditions</li></a>
        </ul>
      </footer>    
    )
  };
};


export default Footer;
