import React from 'react'
import { Button, Nav, Navbar, NavItem } from 'reactstrap'
import logo from '../images/logo.png'
import '../css/NavBar.css'

const edbNavBar = () => {
  return (
    <div>
      <Navbar color='inverse'>
        <Nav className='float-xs-left' navbar>
          <NavItem>
            <img className='image' src={logo} alt='logo' />
          </NavItem>
        </Nav>
        <Nav className='float-xs-right' navbar>
          <NavItem>
            <Button outline color='warning'>Edit</Button>
          </NavItem>
          <NavItem>
            <Button outline color='warning'>Settings</Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default edbNavBar
