const lessons = [
  {
    image: "../../images/powersupply.jpg",
    title: "The Right Power Supply",
    content:
      "Power decisions! Understand why picking the perfect power source is crucial for your robot's success and safety.",
    route: "../../topics/power/the_right_power_supply.html",
  },
  {
    image: "../../images/powersupply.jpg",
    title: "Consider Requirements",
    content:
      "What does your robot crave? Learn how to figure out the voltage, current, and power your robot's components need to thrive.",
    route: "../../topics/power/consider_requirements.html",
  },
  {
    image: "../../images/powersupply.jpg",
    title: "Practical Constraints",
    content:
      "Real-world power! Explore the practical limitations like size, weight, battery life, and cost that influence your power supply choices.",
    route: "../../topics/power/practical_constraints.html",
  },
  {
    image: "../../images/powersupply.jpg",
    title: "Power Calculation & Battery Life",
    content:
      "Math for more power! Learn how to calculate your robot's energy needs and estimate how long your batteries will last.",
    route: "../../topics/power/power_calculation_battery_life.html",
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
