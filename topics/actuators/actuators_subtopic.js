const subTopics = [
  {
    image: "../images/actuators.jpg",
    title: "Robot Motion",
    content:
      "Unleash the power! Discover the 'muscles' and mechanisms that give robots the ability to move, grab, and interact with the world around them.",
    route: "../topics/actuators/robot_motion.html",
  },
  {
    image: "../images/actuators.jpg",
    title: "Actuator Types",
    content:
      "Meet the movers and shakers! Explore the amazing variety of electric motors, powerful fluid systems, and specialized mechanisms that power robot actions.",
    route: "../topics/actuators/actuator_types.html",
  },
  {
    image: "../images/actuators.jpg",
    title: "Actuators in Action",
    content:
      "From pushing rivals to following lines and tackling missions! See how different actuators are used to give robots the 'oomph' they need to conquer challenges.",
    route: "../topics/actuators/actuators_in_action.html",
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

document.getElementById("subTopic-cards").innerHTML = returnCards(subTopics);
