import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import productApi from '../../api/products'
import { PRODUCT_FETCH_REQUESTED, PRODUCT_FETCH_SUCCEEDED, PRODUCT_FETCH_FAILED } from '../data/products/action-types'

// worker Saga: will be fired on PRODUCT_FETCH_REQUESTED actions
function * fetchProducts () {
  try {
    const products = yield call(productApi.fetchProducts)
    yield put({type: PRODUCT_FETCH_SUCCEEDED, products})
  } catch (err) {
    yield put({type: PRODUCT_FETCH_FAILED, message: err.message})
  }
}

function * dataSaga () {
  yield takeLatest(PRODUCT_FETCH_REQUESTED, fetchProducts)
}

export default dataSaga
