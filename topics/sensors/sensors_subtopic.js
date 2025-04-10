const subTopics = [
  {
    image: "../images/sensors.jpg",
    title: "Sense Input",
    content:
      "How do robots 'see,' 'hear,' 'touch,' and even 'smell' their world? Discover the amazing input devices that give robots their senses!",
    route: "../topics/sensors/sense_input.html",
  },
  {
    image: "../images/sensors.jpg",
    title: "Sensor Types",
    content:
      "Time to get technical! Peek inside some of the coolest robot sensors and discover the clever ways they 'see,' 'measure,' and 'feel' the world around them.",
    route: "../topics/sensors/sensor_types.html",
  },
  {
    image: "../images/sensors.jpg",
    title: "Sensing to Action",
    content:
      "From 'seeing' the world to actually doing something about it! Discover how robots use sensor information to make decisions and take action – the key to their smart moves!",
    route: "../topics/sensors/sensing_to_action.html",
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

document.getElementById("subTopic-cards").innerHTML = returnCards(subTopics);
