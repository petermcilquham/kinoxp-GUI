const url = "http://localhost:8080/workShifts";

const requestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'GET',
  redirect: 'follow'
};

fetch(url, requestOption)
  .then(response => response.json())
  .then(data => gotData(data))

function gotData(data){
  data.forEach(addToArray);
}

function addToArray(data){
  let title = "ID: " + data.workerId + '\n' + "Vagt: " + data.startTime.slice(0,5) + " - " + data.endTime.slice(0,5)
  let temp = new Date(data.date);
  let date = temp.toISOString().slice(0, 10);

  $('#calendar').fullCalendar('renderEvent', {
    title: title,
    start: date,
    textColor: "white",
    allDay: true,
  }, true);
}

let currentTime = new Date();
$(document).ready(function() {

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay',
    },
    defaultDate: `${currentTime}`,
    navLinks: true,
    editable: true,
    eventLimit: true,
    events: [
    ]
  });
});
