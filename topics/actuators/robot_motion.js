const lessons = [
  {
    image: "../../images/actuators.jpg",
    title: "Actuation Power",
    content:
      "Muscles for robots! Discover what makes them move, grab, and groove – it's all about these action heroes!",
    route: "../topics/actuators/power.html",
  },
  {
    image: "../../images/actuators.jpg",
    title: "DC Motors Spin",
    content:
      "Fast and furious! Explore the world of DC motors, from speedy wheels to powerful gears that give robots their drive.",
    route: "../topics/actuators/dc_motors.html",
  },
  {
    image: "../../images/actuators.jpg",
    title: "Servo Steps",
    content:
      "Move with precision! See how servo and stepper motors give robots super-accurate control for delicate tasks.",
    route: "../topics/actuators/servo.html",
  },
  {
    image: "../../images/actuators.jpg",
    title: "More Than Wheels",
    content:
      "Not just rolling around! Discover the cool ways robots use pumps, air, and even liquid power to move and do amazing things.",
    route: "../topics/actuators/more_than_wheels.html",
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
