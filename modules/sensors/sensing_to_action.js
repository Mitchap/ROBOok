const lessons = [
  {
    image: "../../images/sensors_in_sumobot.png",
    title: "Sensors in Sumobot",
    content:
      "RoboRumble! See how 'eyes' and 'feelers' help Sumobots locate rivals and stay inside the battle zone for victory!",
    route:
      "../../../../lessons/sensors/sensing_to_action/sensors_in_sumobot.html",
  },
  {
    image: "../../images/sensors_in_line_following.png",
    title: "Sensors in Line Following",
    content:
      "Stay on track! Discover how tiny sensors guide robots along a winding path with amazing precision.",
    route: "../../../../lessons/sensors/sensing_to_action/line_following.html",
  },
  {
    image: "../../images/sensors_for_mission_challenges.png",
    title: "Sensors for Mission Challenges",
    content:
      "Task masters! Explore how robots use a variety of sensors to 'see,' 'touch,' and 'know' objects to complete challenging missions.",
    route:
      "../../../../lessons/sensors/sensing_to_action/mission_challenges.html",
  },
  {
    image: "../../images/smart_sensor_choices.png",
    title: "Smart Sensor Choices",
    content:
      "More brains than brawn! Learn how combining different sensor inputs lets robots make clever decisions and react intelligently to their surroundings.",
    route: "../../../../lessons/sensors/sensing_to_action/smart_choices.html",
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
