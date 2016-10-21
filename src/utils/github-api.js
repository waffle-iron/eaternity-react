const api = {
  getRepos () {
    const url = 'https://api.github.com/repositories'

    return fetch(url).then(res => res.json())
  }
}

export default api
