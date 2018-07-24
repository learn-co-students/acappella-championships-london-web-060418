class aCappellaGroup {

  static renderGroup(group) {
    const tableBody = document.querySelector('#table-body')

    let newEntry = document.createElement('tr')

    newEntry.id = `group-${group.id}`
    newEntry.innerHTML = `
      <td>${group.college.name}</td>
      <td>${group.name}</td>
      <td>${group.membership}</td>
      <td>${group.college.division}</td>
      <td><img src='./assets/trophy.png' data-id="${group.id}"/></td>
    `

    newEntry.querySelector('td img').addEventListener('click', aCappellaGroup.makeWinner)

    tableBody.append(newEntry)
  }

  static makeWinner(e) {
    const newWinner = e.target.parentNode.parentNode
    const winnerId = e.target.dataset.id

    document.querySelector('#winner').innerText = `Winner: ${newWinner.querySelectorAll('td')[1].innerText}`

    aCappellaGroup.clearTable()
    Adapter.fetchGroups().then( r => r.forEach(aCappellaGroup.renderGroup)).then(r =>
      document.querySelector(`#group-${winnerId}`).remove()
    )
  }

  static clearTable() {
    const table = document.querySelector('#table-body')
    while (table.hasChildNodes()) {
      table.firstChild.remove()
    }
  }
}
