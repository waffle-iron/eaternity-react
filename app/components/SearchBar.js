import React from 'react';
import { Col, Container, Input, InputGroup, InputGroupAddon, Nav, Navbar, NavItem, Row } from 'reactstrap';
import logo from '../images/logo.png';
import searchIcon from '../images/search.png';
import styles from './NavBar.css';

const searchBar = () => (
  <div>
    <Navbar color="faded">
      <Container>
        <Row>
          <Col sm="2">
            <Nav navbar>
              <NavItem>
                <img className={styles.logo} src={logo} alt="logo" />
              </NavItem>
            </Nav>
          </Col>
          <Col sm="10">
            <Nav navbar>
              <NavItem>
                <InputGroup>
                  <InputGroupAddon>
                    <img className={styles.search} src={searchIcon} alt="searchIcon" />
                  </InputGroupAddon>
                  <Input placeholder="search for a product" />
                </InputGroup>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </div>
);

export default searchBar;
