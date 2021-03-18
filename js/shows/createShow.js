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
    "startTime": `${in4.value}`,
    "duration": `${in5.value}`,
    "genre": `${in6.value}`,
    "ageReq": `${in7.value}`,
    "stars": `${in8.value}`,
  });
}

function postFunction(inputValue){
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

// async function postFormDataAsJson({url, formData}){
//   const plainFormData = Object.fromEntries(formData.entries());
//   const formDataJsonString = JSON.stringify(plainFormData);
//
//   const fetchOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: formDataJsonString,
//   };
//
//   const response = await fetch(url, fetchOptions);
//
//   if (!response.ok) {
//     const errorMessage = await response.text();
//     throw new Error(errorMessage);
//   }
//
//   return response.json();
// }
//
// async function handleFormSubmit(event) {
//   event.preventDefault();
//
//   let form = event.currentTarget;
//   const url = form.action;
//   console.log(url)
//   console.log(form)
//
//   try {
//     const formData = new FormData(form);
//     const responseData = await postFormDataAsJson({ url, formData });
//
//     console.log({ responseData });
//   } catch (error) {
//     console.error(error);
//   }
// }
//
// const createShowForm = document.getElementById("createShow-Form");
// createShowForm.addEventListener("submit", handleFormSubmit);
