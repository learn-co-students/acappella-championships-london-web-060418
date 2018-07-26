class Adapter {
  static getGroups() {
    const url = 'http://localhost:3000/a_cappella_groups'
    fetch(url)
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(data => aCappellaController.renderGroups(data))
  }

  static getGroup(id) {
    const winnerSection = document.querySelector('#winner')
    const url = `http://localhost:3000/a_cappella_groups/${id}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      winnerSection.innerText = `Winner: ${response.college.name} ${response.name}`
    })
  }



}
