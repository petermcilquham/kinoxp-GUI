const in1 = document.getElementById("showID");
const in2 = document.getElementById("title");
const in3 = document.getElementById("cinemaHall");
const in4 = document.getElementById("date");
const in5 = document.getElementById("startTime");
const in6 = document.getElementById("duration");
const in7 = document.getElementById("genre");
const in8 = document.getElementById("ageReq");
const in9 = document.getElementById("stars");
// const in10 = document.getElementById("img");

const editShowBtn = document.querySelector(".editShowButton");
editShowBtn.onclick = function(){
  postFunction({
    "showId": `${in1.value}`,
    "movieTitle": `${in2.value}`,
    "cinemaHall": `${in3.value}`,
    "date": `${in4.value}`,
    "startTime": `${in5.value}:00`,
    "duration": `${in6.value}:00`,
    "genre": `${in7.value}`,
    "ageReq": `${in8.value}`,
    "stars": `${in9.value}`,
  });
}

function postFunction(inputValue){
  console.log(inputValue);

  const url = "http://localhost:8080/shows/edit";

  let requestBody = JSON.stringify(inputValue);

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
