const lessons = [
  {
    image: "../../images/seeing_with_sound.png",
    title: "Seeing with Sound",
    content:
      "Like a bat in the night! Uncover how ultrasonic sensors use echoes to 'see' distance and help robots navigate without bumping into things.",
    route: "../topics/sensors/ultrasonic.html",
  },
  {
    image: "../../images/sensing_light_color.png",
    title: "Sensing Light & Color",
    content:
      "From detecting day and night to sorting colorful blocks! Explore how light sensors, including those that see in color, give robots 'eyes' for their environment.",
    route: "../topics/sensors/light_color.html",
  },
  {
    image: "../../images/the_power_of_robot_touch.png",
    title: "The Power of Robot Touch",
    content:
      "More than just a tap! Discover how robots use touch sensors to feel their way, grip objects gently, and even know when they've bumped into something.",
    route: "../topics/sensors/touch.html",
  },
  {
    image: "../../images/motion_balance_masters.png",
    title: "Motion & Balance Masters",
    content:
      "Tilt, shake, and roll! Learn how accelerometers and gyroscopes help robots sense movement and keep their balance, just like the inner ear!",
    route: "../topics/sensors/motion_balance.html",
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
