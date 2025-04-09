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

document.getElementById("subTopic-cards").innerHTML = returnCards(lessons);
