const topics = [
  {
    image: "../images/robot_building_blocks.png",
    title: "Robot Building Blocks",
    content:
      "From metal to plastic and wheels that roll! Discover the fundamental materials and rolling foundations that form a robot's physical presence.",
    route: "../modules/mechanical_assembly/robot_building_blocks.html",
  },
  {
    image: "../images/robot_design.png",
    title: "Robot Design Process",
    content:
      "Dream it, draw it, build it! Journey through the steps of robot design, from initial sketches to digital blueprints.",
    route: "../modules/mechanical_assembly/robot_design_process.html",
  },
  {
    image: "../images/robot_construction.png",
    title: "Robot Construction",
    content:
      "Time to build! Explore the tools, techniques, and wiring skills needed to assemble your robot creation.",
    route: "../modules/mechanical_assembly/robot_construction.html",
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
