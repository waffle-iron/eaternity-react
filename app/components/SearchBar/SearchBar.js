import React, { PropTypes } from 'react'
import { Col, Container, Input, InputGroup, InputGroupAddon, Nav, Navbar, NavItem, Row } from 'reactstrap'
import logo from './logo.png'
import searchIcon from './search.png'
import styles from './SearchBar.css'

const SearchBar = (props) => {
  const handleKeyUp = (e) => {
    const searchInput = e.target.value
    props.actions.updateSearchInput(searchInput)
  }

  return (
    <div>
      <Navbar color='faded'>
        <Container>
          <Row>
            <Col sm='2'>
              <Nav navbar>
                <NavItem>
                  <img className={styles.logo} src={logo} alt='logo' />
                </NavItem>
              </Nav>
            </Col>
            <Col sm='10'>
              <Nav navbar>
                <NavItem>
                  <InputGroup>
                    <InputGroupAddon>
                      <img className={styles.search} src={searchIcon} alt='searchIcon' />
                    </InputGroupAddon>
                    <Input
                      onKeyUp={(e) => handleKeyUp(e)}
                      placeholder='search for a product' />
                  </InputGroup>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  )
}

SearchBar.propTypes = {
  actions: PropTypes.object.isRequired
}

export default SearchBar
