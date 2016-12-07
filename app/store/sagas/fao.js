import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import faoApi from '../../api/faos'
import * as actionTypes from '../data/action-types'

function * fetchAllFAOs () {
  try {
    const faos = yield call(faoApi.fetchAllFAOs)
    yield put({type: actionTypes.FAO_FETCH_ALL_SUCCEEDED, faos})
  } catch (err) {
    yield put({type: actionTypes.FAO_FETCH_ALL_FAILED, message: err.message})
  }
}

export function * fetchFAOsSaga () {
  yield takeLatest(actionTypes.FAO_FETCH_ALL_REQUESTED, fetchAllFAOs)
}
