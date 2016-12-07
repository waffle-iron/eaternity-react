import { fork } from 'redux-saga/effects'
import { fetchProductsSaga, saveProductSaga } from './product'
import { fetchFAOsSaga } from './fao'
import { fetchNutrientsSaga } from './nutrient'

function * rootSaga () {
  yield [
    fork(fetchProductsSaga),
    fork(saveProductSaga),
    fork(fetchFAOsSaga),
    fork(fetchNutrientsSaga)
  ]
}

export default rootSaga
