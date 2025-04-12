const topics = [
  {
    image: "../images/robot_motion.png",
    title: "Robot Motion",
    content:
      "Unleash the power! Discover the 'muscles' and mechanisms that give robots the ability to move, grab, and interact with the world around them.",
    route: "../modules/actuators/robot_motion.html",
  },
  {
    image: "../images/actuator_types.png",
    title: "Actuator Types",
    content:
      "Meet the movers and shakers! Explore the amazing variety of electric motors, powerful fluid systems, and specialized mechanisms that power robot actions.",
    route: "../modules/actuators/actuator_types.html",
  },
  {
    image: "../images/actuators_in_action.png",
    title: "Actuators in Action",
    content:
      "From pushing rivals to following lines and tackling missions! See how different actuators are used to give robots the 'oomph' they need to conquer challenges.",
    route: "../modules/actuators/actuators_in_action.html",
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

document.getElementById("subTopic-cards").innerHTML = returnCards(topics);

window.onload = () => {
  window.scrollTo(0, 0);
};
