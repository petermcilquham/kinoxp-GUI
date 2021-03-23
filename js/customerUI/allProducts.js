const requestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'GET',
  redirect: 'follow'
};


function filteredType() {
  const dropdownInput = document.getElementById("productTypeSelect")

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
const table = document.getElementById("productsDataTable");
const cartTable = document.getElementById("shoppingCartTable");

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
  const btnTxt = document.createTextNode("Tilføj til kurv");
  addToCartBtn.appendChild(btnTxt);
  cell5.appendChild(addToCartBtn);
  addToCartBtn.onclick = function () {fetchById(data.productId) }
}

function fetchById(productId){
  clearCartTable()
  let url = `http://localhost:8080/products/id/${productId}`;
  fetch(url, requestOption)
    .then(response => response.json())
    .then(product => shoppingCartData(product));
}

const cartArray = [];
var sum = 0;

function shoppingCartData(product){
  var cartProduct = {cartProductName:`${product.productName}`, cartPrice:`${product.price}`}
  cartArray.push(cartProduct)
  cartArray.forEach(shoppingCartRow)
  totalSum(cartProduct)

}

function shoppingCartRow(cartProduct) {
  let cartRowCount = cartTable.rows.length;
  let cartRow = cartTable.insertRow(cartRowCount);

  let cell1 = cartRow.insertCell(0);
  cell1.innerHTML = cartProduct.cartProductName

  let cell2 = cartRow.insertCell(1);
  cell2.innerHTML = cartProduct.cartPrice + "kr"
}

const sumDiv = document.getElementById("cartSum");
const payBtn = document.querySelector(".payCartButton")
payBtn.onclick = function () {alert("KØBT!!!") }

function totalSum(cartProduct) {
  var productPrice = parseInt(cartProduct.cartPrice, 10)
  sum += productPrice
  sumDiv.innerHTML = sum + "kr"
}

function clearTable() {
  let tableHeaderRowCount = 1;
  let rowCount = table.rows.length;

  for (let i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
  }
}

function clearCartTable() {
  let tableHeaderRowCount = 1;
  let rowCount = cartTable.rows.length;

  for (let i = tableHeaderRowCount; i < rowCount; i++) {
    cartTable.deleteRow(tableHeaderRowCount);
  }
}




