class Player {
  constructor(name, id = getNextId(), scores = []) {
    this.name = name;
    this.id = id;
    this.scores = scores;
  }
}

courses = [
    {
      "id": 11819,
      "name": "Thanksgiving Point Golf Course - Lehi, UT",
      "url": "https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course11819.json"
    },
    {
      "id": 18300,
      "name": "Fox Hollow Golf Course - American Fork, UT",
      "url": "https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course18300.json"
    },
    {
      "id": 19002,
      "name": "Fox Hollow Golf Course - American Fork, UT",
      "url": "https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course19002.json"
    }
]

let courseOptionsHtml = '';
courses.forEach((course) => {
  courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
});

document.getElementById('course-select').innerHTML = courseOptionsHtml;


// function getAvailableGolfCourses() {
//   return fetch(
//     "https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/courses.json",
//   { mode: "no-cors", 
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Headers': '*'
//     }
//   }
//   ).then(function (response) {
//     return response.text();
//   })
//   .then((data) => {
//     return data ? JSON.parse(data) : {}
//   });
// }

// function getGolfCourseDetails(golfCourseId) {
//   return fetch(
//     `https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course${golfCourseId}.json`,
//     { mode: "no-cors" }
//   ).then(function (response) {
//     return response.text();
//   })
//   .then((data) => {
//     return data ? JSON.parse(data) : {}
//   });
// }


// function initSelectCourseDropdown(){
//   getAvailableGolfCourses().then(
//     coursesFromRequest => {
//       courses  = coursesFromRequest
//       renderSelectCoursesDropdown();
//     }
//   )
// }

// function renderSelectCoursesDropdown() {

  

//   console.log(courses)
// }

// initSelectCourseDropdown()

// let courses = [];

// let teeBoxSelectHtml = ''
// teeBoxes.forEach(function (teeBox, index) {
//    teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}, ${
//      teeBox.totalYards
//    } yards</option>`
// });

// document.getElementById('tee-box-select').innerHTML = teeBoxSelectHtml;

