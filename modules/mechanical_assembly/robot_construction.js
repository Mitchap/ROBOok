const lessons = [
  {
    image: "../../images/assembly.jpg",
    title: "Workshop Tools",
    content:
      "Meet your building buddies! Discover the essential tools you'll need to assemble your robot.",
    route:
      ".../../../lessons/mechanical_assembly/robot_construction/workshop_equipment.html",
  },
  {
    image: "../../images/assembly.jpg",
    title: "Assembly Techniques",
    content:
      "Piece by piece! Learn the best ways to put together your robot's frame, motors, and sensors.",
    route:
      ".../../../lessons/mechanical_assembly/robot_construction/assembly_techniques.html",
  },
  {
    image: "../../images/assembly.jpg",
    title: "Wiring Management",
    content:
      "Connecting the power and brains! Learn how to wire your robot neatly and safely.",
    route:
      ".../../../lessons/mechanical_assembly/robot_construction/wiring_management.html",
  },
  {
    image: "../../images/assembly.jpg",
    title: "Fabrication Methods",
    content:
      "From screen to reality! Explore cool ways like 3D printing to create custom robot components.",
    route:
      ".../../../lessons/mechanical_assembly/robot_construction/fabrication_methods.html",
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
