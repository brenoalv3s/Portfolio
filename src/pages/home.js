import React, { Component } from 'react';
import Header from '../component/header'
import Presentetion from '../component/personalPresentetion';

class Home extends Component {
  render () {
    return (
      <div id="home">
        <Header/>
        <Presentetion />
      </div>
    )
  }
}

export default Home;