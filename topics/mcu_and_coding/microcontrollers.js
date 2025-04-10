const lessons = [
  {
    image: "../../images/programming.jpg",
    title: "The Mighty Microchip",
    content:
      "Tiny chip, HUGE power! Discover the incredible microcontrollers that are the brains behind all the smartest robots and gadgets.",
    route: "../topics/microcontrollers/mighty_microchip.html",
  },
  {
    image: "../../images/programming.jpg",
    title: "Meet the MCU Family",
    content:
      "It takes a village of brains! Meet the diverse family of microcontrollers powering robots big and small, from Arduinos to ESP32s.",
    route: "../topics/microcontrollers/mcu_family.html",
  },
  {
    image: "../../images/programming.jpg",
    title: "The Arduino Board",
    content:
      "Unlocking the Uno! Take a tour inside the popular Arduino Uno and learn what all those pins and parts actually do.",
    route: "../topics/microcontrollers/arduino_board.html",
  },
  {
    image: "../../images/programming.jpg",
    title: "Simulating with Tinkercad",
    content:
      "Build it virtually first! Discover how Tinkercad lets you experiment with Arduino circuits and code without needing physical parts, and how your virtual code works with the real Arduino!",
    route: "../topics/microcontrollers/simulating_tinkercad.html",
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
