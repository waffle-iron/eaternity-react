import React from 'react'
import ReactList from 'react-list'
import api from '../utils/github-api'
import '../css/List.css'

class List extends React.Component {
  constructor () {
    super()
    this.state = {
      repos: []
    }
  }

  componentWillMount () {
    api.getRepos()
      .then(jsonRes => {
        const repos = jsonRes.map(repo => {
          return {
            id: repo.id,
            name: repo.name
          }
        })
        this.setState({repos})
      })
      .catch(err => console.error(err))
  }

  renderItem (id, key) {
    const repoId = this.state.repos[id].id
    const name = this.state.repos[id].name
    return (
      <div className='ListItem' key={key}>
        {repoId}: {name}
      </div>
    )
  }

  render () {
    return (
      <div className='List'>
        <div style={{overflow: 'auto', maxHeight: 400}}>
          <ReactList
            itemRenderer={this.renderItem.bind(this)}
            length={this.state.repos.length}
            type='uniform'
          />
        </div>
      </div>
    )
  }
}

export default List
