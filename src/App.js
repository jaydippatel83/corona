import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './main';
import News from './news/news';
import logo from '../src/images/logo.webp';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MapChart from './chart/chart';
import FooterPage from './footer/footer.component';


class App extends Component {

  render() {

    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-lg box-shadow ">
            <Link className=" navbar-brand logo-container" to="/">
              <div className="d-flex justify-content-start">
                <img alt="logo" className="App-logo" src={logo} />
                <h2 className=" text-light header-text">COVID19 Live Update</h2>
              </div>
            </Link>

            <ul className="navbar-nav ml-auto text-center">
              <li className="nav-item active">
                <Link className="nav-link" to="/news">
                  <h2 className=" text-light header-text">News</h2>
                </Link>
              </li> 
            </ul>
          </nav>
          <Route exact path="/">
            <Main /> 
            <News />
            <FooterPage/>

          </Route>
          <Route exact path="/chart">
            <MapChart />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
        </Router>
      </div>
    );
  }
}
export default App;
