import React, { Component } from 'react';
import { connect } from 'react-redux';
import Camera from './Camera'

class CameraList extends Component {
  render () {
    let thecameras = this.props.cameras.map(cam => <Camera cam={cam} key={cam.id}/>)
    return (
      <div className="row">
        {thecameras}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cameras: state.cameras
  }
}

export default connect(mapStateToProps, null)(CameraList);
