const subTopics = [
  {
    image: "../images/understanding_robots.jpg",
    title: "1. What's a bot?",
    content:
      "Ever wondered what really makes a robot a robot? We'll explore the cool science and surprising history behind these amazing machines!",
    route: "../topics/understanding_robots/whats_a_bot.html",
  },
  {
    image: "../images/understanding_robots.jpg",
    title: "2. Robot Components",
    content:
      "Beyond the 'brain' and 'muscles'! Discover the fascinating array of parts that allow robots to sense commands, show information, and connect with the world around them.",
    route: "../topics/understanding_robots/robot_components.html",
  },
  {
    image: "../images/understanding_robots.jpg",
    title: "3. Now & Next",
    content:
      "Beyond the 'brain' and 'muscles'! Discover the fascinating array of parts that allow robots to sense commands, show information, and connect with the world around them.",
    route: "../topics/understanding_robots/now_and_next.html",
  },
];

function returnCards(valuesCards) {
  return valuesCards
    .map(
      (valuesCard) => `
      <div class="col">
        <div class="card my-4 h-100">
          <img src="${valuesCard.image}" class="card-img-top" alt="${valuesCard.title}">
          <div class="card-body">
            <h3 class="card-title">${valuesCard.title}</h3>
            <p class="card-text">${valuesCard.content}</p>
          </div>
          <div class="ms-4 mb-5">
            <a href="${valuesCard.route}" class="btn btn-primary px-4">VIEW</a>
          </div>
        </div>
      </div>`
    )
    .join("");
}

document.getElementById("subTopic-cards").innerHTML = returnCards(subTopics);
