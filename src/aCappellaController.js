class aCappellaController {

  static init() {
    //calls the adapter, gets the data
    Adapter.getGroups()
  }

  static renderGroups(data) {
    data.forEach(group => {
      let tableRow = document.createElement('tr')
      tableRow.innerHTML = `
      <td>${group.college.name}</td>
      <td>${group.name}</td>
      <td>${group.membership}</td>
      <td>${group.college.division}</td>
        <td><img src='./assets/trophy.png' class="trophy" id=${group.id}></td>
      `

      let trophyButton = tableRow.querySelector('.trophy')
      trophyButton.addEventListener('click', aCappellaController.crownGroupAsWinner)

      let table = document.querySelector('#group-table')
      table.append(tableRow)
    })
  }

  static crownGroupAsWinner(e) {
    let id = e.target.id;
    console.log(e.target.parentNode.parentNode)
    console.log(id);
    // const winnerSection = document.querySelector('#winner')
    Adapter.getGroup(id)
    // .then(response => {
    //   winnerSection.innerText = `Winner: ${response.name}`
    // })
    aCappellaController.removeGroup()
  }

  static removeGroup() {
    //remove row from the DOM
  }

}
