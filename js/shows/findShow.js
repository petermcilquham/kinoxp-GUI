const inputID = document.getElementById("show");
const findShowBtn = document.querySelector(".findShowButton")
const seeAllShowsBtn = document.querySelector(".seeAllShowsButton")

findShowBtn.onclick = function(){
  fetchFunction(`http://localhost:8080/showid/${inputID.value}`);
  clearTable()
}
seeAllShowsBtn.onclick = function(){
  fetchFunction("http://localhost:8080/shows/all");
  clearTable()
}

function fetchFunction(url){
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
}

function gotData(data){
  data.forEach(addRow);
}

const table = document.getElementById("showDataTable");
function addRow(data) {
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);

  let cell1 = row.insertCell(0);
  cell1.innerHTML = data.movieTitle;

  let cell2 = row.insertCell(1);
  cell2.innerHTML = data.cinemaHall;

  let cell3 = row.insertCell(2);
  let date = new Date(data.date);
  cell3.innerHTML = date.toISOString().slice(0, 10);

  let cell4 = row.insertCell(3);
  cell4.innerHTML = data.startTime;

  let cell5 = row.insertCell(4);
  cell5.innerHTML = data.duration;

  let cell6 = row.insertCell(5);
  cell6.innerHTML = data.genre;

  let cell7 = row.insertCell(6);
  cell7.innerHTML = data.ageReq;

  let cell8 = row.insertCell(7);
  cell8.innerHTML = data.stars;

  let cell9 = row.insertCell(8);
  cell9.innerHTML = data.movieImg;

  let cell10 = row.insertCell(9);
  cell10.innerHTML = data.showId;
}

function clearTable() {
  let tableHeaderRowCount = 1;
  let rowCount = table.rows.length;

  for (let i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
  }
}
