const topics = [
  {
    image: "../images/sense_input.png",
    title: "Sense Input",
    content:
      "How do robots 'see,' 'hear,' 'touch,' and even 'smell' their world? Discover the amazing input devices that give robots their senses!",
    route: "../modules/sensors/sense_input.html",
  },
  {
    image: "../images/sensor_types.png",
    title: "Sensor Types",
    content:
      "Time to get technical! Peek inside some of the coolest robot sensors and discover the clever ways they 'see,' 'measure,' and 'feel' the world around them.",
    route: "../modules/sensors/sensor_types.html",
  },
  {
    image: "../images/sensing_to_action.png",
    title: "Sensing to Action",
    content:
      "From 'seeing' the world to actually doing something about it! Discover how robots use sensor information to make decisions and take action – the key to their smart moves!",
    route: "../modules/sensors/sensing_to_action.html",
  },
];

function returnCards(valuesCards) {
  return valuesCards
    .map(
      (valuesCard) => `
      <div class="col-6 col-md-4">
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

document.getElementById("subTopic-cards").innerHTML = returnCards(topics);

window.onload = () => {
  window.scrollTo(0, 0);
};
