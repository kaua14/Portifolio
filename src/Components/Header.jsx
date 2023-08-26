import React from "react";
import '../App.css'

function Header(){
  return(
    
    <div className="header">
      <a href='/'>Home</a>
      <a href='/about'>About Me</a>
      <a href= '/language'>Languages</a>
    </div>
    
  );
}

export default Header;