function fetchById(productId){
  clearCartTable()
  let url = `http://localhost:8080/products/id/${productId}`;
  fetch(url, requestOption)
    .then(response => response.json())
    .then(product => shoppingCartData(product));

}

let cartArray = [];
let sum = 0;
let arrayNumber = [1,2,3,4,5,6,7,8,9,10]
let sumDiv = document.getElementById("cartSum");
let payBtn = document.querySelector(".payCartButton")
payBtn.onclick = function () {alert(sum) }

function shoppingCartData(product){
  obj = {}
  let cartProduct = {cartProductName:`${product.productName}`, productQuantity: 0, cartPrice:`${product.price}`}
  cartArray.push(cartProduct)
  cartArray.forEach(shoppingCartRow)
  totalSum(product.price)
}

function shoppingCartRow(cartProduct) {
  let cartRowCount = cartTable.rows.length;
  let cartRow = cartTable.insertRow(cartRowCount);

  let cell1 = cartRow.insertCell(0);
  cell1.innerHTML = cartProduct.cartProductName

  let cell2 = cartRow.insertCell(1);
  selectList  = document.createElement("select")
  selectList.id = "mySelect"
  selectList.onchange = function() {quantityPrice(this.value)}

  for (let i = 0; i < arrayNumber.length; i++) {
    let option = document.createElement("option");
    option.value = arrayNumber[i];
    option.text = arrayNumber[i];
    selectList.appendChild(option);
  }
  cell2.appendChild(selectList)

  let cell3 = cartRow.insertCell(2);
  cell3.innerHTML = cartProduct.cartPrice + "kr"

  function quantityPrice(selectValue) {
    let sumProductPrice = cartProduct.cartPrice * (selectValue-1)
    let cellProductPrice = cartProduct.cartPrice * selectValue
    cell3.innerHTML = cellProductPrice + "kr"
    totalSum(sumProductPrice)
  }
}

function totalSum(ProductPrice) {
  sum += ProductPrice
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
