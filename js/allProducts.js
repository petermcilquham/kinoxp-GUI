const url = "http://localhost:8080/products";

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
  console.log(data);
  data.forEach(addRow);
}

function addRow(data) {
  const table = document.getElementById("productsDataTable");
  let rowCount = data.showID;
  let row = table.insertRow(rowCount);

  let cell1 = row.insertCell(0);
  cell1.innerHTML = data.productImg;

  let cell2 = row.insertCell(1);
  cell2.innerHTML = data.productName;

  let cell3 = row.insertCell(2);
  cell3.innerHTML = data.price;
}
