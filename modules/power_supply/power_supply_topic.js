const topics = [
  {
    image: "../images/robot_power_needs.png",
    title: "Robot Power Needs",
    content:
      "Before plugging in, let's understand the fundamental language and needs of robot power.",
    route: "../modules/power_supply/robot_power_needs.html",
  },
  {
    image: "../images/types_of_power_sources.png",
    title: "Types of Power Sources",
    content:
      "From batteries to the sun, explore the diverse ways robots get their juice!",
    route: "../modules/power_supply/types_of_power_sources.html",
  },
  {
    image: "../images/managing_robot_power.png",
    title: "Managing Robot Power",
    content:
      "Making smart power choices for peak robot performance and safety!",
    route: "../modules/power_supply/managing_robot_power.html",
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
