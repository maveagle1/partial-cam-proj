import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem'

class Cart extends Component {
  render () {
    console.log('filtered props', this.props.itemsInCart);
    let thecartitems = this.props.itemsInCart.map(cam => <CartItem key={cam.id} cam={cam}/>)
    return (
      <div className="container cart">
        <div className="col-md-8">
          <h4 className="left-align">Your cart</h4>
          {thecartitems}
          <h6 className="left-align">Subtotal</h6>
          <h6 className="left-align">Tax</h6>
          <h6 className="left-align">Total</h6>
          <hr/>
          <div className="left-align">
            <button className="btn waves-effect waves-light">CHECKOUT</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    itemsInCart: state.cameras.filter(camera => camera.inCart)
  }
}

export default connect(mapStateToProps, null)(Cart);
