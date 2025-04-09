const lessons = [
  {
    image: "../../images/understanding_robots.jpg",
    title: "Lesson 1: Robots Today",
    content:
      "See amazing robots in action right now! From factories to hospitals and even exploring space, discover the real-world heroes of today.",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Lesson 2: Winning Robots",
    content:
      "Discover the exciting world of robotics competitions and the incredible robots that rise to the top! See what it takes to design a champion bot.",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Lesson 3:  Future Bots",
    content:
      "Get a sneak peek into the future! Explore the mind-blowing technologies and possibilities that tomorrow's robots might bring.",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Lesson 4: IoT, AI & Machine Learning",
    content:
      "Want to know how robots are becoming truly intelligent? We'll explore the amazing worlds of connected devices (IoT), robot 'thinking' (AI), and how robots learn from data (ML)!",
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
