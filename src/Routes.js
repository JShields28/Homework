import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import NavBarPage from './NavBarPage';
import ContactPage from './components/ContactPage';

class Routes extends Component {
    render(){
      return(
          <div>
        <Router>
            <NavBarPage />
            <hr />
            <Route name="Home" exact path="/" component={HomePage}/>|
            <Route name="Menu" path="/menu" component={MenuPage}/>|
            <Route name="About" path="/about" component={AboutPage} />
            <Route name="Contact Us" path="/contact" component={ContactPage} />
          </Router>
          </div>

      );
    }
  }

  export default Routes;