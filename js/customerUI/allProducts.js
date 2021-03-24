const requestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'GET',
  redirect: 'follow'
};

function filteredType() {
  let dropdownInput = document.getElementById("productTypeSelect")

  if (dropdownInput.value === "all") {
    clearTable()
    fetchAll()
  } else {
    fetchType(dropdownInput)
  }
}

function fetchType(dropdownInput) {
  clearTable()
  let url = `http://localhost:8080/products/type/${dropdownInput.value}`;
  fetch(url, requestOption)
    .then(response => response.json())
    .then(data => gotData(data));
}

window.onload = fetchAll();
let table = document.getElementById("productsDataTable");
let cartTable = document.getElementById("shoppingCartTable");

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
  addToCartBtn = document.createElement("BUTTON");
  let btnTxt = document.createTextNode("Tilføj til kurv");
  addToCartBtn.appendChild(btnTxt);
  cell5.appendChild(addToCartBtn);
  addToCartBtn.onclick = function () {fetchById(data.productId) }
}
