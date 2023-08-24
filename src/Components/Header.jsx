import React from "react";
import { Link } from 'react-router-dom';
import '../App.css'

function Header(){
  return(
    
    <div className="header">
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href= '/language'>Languages</a>
    </div>
    
  );
}

export default Header;