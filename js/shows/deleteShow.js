const inputDelID = document.getElementById("show");
const deleteShowBtn = document.querySelector(".deleteShow")

deleteShowBtn.onclick = function(){
  deleteFunction(`http://localhost:8080/shows/delete/${inputDelID.value}`);
}

function deleteFunction(url){
  const requestOption = {
    headers: {
      "Content-type": 'application/json'
    },
    method: 'DELETE',
    redirect: 'follow'
  };

  fetch(url, requestOption)
    .then(response => response.json())
}
