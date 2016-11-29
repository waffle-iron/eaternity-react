/* @flow */
// import { LOAD_PRODUCTS } from '../actions/products';
// import pify from 'pify';
// import jsonStore from 'electron-json-storage';

// const storage = pify(jsonStore);

const initialState = [{}];

export default function product(state: Array<Object> = initialState, action: Object) {
  switch (action.type) {
    default:
      return state;
  }
}
