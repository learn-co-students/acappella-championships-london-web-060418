document.addEventListener('DOMContentLoaded', () => {


  let currentGroupId;

  fetch('http://localhost:3000/a_cappella_groups')
    .then((response) => response.json())
    .then(json => renderGroups(json))

  let aCappellaTable = document.getElementById('table-body');

  function renderGroups(json) {
    json.forEach(function(group){
      let groupTableRow = document.createElement("tr");
      groupTableRow.innerHTML = `
      <td>${group.college.name}</td>
      <td>${group.name}</td>
      <td>${group.membership}</td>
      <td>${group.college.division}</td>
      <td><img src='./assets/trophy.png' class= "image" id='${group.id}'/></td>`
          // console.log(groupTableRow);
      aCappellaTable.append(groupTableRow)
    })
  }
  let table = document.querySelector("table")

table.addEventListener("click", function(e){
  if (e.target.className === "image"){
    row = e.target.parentNode.parentNode
    currentGroupId = e.target.id;
    console.log(currentGroupId)
    moveGroupToH2(row)
  }
})

function moveGroupToH2(row) {
  let topWinner = document.getElementById('winner')

  let collegeName = row.querySelectorAll('td')[0].innerText
  let groupName = row.querySelectorAll('td')[1].innerText

  topWinner.innerText = `Winner: ${collegeName} ${groupName}`

  // let selectedElement = row.getElementsByTagName('tr')[0]
  // row.style.visibility = "hidden"
  row.parentNode.removeChild(row)
  // console.log(row);
}


})
