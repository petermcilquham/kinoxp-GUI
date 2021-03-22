const queryString = window.location.search;
const url = `http://localhost:8080/booking/showid/${queryString.substr(1)}`;

const requestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'GET',
  redirect: 'follow'
};

fetch(url, requestOption)
  .then(response => response.json())
  .then(data => gotData(data));

function gotData(data){
  data.forEach(addRow);
}

const table = document.getElementById("bookingsFromShowTable");
function addRow(data) {
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);

  let cell1 = row.insertCell(0);
  cell1.innerHTML = data.bookingId;

  let cell2 = row.insertCell(1);
  cell2.innerHTML = data.customerName

  let cell3 = row.insertCell(2);
  cell3.innerHTML = data.customerMobileNumber

  let cell4 = row.insertCell(3);
  cell4.innerHTML = data.showId

  let cell5 = row.insertCell(4);
  cell5.innerHTML = data.cinemaHallId

  let cell6 = row.insertCell(5);
  cell6.innerHTML = data.seatNum01

  let cell7 = row.insertCell(6);
  cell7.innerHTML = data.seatNum02

  let cell8 = row.insertCell(7);
  cell8.innerHTML = data.seatNum03

  let cell9 = row.insertCell(8);
  cell9.innerHTML = data.seatNum04

  let cell10 = row.insertCell(9);
  cell10.innerHTML = data.seatNum05
}
