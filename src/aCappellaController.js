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
        <td><img src='./assets/trophy.png' class="trophy" data-id=${group.id}/></td>
      `

      let trophyButton = tableRow.querySelector('.trophy')
      trophyButton.addEventListener('click', aCappellaController.crownGroupAsWinner)

      let table = document.querySelector('#group-table')
      table.append(tableRow)
    })
  }

  static crownGroupAsWinner(group) {
    console.log('oh buoy');
    const winnerSection = document.querySelector('#winner')
    Adapter.getGroup(e.target.id)
    .then(response => {
      winnerSection.innerText = `Winner: ${response.name}`
    })
  }
}
