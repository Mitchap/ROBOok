const lessons = [
  {
    image: "../../images/powersupply.jpg",
    title: "The Robot's Fuel Tank",
    content:
      "Just like us, robots need energy to live! Discover why power is the lifeblood of every robotic action.",
    route:
      "../../../lessons/power_supply/robot_power_needs/the_robots_fuel_tank.html",
  },
  {
    image: "../../images/powersupply.jpg",
    title: "Volts, Amps, and Watts",
    content:
      "Decode the power lingo! Learn the meaning of volts, amps, and watts and how they describe the flow of electricity in your robot.",
    route:
      "../../../lessons/power_supply/robot_power_needs/volts_amps_watts.html",
  },
  {
    image: "../../images/powersupply.jpg",
    title: "Voltage Regulation",
    content:
      "Keep it steady! Discover why a consistent power flow is crucial for your robot's reliable performance and how to avoid damaging power surges.",
    route:
      "../../../lessons/power_supply/robot_power_needs/voltage_regulation.html",
  },
  {
    image: "../../images/powersupply.jpg",
    title: "Power Consumption",
    content:
      "Energy eaters! Learn how different robot parts draw power and why understanding consumption is key to long-lasting robots.",
    route:
      "../../../lessons/power_supply/robot_power_needs/power_consumption.html",
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
