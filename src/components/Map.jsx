import React from 'react'
import GoogleMap from 'google-map-react'
// import styles from '../css/map.css'

class Map extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      coords: {
        lat: 51.0504,
        lng: 13.7373
      }
    }
  }

  render () {
    return (
      <div>
        <GoogleMap
          defaultCenter={this.state.coords}
          defaultZoom={13} />
      </div>

    )
  }
}

export default Map
