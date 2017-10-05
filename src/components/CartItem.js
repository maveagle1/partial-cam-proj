import React from 'react'

const CartItem = ({cam}) => {
  let { title, price} = cam
  return (
    <div>{title} - {price}</div>
  )
}

export default CartItem
