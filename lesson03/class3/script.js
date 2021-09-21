function introductionFunction() {
  // create new table row
  let tr = document.createElement('tr');
  // create first name
  let td = document.createElement('td');
  td.innerHTML = introduction.first.value;
  tr.appendChild(td); // add name to row
  // create last name
  td = document.createElement('td');
  td.innerHTML = introduction.last.value;
  tr.appendChild(td); // add name to row
  // create last name
  td = document.createElement('td');
  td.innerHTML = introduction.color.value;
  tr.appendChild(td); // add color to row
  // create last name
  td = document.createElement('td');
  td.innerHTML = introduction.city.value;
  tr.appendChild(td); // add city to row

  // add row to table
  document.getElementById('output').appendChild(tr);
}
