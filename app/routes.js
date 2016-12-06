// @flow
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HomeContainer from './containers/HomeContainer'
import EditContainer from './containers/EditContainer'
import NewProductContainer from './containers/NewProductContainer'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path='/edit/:id' component={EditContainer} />
    <Route path='/new-product' component={NewProductContainer} />
  </Route>
)
