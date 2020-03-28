import React from 'react';
import { Link as LinkReactDom } from 'react-router-dom';

import './styles.css';

function Link({ children, label, to }) {
  return (
    <LinkReactDom className="back-link" to={to}>
      <span className="back-link-icon">{children}</span>
      <span>{label}</span>
    </LinkReactDom>
  );
}

export default React.memo(Link);
