import React, { Component } from 'react';
import NavBar from './navBar'
import { connect } from 'react-redux';

export default class Home extends Component {


  render(){
    return(
      <div>
        <p>
          Hi! Welcome to F#$% Amazon. We are here to help you consume as a more informed human. When you get a happy face you are doing great! When a frown comes up, we will direct you to better choices. Just click on the face to find out more about the company you are supporting. We have a rating scale that will guide you into how good/bad the company is. Happy Shopping!
        </p>
        {/* <Link to='shopping'></Link> */}
      </div>
    )
  }
}
