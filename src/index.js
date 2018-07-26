document.addEventListener('DOMContentLoaded', init)

function init(){
  getGroups()
  delegateWinEvent()
  let table = document.querySelector('table').getElementsByTagName('tbody')[0]
}

function delegateWinEvent() {
  table = document.querySelector('table').getElementsByTagName('tbody')[0]
  table.addEventListener('click', function(e){
    if (e.target.innerText === 'Win'){
      row = e.target.parentNode.parentNode
      row.id = e.target.id
      addWinner(row)
    }
  })
}

function addWinner(row){
  tbody = document.querySelector('table').getElementsByTagName('tbody')[0]
  showWinner = document.querySelector('h2')
  showWinner.innerText = 'Winner: ' + row.cells[1].innerText
  tbody.innerHTML = ""
  getGroupsButNotWinner(row.id)
}

function getGroupsButNotWinner(id) {
  fetch('http://localhost:3000/a_cappella_groups')
  .then(res => res.json())
  .then(data => data.filter(d => d.id != id))
  .then(json => renderGroupRows(json))
}


function getGroups() {
  fetch('http://localhost:3000/a_cappella_groups')
  .then(res => res.json())
  .then(json => renderGroupRows(json))
}

function renderGroupRows(data){
  table = document.querySelector('table').getElementsByTagName('tbody')[0]
  data.forEach((group) => {
    createGroupRow(group);
  })
}

function createGroupRow(group) {

  let row = table.insertRow()
  row.id = group.id

  let collegeName = row.insertCell(0)
  let groupName = row.insertCell(1)
  let membership = row.insertCell(2)
  let division = row.insertCell(3)
  let winner = row.insertCell(4)


  collegeName.innerHTML = group.college.name;
  groupName.innerHTML = group.name;
  membership.innerHTML = group.membership;
  division.innerHTML = group.college.division
  winner.innerHTML = `<button id=${group.id}>Win</button>`;

}
