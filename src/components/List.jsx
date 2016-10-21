import React from 'react'
import ReactList from 'react-list';
import styles from '../css/list.css'
import api from '../utils/github-api'

class List extends React.Component {
  state = {
    repos: []
  }

  componentWillMount() {
    api.getRepos()
      .then(jsonRes => {
        const repos = jsonRes.map(repo => {
          return {
            id: repo.id,
            name: repo.name
          }
        })
        this.setState({repos});
      })
      .catch(err => console.error(err))
  }

  renderItem(id, key) {
    const repoId = this.state.repos[id].id
    const name = this.state.repos[id].name
    return (
      <div className={styles.listItem} key={key}>
        {id}: {name}
      </div>
    )
  }

  render() {
    return (
      <div className={styles.list}>
        <div style={{overflow: 'auto', maxHeight: 400}}>
          <ReactList
            itemRenderer={::this.renderItem}
            length={this.state.repos.length}
            type='uniform'
          />
        </div>
      </div>
    );
  }
}

export default List
