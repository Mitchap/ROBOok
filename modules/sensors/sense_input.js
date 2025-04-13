const lessons = [
  {
    image: "../../images/why_sensors_matter.png",
    title: "Why Sensors Matter",
    content:
      "Ever wonder how robots can navigate, react, and even 'understand' their world? Discover why sensors are the must-have tools for any smart robot!",
    route: "../../../../lessons/sensors/sense_input/why_sensors_matter.html",
  },
  {
    image: "../../images/human_vs_bot_senses.png",
    title: "Human vs. Bot Senses",
    content:
      "From your eyes to a robot's camera! Explore the cool similarities (and some surprising differences) between how we sense the world and how robots do it.",
    route: "../topics/understanding_robots/robot_components.html",
  },
  {
    image: "../../images/sensor_signals.png",
    title: "Sensor Signals",
    content:
      "Secret messages from the environment! Uncover how sensors detect changes and send tiny signals that a robot's brain can understand and use.",
    route: "../topics/understanding_robots/now_and_next.html",
  },
  {
    image: "../../images/explore_sensors.png",
    title: "Explore Sensors",
    content:
      "Robots can 'see,' 'touch,' 'smell,' 'feel' movement, and more! Discover the amazing variety of sensors that give robots their diverse abilities.",
    route: "../topics/understanding_robots/now_and_next.html",
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

window.onload = () => {
  window.scrollTo(0, 0);
};
