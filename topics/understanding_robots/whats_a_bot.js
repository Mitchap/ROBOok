const lessons = [
  {
    image: "../../images/understanding_robots.jpg",
    title: "Lesson 1: Robot Defined",
    content:
      "Ever wondered what really makes a robot a robot? We'll explore the cool science and surprising history behind these amazing machines!",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Lesson 2: Bot History",
    content:
      "Ever wondered what really makes a robot a robot? We'll explore the cool science and surprising history behind these amazing machines!",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Lesson 3: Robot Types",
    content:
      "Ever wondered what really makes a robot a robot? We'll explore the cool science and surprising history behind these amazing machines!",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Lesson 4: Sci-Fi & Ethics",
    content:
      "Ever wondered what really makes a robot a robot? We'll explore the cool science and surprising history behind these amazing machines!",
    route: "#",
  },
];

function returnCards(valuesCards) {
  return valuesCards
    .map(
      (valuesCard) => `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card my-2 h-100 shadow-sm custom-card">
          <img src="${valuesCard.image}" class="card-img-top custom-img" alt="${valuesCard.title}">
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
