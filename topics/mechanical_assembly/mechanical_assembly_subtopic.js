const subTopics = [
  {
    image: "../images/assembly.jpg",
    title: "Robot Building Blocks",
    content:
      "From metal to plastic and wheels that roll! Discover the fundamental materials and rolling foundations that form a robot's physical presence.",
    route: "../topics/mechanical_assembly/robot_building_blocks.html",
  },
  {
    image: "../images/assembly.jpg",
    title: "Robot Design",
    content:
      "Dream it, draw it, build it! Journey through the steps of robot design, from initial sketches to digital blueprints.",
    route: "../topics/mechanical_assembly/robot_design.html",
  },
  {
    image: "../images/assembly.jpg",
    title: "Building the Physical Bot",
    content:
      "Time to build! Explore the tools, techniques, and wiring skills needed to assemble your robot creation.",
    route: "../topics/mechanical_assembly/building_the_physical_bot.html",
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
