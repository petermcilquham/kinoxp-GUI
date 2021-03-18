const in1 = document.getElementById("bookingID");
const in2 = document.getElementById("name");
const in3 = document.getElementById("phoneNum");
const in4 = document.getElementById("showId");
const in5 = document.getElementById("cinemaHall");
const in6 = document.getElementById("seatNum01");
const in7 = document.getElementById("seatNum02");
const in8 = document.getElementById("seatNum03");
const in9 = document.getElementById("seatNum04");
const in10 = document.getElementById("seatNum05");

const editBookingBtn = document.querySelector(".editBookingButton");
editBookingBtn.onclick = function(){
  postFunction({
    "bookingId": `${in1.value}`,
    "customerName": `${in2.value}`,
    "customerMobileNumber": `${in3.value}`,
    "showId": `${in4.value}`,
    "cinemaHallId": `${in5.value}`,
    "seatNum01": `${in6.value}`,
    "seatNum02": `${in7.value}`,
    "seatNum03": `${in8.value}`,
    "seatNum04": `${in9.value}`,
    "seatNum05": `${in10.value}`,
  });
}

function postFunction(inputValue){
  const url = "http://localhost:8080/booking/edit";

  let requestBody = JSON.stringify(inputValue);

  console.log(requestBody)

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
}