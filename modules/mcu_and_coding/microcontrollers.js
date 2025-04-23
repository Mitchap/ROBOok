const lessons = [
  {
    image: "../../images/mcu_coding.jpg",
    title: "The Mighty Microchip",
    content:
      "Tiny chip, HUGE power! Discover the incredible microcontrollers that are the brains behind all the smartest robots and gadgets.",
    route:
      "../../../lessons/mcu_and_coding/microcontrollers/the_mighty_microchip.html",
  },
  {
    image: "../../../images/mcu_family_cover.png",
    title: "Meet the MCU Family",
    content:
      "It takes a village of brains! Meet the diverse family of microcontrollers powering robots big and small, from Arduinos to ESP32s.",
    route: "../../../lessons/mcu_and_coding/microcontrollers/mcu_family.html",
  },
  {
    image: "../../../images/arduino_uno.png",
    title: "The Arduino Board",
    content:
      "Unlocking the Uno! Take a tour inside the popular Arduino Uno and learn what all those pins and parts actually do.",
    route:
      "../../../lessons/mcu_and_coding/microcontrollers/arduino_board.html",
  },
  {
    image: "../../../images/simulating_with_tinkercad.png",
    title: "Simulating with Tinkercad",
    content:
      "Build it virtually first! Discover how Tinkercad lets you experiment with Arduino circuits and code without needing physical parts, and how your virtual code works with the real Arduino!",
    route:
      "../../../lessons/mcu_and_coding/microcontrollers/simulating_with_tinkercad.html",
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
