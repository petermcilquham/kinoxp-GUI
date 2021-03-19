const inputID = document.getElementById("deleteBooking");
const deleteBookingBtn = document.querySelector(".deleteBookingButton")

deleteBookingBtn.onclick = function(){
  deleteFunction(`http://localhost:8080/booking/delete/${inputID.value}`);
}

function deleteFunction(url){
  const requestOption = {
    headers: {
      "Content-type": 'application/json'
    },
    method: 'GET',
    redirect: 'follow'
  };

  fetch(url, requestOption)
    .then(response => response.json())
  location.reload()
}
