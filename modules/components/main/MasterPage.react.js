/**
 * Copyright (c) 2017, Pengi.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * Pengi
 */

//Import react components
import React from 'react';
import Reflux from 'reflux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Cookies from 'react-cookie';

//components manually
import PrivateRoute from "../recurrent/PrivateRoute.react";
import SessionActions from "../../actions/user/SessionActions";
import SessionStore from "../../stores/user/SessionStore";


//Login
import Login from "../login/Login.react";
import Forgot from "../login/Forgot.react";
import Panel from "../panel/MainPanel.react";

//Create class
class MasterPage extends Reflux.Component {
  constructor(props) {
    super(props);

    this.stores = [SessionStore];

  }

  //render
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={Login}></Route>
          <Route path="/recovery" component={Forgot}></Route>
          <PrivateRoute path="/" component={Panel}></PrivateRoute>
        </div>
      </Router>
    )
  }
}

export default MasterPage;
