import React from 'react';

const NavBar = (props) => {
  return ( 
  <header className="App-header">
    {props.navItems}
    </header>
  );
}

export default NavBar;