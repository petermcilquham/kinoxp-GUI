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
  putFunction({
    "showId": `${in1.value}`,
    "movieTitle": `${in2.value}`,
    "cinemaHall": `${in3.value}`,
    "date": `${in4.value}`,
    "startTime": `${in5.value}`,
    "duration": `${in6.value}`,
    "genre": `${in7.value}`,
    "ageReq": `${in8.value}`,
    "stars": `${in9.value}`,
    //"movieImg": `${in10.value}`
  });
}

function putFunction(inputValue){
  const url = "http://localhost:8080/shows/edit";

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



