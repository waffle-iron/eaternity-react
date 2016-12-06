import React, { Component, PropTypes } from 'react'
import { ipcRenderer } from 'electron'
import { Col, Container, Input, InputGroup, InputGroupAddon, Nav, Navbar, NavItem, Row, Tooltip } from 'reactstrap'
import logo from './logo.png'
import searchIcon from './search.png'
import addIcon from './plus.png'
import folderIcon from './folder.png'
import styles from './SearchBar.css'

class SearchBar extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  state = {
    addTooltip: {
      open: false
    },
    chooseTooltip: {
      open: false
    }
  }

  handleChooseDir = () => {
    ipcRenderer.send('choose-data-dir')
    ipcRenderer.on('data-dir-choosen', (event, choosenDir) => {
      if (choosenDir) {
        this.props.actions.changeDataDir(choosenDir)
        this.props.actions.fetchAllProducts()
        this.props.actions.fetchAllFAOs()
      }
    })
  }

  toggleAddToolTip = () => {
    this.setState({
      addTooltip: {
        open: !this.state.addTooltip.open
      }
    })
  }

  toggleDirToolTip = () => {
    this.setState({
      chooseTooltip: {
        open: !this.state.chooseTooltip.open
      }
    })
  }

  handleKeyUp = (e) => {
    const searchInput = e.target.value
    this.props.actions.updateSearchInput(searchInput)
  }

  handlePlusClick = () => {
    this.props.actions.changeLocation('/new-product')
  }

  render () {
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
              <Col sm='8'>
                <Nav navbar>
                  <NavItem>
                    <InputGroup>
                      <InputGroupAddon>
                        <img className={styles.search} src={searchIcon} alt='searchIcon' />
                      </InputGroupAddon>
                      <Input
                        onKeyUp={(e) => this.handleKeyUp(e)}
                        placeholder='search for ...' />
                    </InputGroup>
                  </NavItem>
                </Nav>
              </Col>
              <Col sm='2'>
                <Nav navbar>
                  <NavItem>
                    <img
                      onClick={() => this.handlePlusClick()}
                      className={styles.plus}
                      color='secondary'
                      id={'Tooltip-addFile'}
                      src={addIcon} alt='searchIcon' />
                    <Tooltip
                      placement={'left'}
                      isOpen={this.state.addTooltip.open}
                      target={'Tooltip-addFile'}
                      toggle={() => this.toggleAddToolTip()}>
                      Add a new product
                    </Tooltip>
                  </NavItem>
                  <NavItem>
                    <img
                      onClick={() => this.handleChooseDir()}
                      className={styles.folder}
                      color='secondary'
                      id={'Tooltip-addDataDir'}
                      src={folderIcon} alt='searchIcon' />
                    <Tooltip
                      placement={'bottom'}
                      isOpen={this.state.chooseTooltip.open}
                      target={'Tooltip-addDataDir'}
                      toggle={() => this.toggleDirToolTip()}>
                      Choose data directory
                    </Tooltip>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    )
  }
}

SearchBar.propTypes = {
  actions: PropTypes.object.isRequired
}

export default SearchBar
