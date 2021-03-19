const in1 = document.getElementById("productTypeSelect");
const in2 = document.getElementById("productName");
const in3 = document.getElementById("productPrice");

const createProductBtn = document.querySelector(".createProductButton");
createProductBtn.onclick = function(){
  postFunction({
    "productType": `${in1.value}`,
    "productName": `${in2.value}`,
    "price": `${in3.value}`,
  });
}

function postFunction(inputValue){
  console.log(inputValue)
  const url = "http://localhost:8080/products/create";

  let requestBody = JSON.stringify(inputValue);

  const requestOption = {
    headers: {
      "Content-type": 'application/json'
    },
    method: 'POST',
    redirect: 'follow',
    body: requestBody
  };

  fetch(url, requestOption)
    .then(response => response.json())
}
