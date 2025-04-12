const lessons = [
  {
    image: "../../images/understanding_robots.jpg",
    title: "Robots Today",
    content:
      "See amazing robots in action right now! From factories to hospitals and even exploring space, discover the real-world heroes of today.",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Winning Robots",
    content:
      "Discover the exciting world of robotics competitions and the incredible robots that rise to the top! See what it takes to design a champion bot.",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Future Bots",
    content:
      "Get a sneak peek into the future! Explore the mind-blowing technologies and possibilities that tomorrow's robots might bring.",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "IoT, AI & Machine Learning",
    content:
      "Want to know how robots are becoming truly intelligent? We'll explore the amazing worlds of connected devices (IoT), robot 'thinking' (AI), and how robots learn from data (ML)!",
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
