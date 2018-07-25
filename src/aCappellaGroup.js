class Cappella {
  constructor(id, college, membership, division){
    this.id = id
    this.college = college
    this.membership = membership
    this.division = division
  }

  render() {
    return `<tr id="${this.id}">
    <td>${this.college}</td>
    <td>${this.membership}</td>
    <td>${this.division}</td>
    <td><img src='./assets/trophy.png' onclick= "addWinner(${this.id});"></img></td>
    </tr>`
  }
}

// <tr><td>*Insert College*</td>
// <td>*Insert Group Name*</td>
// <td>*Insert Membership*</td>
// <td>*Insert Division*</td>
// <td><img src='./assets/trophy.png' data-id='*put an id here*'/></td>
// </tr>
