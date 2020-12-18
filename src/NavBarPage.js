import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class NavBarPage extends Component {
    render(){
      return(
          <div class="topnav">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">Home</Link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav"> 
         <Link to="menu">Menu</Link> | 
        <Link to="about">About</Link>|
        <Link to="contact">Contact</Link>
            
          </div>
        </div>
    </nav>
    </div>
      );
    }
  }

  export default NavBarPage;