import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import dataSaga from './store/sagas/sagas'
import routes from './routes'
import rootReducer from './store/reducers'
import './app.global.css'

const sagaMiddleware = createSagaMiddleware()
const composedMiddleware = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : undefined
)

const store = createStore(rootReducer, {}, composedMiddleware)
const history = syncHistoryWithStore(hashHistory, store)

// run all sagas
sagaMiddleware.run(dataSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
