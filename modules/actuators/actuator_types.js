const lessons = [
  {
    image: "../../images/actuators.jpg",
    title: "DC Motor Secrets",
    content:
      "Unlock the inner workings of DC motors! Learn about speed, strength (torque), and how to make them do exactly what you want.",
    route: "../modules/actuators/dc_motor_secrets.html",
  },
  {
    image: "../../images/actuators.jpg",
    title: "Precision Motors",
    content:
      "Accuracy experts! Dive deeper into servo and stepper motors and see where their pinpoint control really shines.",
    route: "../modules/actuators/precision_motors.html",
  },
  {
    image: "../../images/actuators.jpg",
    title: "Fluid Force",
    content:
      "Power up with air and liquid! Discover how pneumatics and hydraulics give robots the muscle for super-strong actions.",
    route: "../modules/actuators/fluid_force.html",
  },
  {
    image: "../../images/actuators.jpg",
    title: "Robot Grippers",
    content:
      "Grab and go! Explore the different hands robots use and the clever ways they hold and move objects.",
    route: "../modules/actuators/robot_grippers.html",
  },
];

function returnCards(valuesCards) {
  return valuesCards
    .map(
      (valuesCard) => `
      <div class="col-6 col-md-4">
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

window.onload = () => {
  window.scrollTo(0, 0);
};
