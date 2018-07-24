class Adapter {

  static fetchGroups() {
    return fetch('http://starkiller-api.herokuapp.com/api/v1/a_cappella_groups')
    .then( r => r.json() )
  }
}
