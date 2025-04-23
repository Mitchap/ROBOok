const lessons = [
  {
    image: "../../images/input_devices.png",
    title: "Input Devices",
    content:
      "Keyboards, remotes, joysticks, and even RFID scanners! Explore the different ways we can send commands and information into our robots.",
    route:
      "../../../lessons/understanding_robots/robot_components/input_devices.html",
  },
  {
    image: "../../images/output_devices_visuals.png",
    title: "Output Devices – Visuals",
    content:
      " Lights, displays, and glowing patterns! Discover the cool ways robots can show us information using LEDs, screens, and matrices.",
    route:
      "../../../lessons/understanding_robots/robot_components/output_devices_visuals.html",
  },
  {
    image: "../../images/output_devices_audio.png",
    title: "Output Devices – Audio",
    content:
      "Beeps, boops, and even robot voices! Explore how buzzers and speakers allow robots to communicate with sound.",
    route:
      "../../../lessons/understanding_robots/robot_components/output_devices_audio.html",
  },
  {
    image: "../../images/communication_and_network.png",
    title: "Communication & Network",
    content:
      "Going wireless! Uncover how robots connect with each other and the wider world using Bluetooth, Wi-Fi, and even cellular networks.",
    route:
      "../../../lessons/understanding_robots/robot_components/communication_and_network.html",
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
