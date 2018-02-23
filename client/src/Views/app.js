import React from 'react';
import Reboot from 'material-ui/Reboot';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './app.scss';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';

export default props =>
<BrowserRouter>
  <div className="app">
      <Reboot/>
      <Navbar /> 
      <Home />
    {/* <Route exact path="/" component={Home}/>
    <Route path="/organization" component={Organization}/> */}
  </div>
</BrowserRouter>
