const lessons = [
  {
    image: "../../images/powersupply.jpg",
    title: "Dry Cells & Chemical Power",
    content:
      "Simple power packs! Discover how everyday dry cell batteries use chemistry to give small robots their initial spark.",
    route:
      "../../../lessons/power_supply/robot_power_needs/dry_cells_chemical_power.html",
  },
  {
    image: "../../images/powersupply.jpg",
    title: "Choosing the Right Pack",
    content:
      "Power up again and again! Explore the world of LiPo, Li-ion, and NiMH batteries that keep your robots running for longer.",
    route:
      "../../../lessons/power_supply/robot_power_needs/choosing_the_right_pack.html",
  },
  {
    image: "../../images/powersupply.jpg",
    title: "Solar Power & Lead-Acid",
    content:
      "Sun's energy & heavy-duty power! Learn how solar panels and lead-acid batteries offer unique ways to power different kinds of robots.",
    route:
      "../../../lessons/power_supply/robot_power_needs/solar_power_lead_acid.html",
  },
  {
    image: "../../images/powersupply.jpg",
    title: "AC Power & Voltage Conversion",
    content:
      "Staying plugged in! Discover how robots use wall power and adapters to get continuous energy for non-mobile tasks.",
    route:
      "../../../lessons/power_supply/robot_power_needs/ac_power_voltage_conversion.html",
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
