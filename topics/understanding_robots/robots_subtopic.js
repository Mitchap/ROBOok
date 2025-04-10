const subTopics = [
  {
    image: "../images/understanding_robots.jpg",
    title: "What's a Bot?",
    content:
      "Ever wondered what really makes a robot a robot? We'll explore the cool science and surprising history behind these amazing machines!",
    route: "../topics/understanding_robots/whats_a_bot.html",
  },
  {
    image: "../images/understanding_robots.jpg",
    title: "Robot Components",
    content:
      "Beyond the 'brain' and 'muscles'! Discover the fascinating array of parts that allow robots to sense commands, show information, and connect with the world around them.",
    route: "../topics/understanding_robots/robot_components.html",
  },
  {
    image: "../images/understanding_robots.jpg",
    title: "Now & Next",
    content:
      "Beyond the 'brain' and 'muscles'! Discover the fascinating array of parts that allow robots to sense commands, show information, and connect with the world around them.",
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

document.getElementById("subTopic-cards").innerHTML = returnCards(subTopics);
