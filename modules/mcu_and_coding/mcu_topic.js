const topics = [
  {
    image: "../images/microcontrollers.png",
    title: "Microcontrollers",
    content:
      "Meet the masterminds! Discover the tiny computers called microcontrollers that act as the 'brains' behind every smart robot.",
    route: "../modules/mcu_and_coding/microcontrollers.html",
  },
  {
    image: "../images/programming.png",
    title: "Programming",
    content:
      "Give your robot a voice! Learn the basics of programming – the secret language that tells robots exactly what to do, from visual blocks to real code.",
    route: "../modules/mcu_and_coding/programming.html",
  },
  {
    image: "../images/code_actions.png",
    title: "Code Actions",
    content:
      "Bring your robot to life in the virtual world! Discover how to write code that reads information from sensors and makes actuators move and react.",
    route: "../modules/mcu_and_coding/code_actions.html",
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
