/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */



//Import from react
require('../conf.js');
require('./lang/lang-es.js');
require('./lang/lang-en.js');
import React from 'react';
import {render} from 'react-dom';

//Import master page
import MasterPage from "./components/main/MasterPage.react";

//Render
render(
  <MasterPage/>, document.getElementById('mainApp'));
