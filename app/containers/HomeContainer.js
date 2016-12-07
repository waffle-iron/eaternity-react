/* @flow */
import React from 'react'
import * as dataActions from '../store/data/actions'
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

const mapStateToProps = (state: Object) => {
  return {
    products: getVisibleProducts(state),
    faos: state.data.faos,
    nutrients: state.data.nutrients,
    searchInput: state.view.searchInput,
    visibleTable: state.view.visibleTable
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchAllProducts: dataActions.fetchAllProducts,
    fetchAllFAOs: dataActions.fetchAllFAOs,
    fetchAllNutrients: dataActions.fetchAllNutrients,
    changeDataDir: dataActions.changeDataDir,
    selectProduct: dataActions.selectProduct,
    toggleTableVisibility: viewActions.toggleTableVisibility,
    updateSearchInput: viewActions.updateSearchInput,
    clearSearchInput: viewActions.clearSearchInput,
    changeLocation: push
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
