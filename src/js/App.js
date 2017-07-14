/**
    File name: App.js
    Author: Abhishek H Shetty
    This component is the main container of the web application.
**/

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Headercomp from './components/headerComp';
import ContentComp from './components/mainContentComp';
import Footercomp from './components/footerComp';
import Home from './components/homePageComponent';
import RctFtrs from './components/reactFeatureComp';
import Profile from './components/profileComp';

class App extends Component{
    /** Adding a constructor,its the first life cycle function that gets called.
        Since the function is called even before render, this can be used for
        most of the initializations for the component.
    **/
    constructor(props){
        super(props);
        /** Declaring a state **/
        this.state = {
            message : 'Welcome to React App Demo'
        }
    }

    /** Every component must implement the render function, every time the state changes the render is called **/
    render() {
        return (
              <div className='appMain'>
                  <Headercomp></Headercomp>
                  <ContentComp>
                      <Route exact path="/" component={Home}></Route>
                      <Route path="/rctFtrs" name="rctFtrs" component={RctFtrs}></Route>
                      <Route path="/profile" name="profile" component={Profile}></Route>
                  </ContentComp>
                  <Footercomp></Footercomp>
              </div>
        );
    }
}

export default App;
