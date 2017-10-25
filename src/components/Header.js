import React from 'react';
import { Link } from 'react-router-dom';

import beerJS from '../imgs/BeerJS.png';

const getFormattedTitle = title => (title.split('').map(t => `<span>${t}</span>`).join(''))

const Header = ({ title, subtitle }) => {
  const spans = getFormattedTitle(title);
  return (
    <div className="header-wrapper">
      <Link to="/" className="header">
        <img className="logo" src={beerJS} alt={title} />
        <div className="content">
          <div className="title" dangerouslySetInnerHTML={{__html: spans}} />
          <div className="subtitle">{subtitle}</div>
        </div>
      </Link>
    </div>
  )
}

export default Header;