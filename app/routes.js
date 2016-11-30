// @flow
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HomeContainer from './containers/HomeContainer'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomeContainer} />
  </Route>
)
