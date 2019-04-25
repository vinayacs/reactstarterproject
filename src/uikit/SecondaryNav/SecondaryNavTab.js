import * as React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Column from 'uikit/Column';

const SecondaryNavTab = ({ name, target, location: { hash } = {} }) => {
  return (
    <li>
      <Column>
        <Link to={`#${target}`} className={hash === `#${target}` ? 'active' : ''}>
          {name}
        </Link>
      </Column>
    </li>
  );
};

SecondaryNavTab.PropTypes = {
  name: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  location: PropTypes.objectOf({ hash: PropTypes.string }).isRequired,
};

export default SecondaryNavTab;
