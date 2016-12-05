/* @flow */
import React from 'react'
import * as dataActions from '../store/data/products/actions'
import * as viewActions from '../store/view/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../store/selectors/product'
import Home from '../components/Home/Home'

const HomeContainer = (props: Object) => {
  return (
    <Home {...props} />
  )
}

const mapStateToProps = (state: Object) => ({
  dataDir: state.data.dataDir,
  products: getVisibleProducts(state),
  searchInput: state.view.searchInput
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchAllProducts: dataActions.fetchAllProducts,
    changeDataDir: dataActions.changeDataDir,
    toggleProductVisibility: viewActions.toggleProductVisibility,
    updateSearchInput: viewActions.updateSearchInput
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
