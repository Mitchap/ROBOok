const lessons = [
  {
    image: "../../images/understanding_robots.jpg",
    title: "Input Devices",
    content:
      "Keyboards, remotes, joysticks, and even RFID scanners! Explore the different ways we can send commands and information into our robots.",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Output Devices – Visuals",
    content:
      " Lights, displays, and glowing patterns! Discover the cool ways robots can show us information using LEDs, screens, and matrices.",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Output Devices – Audio",
    content:
      "Beeps, boops, and even robot voices! Explore how buzzers and speakers allow robots to communicate with sound.",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Communication & Network",
    content:
      "Going wireless! Uncover how robots connect with each other and the wider world using Bluetooth, Wi-Fi, and even cellular networks.",
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
