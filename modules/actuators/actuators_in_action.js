const lessons = [
  {
    image: "../../images/actuators.jpg",
    title: "Sumo Power",
    content:
      "Push 'em out! See the mighty motors and drives that give Sumobots the force to conquer their rivals.",
    route: "../../../lessons/actuators/actuators_in_action/sumo_power.html",
  },
  {
    image: "../../images/actuators.jpg",
    title: "Line Speed",
    content:
      "Zoom along the line! Learn how motors work with sensors to keep robots perfectly on track.",
    route: "../../../lessons/actuators/actuators_in_action/line_speed.html",
  },
  {
    image: "../../images/actuators.jpg",
    title: "Mission Actions",
    content:
      "Task accomplished! Discover how robots use different actuators to master challenges and get the job done.",
    route:
      "../../../lessons/actuators/actuators_in_action/mission_actions.html",
  },
  {
    image: "../../images/actuators.jpg",
    title: "Robot Arms",
    content:
      "Working together! See how robots control many 'muscles' at once to create smooth and complex movements, like a robotic arm.",
    route: "../../../lessons/actuators/actuators_in_action/robot_arms.html",
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
