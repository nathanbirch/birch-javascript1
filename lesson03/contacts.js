let idCount = 2;

function saveContact() {
  // input from user
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let phone = document.getElementById('phone').value;
  let address = document.getElementById('address').value;
  // output to user
  let tbody = document.getElementById('contactsTableBody');
  let newId = idCount + 1;
  tbody.innerHTML += `<tr id=${newId}>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${phone}</td>
                    <td>${address}</td>
                    <td><button onclick="editContact(${newId})">Edit Contact</button></td>
  </tr>`;
  idCount++;
}

function editContact(contactId) {
  let contactRow = document.getElementById(contactId);
  contactRow.cells[0].innerHTML = 'Jimmy';
}
