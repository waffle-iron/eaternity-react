/* @flow */
import React, { Component, PropTypes } from 'react'
import { ipcRenderer } from 'electron'
import { Button, Card, CardBlock, CardTitle, CardSubtitle, Col, Input, Form, FormGroup, Label, Popover, PopoverTitle, PopoverContent } from 'reactstrap'
import EditBar from '../EditBar/EditBar'
import styles from './Edit.css'

class Edit extends Component {
  static propTypes = {
    dataDir: PropTypes.string.isRequired,
    editedProduct: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = {
    popoverOpen: false,
    fieldname: ''
  }

  togglePopOver = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    })
  }

  handleSaveClick = () => {
    ipcRenderer.send('save-button-clicked', this.props.editedProduct.filename)
    ipcRenderer.on('save-box-verified', event => {
      this.props.actions.saveProduct()
      ipcRenderer.send('save-updated-product', this.props.dataDir, this.props.editedProduct.id)
    })
  }

  handleAddFieldClick = () => {
    this.togglePopOver()
  }

  handleInputChange = (e: Object) => {
    this.props.actions.updateSelectedProduct(e.target.id, e.target.value)
  }

  handleFieldnameInput = (e: Object) => {
    this.setState({
      fieldname: e.target.value
    })
  }

  handleCreateFieldClick = () => {
    const fieldname = this.state.fieldname
    this.props.actions.updateSelectedProduct(fieldname, '')
    this.togglePopOver()
    this.setState({
      fieldname: ''
    })
  }

  renderEdit = () => {
    const inputs = Object.keys(this.props.editedProduct).map(key => {
      return (
        <FormGroup key={key} row>
          <Label for={key} sm={4}>{key}</Label>
          <Col sm={8}>
            <Input
              type='text'
              id={key}
              onKeyUp={(e) => this.handleInputChange(e)}
              placeholder={this.props.editedProduct[key]} />
          </Col>
        </FormGroup>
      )
    })

    return (
      <div className={styles.container}>
        <Card>
          <CardBlock>
            <CardTitle>{this.props.editedProduct.name}</CardTitle>
            <CardSubtitle>{this.props.editedProduct.filename}</CardSubtitle>
          </CardBlock>
          <CardBlock>
            <Form>
              {inputs}
            </Form>
          </CardBlock>
          <CardBlock>
            <div className={styles.editBtnGroup}>
              <Col sm={2}>
                <Button
                  onClick={() => this.handleAddFieldClick()}
                  outline
                  id='addField'
                  color='warning'
                  block >
                  Add field
                </Button>
                <Popover
                  placement='top'
                  isOpen={this.state.popoverOpen}
                  target='addField'
                  toggle={this.togglePopOver}>
                  <PopoverTitle>
                    Enter fieldname
                  </PopoverTitle>
                  <PopoverContent>
                    <Input
                      type='text'
                      onKeyUp={(e) => this.handleFieldnameInput(e)}
                      placeholder='fieldname' />
                  </PopoverContent>
                  <PopoverContent className={styles.popoverBtn}>
                    <Button
                      onClick={() => this.handleCreateFieldClick()}
                      size='sm'
                      color='success'>
                      Create field
                    </Button>
                  </PopoverContent>
                </Popover>
              </Col>
              <Col sm={3}>
                <Button
                  onClick={() => this.handleSaveClick()}
                  outline
                  color='success'
                  block >
                  Save changes
                </Button>
              </Col>
            </div>
          </CardBlock>
        </Card>
      </div>
    )
  }
  render () {
    return (
      <div>
        <EditBar actions={this.props.actions} />
        {this.renderEdit()}
      </div>
    )
  }
}

export default Edit
