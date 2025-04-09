const topics = [
  {
    image: "../images/understanding_robots.jpg",
    title: "Understanding Robots",
    content:
      "Dive into the exciting world of robots! Discover what they are, explore their amazing parts and how they work, and see the incredible things they do today and might do tomorrow!",
    route: "../topics/understanding_robots.html",
  },
  {
    image: "../images/sensors.jpg",
    title: "Sensors",
    content:
      "Robot Senses Activated! Learn how robots 'see,' 'hear,' and 'feel' their surroundings using different types of sensors – their crucial link to the real world.",
    route: "../topics/sensors.html",
  },
  {
    image: "../images/actuators.jpg",
    title: "Actuators",
    content:
      "Making Robots Move! Explore the muscles and motors that power robot motion, from spinning wheels to intricate robotic arms. See how they bring actions to life!",
    route: "../topics/actuators.html",
  },
  {
    image: "../images/mcu.jpg",
    title: "MCU & Coding",
    content:
      "Meet the Robot's Mind! Uncover the secrets of microcontrollers – the 'brains' of robots – and see how programming tells them what to do.",
    route: "../topics/mcu_and_coding.html",
  },
  {
    image: "../images/powersupply.jpg",
    title: "Power Supply",
    content:
      "Fueling the Future! Discover the different ways robots get their energy, from batteries to solar power, and why a reliable power source is essential for their tasks.",
    route: "../topics/power_supply.html",
  },
  {
    image: "../images/assembly.jpg",
    title: "Mechanical Assembly",
    content:
      "Building the Bots! Explore the materials and methods used to construct the physical body of a robot. Learn how design, CAD, and even 3D printing bring robot ideas into reality.",
    route: "../topics/mechanical_assembly.html",
  },
];

function returnCards(valuesCards) {
  return valuesCards
    .map(
      (valuesCard) => `
      <div class="col">
        <div class="card my-4 h-100">
          <img src="${valuesCard.image}" class="card-img-top img-fluid " alt="${valuesCard.title}" style="height: 250px; ";>
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

document.getElementById("topic-cards").innerHTML = returnCards(topics);
