const requestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'GET',
  redirect: 'follow'
};

const table = document.getElementById("createBookingTable");
const input = document.getElementById("title");
const findShowBtn = document.querySelector(".findShowTitleButton");
findShowBtn.addEventListener("click", fetchFunc);
findShowBtn.addEventListener("click", clearTable);

function fetchFunc(){
  let url = `http://localhost:8080/showtitle/${input.value}`;

  fetch(url, requestOption)
    .then(response => response.json())
    .then(data => gotData(data));
}

function gotData(data){
  data.forEach(addRow);
}

function addRow(data) {
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);

  let cell1 = row.insertCell(0);
  cell1.innerHTML = data.movieTitle;

  let cell2 = row.insertCell(1);
  cell2.innerHTML = data.date;

  let cell3 = row.insertCell(2);
  cell3.innerHTML = data.startTime;

  let cell4 = row.insertCell(3);
  cell4.innerHTML = data.ageReq;

  let cell5 = row.insertCell(4);
  cell5.innerHTML = data.showId;

  let cell6 = row.insertCell(5);
  cell6.innerHTML = data.cinemaHall;
}

function clearTable() {
  let tableHeaderRowCount = 1;
  let rowCount = table.rows.length;

  for (let i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
  }
}
