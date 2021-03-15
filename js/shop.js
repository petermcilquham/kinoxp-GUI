const url = "http://localhost:8080/findAllProducts";

const requestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'POST',
  redirect: 'follow'
};

fetch(url, requestOption)
  .then(response => response.json())
  .then(data => console.log(data));
