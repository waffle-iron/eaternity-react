import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import productApi from '../../api/products'
import * as actionTypes from '../data/products/action-types'

// worker Saga: will be fired on PRODUCT_FETCH_REQUESTED actions
function * fetchAllProducts () {
  try {
    const products = yield call(productApi.fetchAllProducts)
    yield put({type: actionTypes.PRODUCT_FETCH_ALL_SUCCEEDED, products})
  } catch (err) {
    yield put({type: actionTypes.PRODUCT_FETCH_ALL_FAILED, message: err.message})
  }
}

function * dataSaga () {
  yield takeLatest(actionTypes.PRODUCT_FETCH_ALL_REQUESTED, fetchAllProducts)
}

export default dataSaga
