const bookingId = document.getElementById("printBooking")
const printBookingBtn = document.querySelector(".printBookingButton");
printBookingBtn.addEventListener("click", fetchBookingId)

function fetchBookingId(){
  let url = `http://localhost:8080/booking/print/${bookingId.value}`;
  fetch(url, requestOption)
    .then(response => response.json())
    .then(data1 => printBooking(data1))
}

function printBooking(data1) {
  alert("***Printer billetter til***\n"
    + data1.customerName
    + "\nMovieId: " + data1.showId
    + "\nSal: " + data1.cinemaHallId
    + "\nSæde: " + data1.seatNum01
    + "\nSæde: " + data1.seatNum02
    + "\nSæde: " + data1.seatNum03
    + "\nSæde: " + data1.seatNum04
    + "\nSæde: " + data1.seatNum05)
}
