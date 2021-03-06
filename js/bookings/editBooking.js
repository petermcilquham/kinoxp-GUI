const in1 = document.getElementById("bookingID");
const in2 = document.getElementById("name");
const in3 = document.getElementById("phoneNum");
const in4 = document.getElementById("showId");
const in5 = document.getElementById("seatNum01");
const in6 = document.getElementById("seatNum02");
const in7 = document.getElementById("seatNum03");
const in8 = document.getElementById("seatNum04");
const in9 = document.getElementById("seatNum05");

const editBookingBtn = document.querySelector(".editBookingButton");
editBookingBtn.onclick = function(){
  putFunction({
    "bookingId": `${in1.value}`,
    "customerName": `${in2.value}`,
    "customerMobileNumber": `${in3.value}`,
    "showId": `${in4.value}`,
    "seatNum01": `${in5.value}`,
    "seatNum02": `${in6.value}`,
    "seatNum03": `${in7.value}`,
    "seatNum04": `${in8.value}`,
    "seatNum05": `${in9.value}`,
  });
}

function putFunction(inputValue){
  const url = "http://localhost:8080/booking/edit";

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
}

function filterMethod(inputValue){
  let arr = Object.entries(inputValue)

  let spliceCount = arr.length
  for(const [key, value] of arr){
    if(value.length < 1){
      spliceCount--
    }
  }
  arr.splice(spliceCount)

  return Object.fromEntries(arr);
}
