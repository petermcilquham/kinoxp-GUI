const in1 = document.getElementById("name");
const in2 = document.getElementById("phoneNum");
const in3 = document.getElementById("showId");
const in4 = document.getElementById("cinemaHall");
const in5 = document.getElementById("seatNum01");
const in6 = document.getElementById("seatNum02");
const in7 = document.getElementById("seatNum03");
const in8 = document.getElementById("seatNum04");
const in9 = document.getElementById("seatNum05");

const createBookingBtn = document.querySelector(".createBookingButton");
createBookingBtn.onclick = function(){
  postFunction({
    "customerName": `${in1.value}`,
    "customerMobileNumber": `${in2.value}`,
    "showId": `${in3.value}`,
    "cinemaHallId": `${in4.value}`,
    "seatNum01": `${in5.value}`,
    "seatNum02": `${in6.value}`,
    "seatNum03": `${in7.value}`,
    "seatNum04": `${in8.value}`,
    "seatNum05": `${in9.value}`
  });
}

function postFunction(inputValue){
  const url = "http://localhost:8080/booking/create";

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

  location.reload();
}
