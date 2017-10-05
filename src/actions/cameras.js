import axios from 'axios';

// Action that gets all of the cameras
export const getAllCameras = () => {
  return {
    type: 'GET_ALL_CAMERAS',
    payload: axios.get(`http://localhost:8000/cameras`)
  }
}

export const addToCart = (id) => {
  return {
    type: 'ADD_TO_CART',
    payload: axios.patch(`http://localhost:8000/cart/${id}/add`)
  }
}
