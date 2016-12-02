import React from 'react'
import { Button } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Edit = () => {
  return (
    <LinkContainer
      to={{pathname: '/'}} >
      <Button>Home</Button>
    </LinkContainer>
  )
}

export default Edit
