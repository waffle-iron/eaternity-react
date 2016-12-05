import { takeLatest } from 'redux-saga'
import { call, fork, put, select } from 'redux-saga/effects'
import { getSelectedProduct } from '../selectors/product'
import productApi from '../../api/products'
import * as actionTypes from '../data/products/action-types'

// worker sagas: fire on PRODUCT_FETCH_ALL_REQUESTED and SAVE_PRODUCT
function * fetchAllProducts () {
  try {
    const products = yield call(productApi.fetchAllProducts)
    yield put({type: actionTypes.PRODUCT_FETCH_ALL_SUCCEEDED, products})
  } catch (err) {
    yield put({type: actionTypes.PRODUCT_FETCH_ALL_FAILED, message: err.message})
  }
}

/* https://stackoverflow.com/questions/37772877/how-to-get-something-from-the-state
-store-inside-a-redux-saga-function
*/
function * saveProduct () {
  try {
    const selectedProduct = yield select(getSelectedProduct)
    yield call(productApi.saveProduct, [selectedProduct])
    yield put({type: actionTypes.PRODUCT_SAVE_SUCCEEDED})
  } catch (err) {
    yield put({type: actionTypes.PRODUCT_SAVE_FAILED, message: err.message})
  }
}

// sagas
function * fetchProductsSaga () {
  yield takeLatest(actionTypes.PRODUCT_FETCH_ALL_REQUESTED, fetchAllProducts)
}

function * saveProductSaga () {
  yield takeLatest(actionTypes.PRODUCT_SAVE_REQUESTED, saveProduct)
}

function * rootSaga () {
  yield [
    fork(fetchProductsSaga),
    fork(saveProductSaga)
  ]
}

export default rootSaga
