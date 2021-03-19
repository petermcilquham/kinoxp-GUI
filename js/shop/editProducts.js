const in1 = document.getElementById("productID");
const in2 = document.getElementById("name");
const in3 = document.getElementById("productType");
const in4 = document.getElementById("productPrice");

const editProductBtn = document.querySelector(".editProductButton");
editProductBtn.onclick = function() {
  postFunction({
    "productID": `${in1.value}`,
    "productName": `${in2.value}`,
    "productType": `${in3.value}`,
    "price": `${in4.value}`,
  });
}

function postFunction(inputValue){
  const url = `http://localhost:8080/products/edit/${in1.value}`;

  const filteredData = filterMethod(inputValue)
  let requestBody = JSON.stringify(filteredData);

  const requestOption = {
    headers: {
      "Content-type": 'application/json'
    },
    method: 'PUT',
    redirect: 'follow',
    body: requestBody
  };

  fetch(url, requestOption)
    .then(response => response.json())

  location.reload();
}

function filterMethod(inputValue) {
  let inValFiltered = {}

  inValFiltered.productID = inputValue.productID

  if (inputValue.productName.length > 0) {
    inValFiltered.productName = inputValue.productName;
  }
  if (inputValue.productType.length > 0) {
    inValFiltered.productType = inputValue.productType;
  }
  if (inputValue.price.length > 0) {
    inValFiltered.price = inputValue.price;
  }
  return inValFiltered;
}
