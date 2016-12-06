/* @flow */
import React from 'react'
import * as dataActions from '../store/data/actions'
import * as viewActions from '../store/view/actions'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import NewProduct from '../components/NewProduct/NewProduct'

const NewProductContainer = (props: Object) => {
  return (
    <NewProduct {...props} />
  )
}

const mapStateToProps = (state: Object) => ({
  dataDir: state.data.dataDir,
  selectedProduct: state.data.selectedProduct
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateSelectedProduct: dataActions.updateSelectedProduct,
    saveProduct: dataActions.saveProduct,
    clearSearchInput: viewActions.clearSearchInput,
    changeLocation: push
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProductContainer)
