/* @flow */
import React from 'react'
import * as dataActions from '../store/data/products/actions'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import Edit from '../components/Edit/Edit'

const EditContainer = (props: Object) => {
  return (
    <Edit {...props} />
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
    changeLocation: push
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContainer)
