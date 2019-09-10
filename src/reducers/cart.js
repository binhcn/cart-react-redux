import * as Types from '../constants/ActionType';
import { findIndex } from 'lodash';

var data = JSON.parse(localStorage.getItem('cart'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
  var {product, quantity} = action;
  var index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findIndex(state, item => {
        return item.product.id === product.id;
      });
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity
        })
      }
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];

    case Types.DELETE_PRODUCT_IN_CART:
      index = findIndex(state, item => {
        return item.product.id === product.id;
      });
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];

    case Types.UPDATE_PRODUCT_IN_CART:
      index = findIndex(state, item => {
        return item.product.id === product.id;
      });
      
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];

    default:
      return [...state];
  }
}

export default cart;