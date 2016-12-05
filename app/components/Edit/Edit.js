import React, { PropTypes } from 'react'
import { Button } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Edit = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        Hellllllo
      </h1>
      <LinkContainer
        to={{pathname: '/'}} >
        <Button>Home</Button>
      </LinkContainer>
    </div>
  )
}

Edit.propTypes = {
  params: PropTypes.object
}

export default Edit
