/* @flow */
import React, { PropTypes } from 'react'
import { ipcRenderer } from 'electron'
import { Button, Card, CardBlock, CardTitle, CardSubtitle, Col, Input, Form, FormGroup, Label } from 'reactstrap'
import EditBar from '../EditBar/EditBar'
import styles from './Edit.css'

const Edit = (props: Object) => {
  const handleSaveClick = () => {
    ipcRenderer.send('save-button-clicked', props.selectedProduct.filename)
    ipcRenderer.on('save-box-verified', event => {
      props.actions.saveProduct()
      ipcRenderer.send('save-updated-product', props.dataDir, props.selectedProduct.id)
    })
  }

  const handleInputChange = (e) => {
    props.actions.updateSelectedProduct(e.target.id, e.target.value)
  }

  const renderEdit = () => {
    const inputs = Object.keys(props.selectedProduct).map(key => {
      return (
        <FormGroup key={key} row>
          <Label for={key} sm={4}>{key}</Label>
          <Col sm={8}>
            <Input
              type='text'
              id={key}
              onKeyUp={(e) => handleInputChange(e)}
              placeholder={props.selectedProduct[key]} />
          </Col>
        </FormGroup>
      )
    })

    return (
      <div className={styles.container}>
        <Card>
          <CardBlock>
            <CardTitle>{props.selectedProduct.name}</CardTitle>
            <CardSubtitle>{props.selectedProduct.filename}</CardSubtitle>
          </CardBlock>
          <CardBlock>
            <Form>
              {inputs}
            </Form>
          </CardBlock>
          <CardBlock>
            <Button
              onClick={() => handleSaveClick()}
              outline
              color='success'
              block >
              Save changes
            </Button>
          </CardBlock>
        </Card>
      </div>
    )
  }

  return (
    <div>
      <EditBar actions={props.actions} />
      {renderEdit()}
    </div>
  )
}

Edit.propTypes = {
  selectedProduct: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Edit
