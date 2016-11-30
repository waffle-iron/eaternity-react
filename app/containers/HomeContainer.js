/* @flow */
import React from 'react'
import * as dataActions from '../store/data/actions'
import * as viewActions from '../store/view/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/Home/Home'

const filterVisibleProducts = (products, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return products
    case 'SHOW_SUBSET':
      return products.map(product => {
        return {
          Product: product.name,
          Synonyms: product.synonyms,
          Tags: product.tags,
          'Co2-value': product['co2-value']
        }
      })
  }
}

const HomeContainer = (props: Object) => {
  return (
    <Home {...props} />
  )
}

const mapStateToProps = (state: Object) => ({
  dataDir: state.data.dataDir,
  products: filterVisibleProducts(state.data.products, state.view.productFilter)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchProducts: dataActions.fetchProducts,
    changeDataDir: dataActions.changeDataDir,
    toggleProductVisibility: viewActions.toggleProductVisibility
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
