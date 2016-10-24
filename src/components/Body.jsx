import React from 'react'
import List from './List.jsx'
import '../css/Body.css'

const Body = () => {
  return (
    <div className='Body'>
      <h2>
        A list of github repos
      </h2>
      <List />
    </div>
  )
}

export default Body
