import React from 'react';
import Link from 'gatsby-link';

import './index.css';

const IndexPage = () => (
  <nav className="nav">
    <a className="nav__item" href="mailto:chris@cmward.co.uk">
      Email
    </a>
    <a className="nav__item" href="http://linkedin.cmward.co.uk" target="_blank">
      Linked In
    </a>
    <Link className="nav__item" to="/cv/">
      Check out my CV
    </Link>
  </nav>
);

export default IndexPage;
