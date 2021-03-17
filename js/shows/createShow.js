const in1 = document.getElementById("title");
const in2 = document.getElementById("cinemaHall");
const in3 = document.getElementById("date");
const in4 = document.getElementById("startTime");
const in5 = document.getElementById("duration");
const in6 = document.getElementById("genre");
const in7 = document.getElementById("ageReq");
const in8 = document.getElementById("stars");
// const in9 = document.getElementById("img");

const createShowBtn = document.querySelector(".createShowButton");
createShowBtn.onclick = function(){
  postFunction({
    "movieTitle": `${in1.value}`,
    "cinemaHall": `${in2.value}`,
    "date": `${in3.value}`,
    "startTime": `${in4.value}:00`,
    "duration": `${in5.value}:00`,
    "genre": `${in6.value}`,
    "ageReq": `${in7.value}`,
    "stars": `${in8.value}`,
  });
}

function postFunction(inputValue){
  console.log(inputValue);

  const url = "http://localhost:8080/shows/create";

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
