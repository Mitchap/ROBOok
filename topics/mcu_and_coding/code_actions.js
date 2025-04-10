const lessons = [
  {
    image: "../../images/programming.jpg",
    title: "Coding Digitals",
    content:
      "Virtual on or off! Code your simulated robot to react to digital inputs from the virtual world.",
    route: "../topics/programming/coding_digitals.html",
  },
  {
    image: "../../images/programming.jpg",
    title: "Coding Analogs",
    content:
      "Simulated shades of gray! Code your virtual robot to respond to a range of analog sensor values in the virtual environment.",
    route: "../topics/programming/coding_analogs.html",
  },
  {
    image: "../../images/programming.jpg",
    title: "Coding Actuators",
    content:
      "Simulated shades of gray! Code your virtual robot to respond to a range of analog sensor values in the virtual environment.",
    route: "../topics/programming/coding_actuators.html",
  },
  {
    image: "../../images/programming.jpg",
    title: "Coding with Libraries",
    content:
      "Unlock virtual superpowers! See how libraries can add pre-built functions to your simulated robot projects in Tinkercad.",
    route: "../topics/programming/coding_with_libraries.html",
  },
];

function returnCards(valuesCards) {
  return valuesCards
    .map(
      (valuesCard) => `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card my-2 h-100 shadow-sm custom-card">
          <div class="custom-img-wrapper">
            <img src="${valuesCard.image}" class="card-img-top custom-img" alt="${valuesCard.title}">
          </div>
          <div class="card-body custom-body">
            <h3 class="card-title custom-title">${valuesCard.title}</h3>
            <p class="card-text custom-text">${valuesCard.content}</p>
          </div>
          <div class="px-3 pb-3">
            <a href="${valuesCard.route}" class="btn btn-primary w-100 custom-btn">VIEW</a>
          </div>
        </div>
      </div>`
    )
    .join("");
}

document.getElementById("subTopic-cards").innerHTML = returnCards(lessons);
