class Player {
  constructor(name, id = getNextId(), scores = []) {
    this.name = name;
    this.id = id;
    this.scores = scores;
  }
}

fetch("https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/courses.json")
  .then((response) => {
    console.log('resolved', response);
    return response.json();
  }).then(courses => {
    console.log(courses);

    let courseOptionsHtml = '';
    courses.forEach((course) => {
      courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
    });

    document.getElementById('course-select').innerHTML = courseOptionsHtml; 

  }).catch((err) => {
    console.log('rejected', err);
  });

  fetch(
    'https://exquisite-pastelito-9d4dd1.netlif.app/golfapi/course${courseid}.json')
    .then((response) => {
      console.log("resolved", response);
      return response.json();
  }).then(teeBoxes => {
    console.log(teeBoxes);

    let teeBoxSelectHtml = ''
    teeBoxes.forEach(function (teeBox, index) {
      teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}, ${teeBox.totalYards} yards</option>`
    });

    document.getElementById('tee-box-select').innerHTML = teeBoxSelectHtml;

  }).catch((err) => {
    console.log('rejected', err);
  })
  
function addlist() {
  
}