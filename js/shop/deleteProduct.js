const inputProductID = document.getElementById("deleteProduct");
const deleteProductBtn = document.querySelector(".deleteProductButton")

deleteProductBtn.onclick = function(){
  deleteFunction(`http://localhost:8080/products/delete/${inputProductID.value}`);
  location.reload();
}

function deleteFunction(url){
  console.log(url)
  console.log(inputProductID.value)
  const requestOption = {
    headers: {
      "Content-type": 'application/json'
    },
    method: 'GET',
    redirect: 'follow'
  };

  fetch(url, requestOption)
    .then(response => response.json())


}
