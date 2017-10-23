import React from 'react';
import { Link } from 'react-router-dom';

import beerJS from '../imgs/BeerJS.png';

const getFormattedTitle = title => (title.split('').map(t => `<span>${t}</span>`).join(''))

const Header = (props) => {
  const spans = getFormattedTitle(props.title);
  return (
    <div className="header-wrapper">
      <Link to="/" className="header">
        <img src={beerJS} />
        <div className="logo" dangerouslySetInnerHTML={{__html: spans}}>
        </div>
      </Link>
    </div>
  )
}

export default Header;