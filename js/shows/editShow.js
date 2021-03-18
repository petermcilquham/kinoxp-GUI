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
    "startTime": `${in5.value}`,
    "duration": `${in6.value}`,
    "genre": `${in7.value}`,
    "ageReq": `${in8.value}`,
    "stars": `${in9.value}`,
  });
}

function postFunction(inputValue){
  const url = "http://localhost:8080/shows/edit";

  // let inValFiltered = {}
  // inValFiltered.showId = inputValue.showId
  // if(inputValue.movieTitle.length > 0){
  //   inValFiltered.movieTitle = inputValue.movieTitle;
  // }
  // if(inputValue.cinemaHall.length > 0){
  //   inValFiltered.cinemaHall = inputValue.cinemaHall;
  // }
  // if(inputValue.date.length > 0){
  //   inValFiltered.date = inputValue.date;
  // }
  // if(inputValue.startTime.length > 0){
  //   inValFiltered.startTime = inputValue.startTime;
  // }
  // if(inputValue.duration.length > 0){
  //   inValFiltered.duration = inputValue.duration;
  // }
  // if(inputValue.genre.length > 0){
  //   inValFiltered.genre = inputValue.genre;
  // }
  // if(inputValue.ageReq.length > 0){
  //   inValFiltered.ageReq = inputValue.ageReq;
  // }
  // if(inputValue.stars.length > 0){
  //   inValFiltered.stars = inputValue.stars;
  // }

  //let requestBody = JSON.stringify(inValFiltered);
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



