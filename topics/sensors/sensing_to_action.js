const lessons = [
  {
    image: "../../images/sensors.jpg",
    title: "Sensors in Sumobot",
    content:
      "RoboRumble! See how 'eyes' and 'feelers' help Sumobots locate rivals and stay inside the battle zone for victory!",
    route: "../topics/sensors/sumobot.html",
  },
  {
    image: "../../images/sensors.jpg",
    title: "Sensors in Line Following",
    content:
      "Stay on track! Discover how tiny sensors guide robots along a winding path with amazing precision.",
    route: "../topics/sensors/line_following.html",
  },
  {
    image: "../../images/sensors.jpg",
    title: "Sensors for Mission Challenges",
    content:
      "Task masters! Explore how robots use a variety of sensors to 'see,' 'touch,' and 'know' objects to complete challenging missions.",
    route: "../topics/sensors/mission_challenges.html",
  },
  {
    image: "../../images/sensors.jpg",
    title: "Smart Sensor Choices",
    content:
      "More brains than brawn! Learn how combining different sensor inputs lets robots make clever decisions and react intelligently to their surroundings.",
    route: "../topics/sensors/smart_choices.html",
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
