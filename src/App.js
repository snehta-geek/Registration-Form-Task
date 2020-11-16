import React from 'react';
import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Route, Switch } from "react-router-dom";

import HomePg from "./HomeScreen";
import Registration from './Registration';
import Contact from './ContactUs';

function App() {
  return (
    <>
     <Switch> 
     <Route exact path="/" component={HomePg} />
     <Route path="/registration" component={Registration} />   
     <Route path="/contact" component={Contact} />   
    </Switch>
    </>
    
  );
}

export default App;
