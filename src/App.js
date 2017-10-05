import React, { Component } from 'react';
import './App.css';
import CameraList from './components/CameraList'
import Cart from './components/Cart'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllCameras } from './actions/cameras';

export class App extends Component {

  componentDidMount() {
    this.props.getAllCameras();
  }

  render() {
    return (
      <div>
        <CameraList />
        <Cart />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
      getAllCameras: bindActionCreators(getAllCameras, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(App);
