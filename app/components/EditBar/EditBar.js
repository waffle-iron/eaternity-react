import React from 'react'
import { Button, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'
import { ipcRenderer } from 'electron'
import logo from './logo.png'
import styles from './EditBar.css'

const EditBar = (props) => {
  const handleBackClick = () => {
    ipcRenderer.send('back-button-clicked')
    ipcRenderer.on('back-box-verified', event => {
      props.actions.changeLocation('/')
    })
  }

  const handleSaveClick = () => {
    ipcRenderer.send('save-button-clicked', `${props.selectedProduct.filename}`)
  }

  return (
    <div>
      <Navbar color='faded' light>
        <NavbarBrand>
          <img className={styles.logo} src={logo} alt='logo' />
        </NavbarBrand>
        <Nav className='float-xs-right' navbar>
          <NavItem>
            <Button
              outline
              color='warning'
              onClick={() => handleBackClick()}>
              Back
            </Button>
          </NavItem>
          <NavItem>
            <Button
              outline
              color='success'
              onClick={() => handleSaveClick()}>
              Save
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default EditBar
