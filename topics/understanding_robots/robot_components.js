const lessons = [
  {
    image: "../../images/understanding_robots.jpg",
    title: "Lesson 1: Input Devices",
    content:
      "Keyboards, remotes, joysticks, and even RFID scanners! Explore the different ways we can send commands and information into our robots.",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Lesson 2: Output Devices – Visuals",
    content:
      " Lights, displays, and glowing patterns! Discover the cool ways robots can show us information using LEDs, screens, and matrices.",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Lesson 3: Output Devices – Audio",
    content:
      "Beeps, boops, and even robot voices! Explore how buzzers and speakers allow robots to communicate with sound.",
    route: "#",
  },
  {
    image: "../../images/understanding_robots.jpg",
    title: "Lesson 4: Communication & Network",
    content:
      "Going wireless! Uncover how robots connect with each other and the wider world using Bluetooth, Wi-Fi, and even cellular networks.",
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
