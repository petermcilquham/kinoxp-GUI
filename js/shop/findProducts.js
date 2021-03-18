const requestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'GET',
  redirect: 'follow'
};


function filteredType() {
  const dropdownInput = document.getElementById("productTypeSelect")
  fetchType(dropdownInput)
}

function fetchType(dropdownInput) {
  clearTable()
  let url = `http://localhost:8080/products/${dropdownInput.value}`;
  fetch(url, requestOption)
    .then(response => response.json())
    .then(data => gotData(data));
}

window.onload = fetchAll();
const table = document.getElementById("productsDataTable");

function fetchAll(){
  let url = `http://localhost:8080/products/all`;
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
  cell1.innerHTML = data.productId;

  let cell2 = row.insertCell(1);
  cell2.innerHTML = data.productType;

  let cell3 = row.insertCell(2);
  cell3.innerHTML = data.productName;

  let cell4 = row.insertCell(3);
  cell4.innerHTML = data.price + "kr";

  let cell5 = row.insertCell(4);
  var addToCartBtn = document.createElement("BUTTON");
  var btnTxt = document.createTextNode("Tilføj til kurv");
  addToCartBtn.appendChild(btnTxt);
  cell5.innerHTML = document.body.appendChild(addToCartBtn);
}

function addToCart(){
  //add price to total and print receipt
}

function clearTable() {
  let tableHeaderRowCount = 1;
  let rowCount = table.rows.length;

  for (let i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
  }
}




