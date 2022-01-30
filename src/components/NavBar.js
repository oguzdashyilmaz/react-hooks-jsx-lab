import React from "react";
import {About} from '../components/About';
import {Home} from '../components/Home';


function NavBar() {
  // update the JSX being returned!
  return (
    <nav>
      <a href={Home}>Home</a>
      <a href={About}>About</a>
    </nav>
  );
}

export default NavBar;
