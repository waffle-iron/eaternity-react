/* @flow */
import React from 'react'
import * as dataActions from '../store/data/products/actions'
import * as viewActions from '../store/view/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getVisibleProducts } from '../store/selectors/product'
import Home from '../components/Home/Home'

const HomeContainer = (props: Object) => {
  return (
    <Home {...props} />
  )
}

const mapStateToProps = (state: Object) => ({
  products: getVisibleProducts(state),
  searchInput: state.view.searchInput
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchAllProducts: dataActions.fetchAllProducts,
    changeDataDir: dataActions.changeDataDir,
    selectProduct: dataActions.selectProduct,
    toggleProductVisibility: viewActions.toggleProductVisibility,
    updateSearchInput: viewActions.updateSearchInput,
    changeLocation: push
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
