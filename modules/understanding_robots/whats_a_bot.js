const lessons = [
  {
    image: "../../images/robot_defined.png",
    title: "Robot Defined",
    content:
      "Think robots are just like in movies? Get ready to have your mind blown as we uncover the real meaning of what makes a machine a robot!",
    route: "#",
  },
  {
    image: "../../images/bot_history.png",
    title: "Bot History",
    content:
      "From ancient inventions to the first electronic brains – take a quick and surprising trip through the amazing history that led to today's robots!",
    route: "#",
  },
  {
    image: "../../images/robot_types.png",
    title: "Robot Types",
    content:
      "Meet the robot family! From factory workers to space explorers, discover the incredible variety of bots and what unique jobs they do.",
    route: "#",
  },
  {
    image: "../../images/sci_fi_ethics.png",
    title: "Sci-Fi & Ethics",
    content:
      "Cool robots in movies vs. real life science! And as robots get smarter, what's right and wrong? Let's explore!",
    route: "#",
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
