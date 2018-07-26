document.addEventListener('DOMContentLoaded', function(){

  fetch("http://localhost:3000/a_cappella_groups")
         .then(res => res.json())
         .then(groups => renderGroups(groups))
         //console.table(res)

  let groupTable = document.getElementById('table-body')
  let currentGroupId;

function renderGroups(groups) {
  groups.forEach(function(group){
    let groupTr = document.createElement("tr")
    groupTr.innerHTML =  `
      <td>${group.college.name}</td>
      <td>${group.name}</td>
      <td>${group.membership}</td>
      <td>${group.college.division}</td>
      <td><img src='./assets/trophy.png' class="image" id=${group.id}></td>
    `
    groupTable.append(groupTr)
    //console.log(group.id)
  })
}

//Event delegation - bigger element that already exists is clicked,
//then checkd what exactly was clicked
let table = document.getElementById("table-body")

table.addEventListener("click", function(e){
  if (e.target.className === "image"){
    row = e.target.parentNode.parentNode
    //console.log(e.path[2])
    currentGroupId = e.target.id    //group's id !!!!
    console.log(currentGroupId)
    console.log(row)
    moveTheGroupToH2(row)
  }
})

function moveTheGroupToH2(row){
  let toph2 = document.getElementById("winner")

  let groupCollegeName = row.querySelectorAll('td')[0].innerText
  let groupName = row.querySelectorAll('td')[1].innerText

  toph2.innerText = `Winner: ${groupCollegeName} ${groupName}`

  row.parentNode.removeChild(row)
}

})
