import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../actions/cameras'

class Camera extends Component {

  render () {
    let { id, title, image, price, rating } = this.props.cam;
    return (
      <div className="container">
        <div className="col-md-6">
          <h3 className="left-align">{title}</h3>
          <div className="left-align">
            <img src={image} alt="camera"/>
          </div>
          <h4 className="left-align">Price: ${price}</h4>
          <h5 className="left-align">Rating: {rating}</h5>
          <div className="left-align">
            <button
              className="btn waves-effect waves-light"
              onClick={() => this.props.addToCart(id)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: bindActionCreators(addToCart, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Camera);
