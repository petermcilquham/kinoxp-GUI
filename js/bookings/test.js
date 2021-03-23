const url = "http://localhost:8080/bookings/seats";

const requestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'GET',
  redirect: 'follow'
};

fetch(url, requestOption)
  .then(response => response.json())
  .then(data => compare(data));

function compare(data){
  let str
  let elements = document.querySelectorAll('.seat');
  for(let i = 0; i < elements.length; i++){
    str = elements[i].innerHTML;
    for(const value of data){
      if(value == str){
        console.log(value)
        elements[i].classList.remove("free")
        elements[i].classList.add("booked")
        break
      } else {
        elements[i].classList.add("free")
      }
    }
  }

  let freeSeats = document.querySelectorAll('.free');
  for(let i = 0; i < freeSeats.length; i++){
    freeSeats[i].style.backgroundColor = "green"
  }
  let takenSeats = document.querySelectorAll('.booked');
  for(let i = 0; i < takenSeats.length; i++){
    takenSeats[i].style.backgroundColor = "red"
  }
}


