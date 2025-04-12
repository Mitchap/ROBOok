const lessons = [
  {
    image: "../../images/assembly.jpg",
    title: "Robot Building Materials",
    content:
      "Metal, plastic, or more? Explore the properties of different materials and why they're chosen to build robot bodies.",
    route: "../../modules/assembly/building_materials.html",
  },
  {
    image: "../../images/assembly.jpg",
    title: "Chassis and Frames",
    content:
      "The skeleton of the bot! Discover the chassis and frames that provide essential support and structure.",
    route: "../../modules/assembly/chassis_and_frames.html",
  },
  {
    image: "../../images/assembly.jpg",
    title: "Fasteners and Adhesives",
    content:
      "Screws, rivets, and glue! Learn the tricks to securely connect robot parts and build a solid machine.",
    route: "../../modules/assembly/fasteners_and_adhesives.html",
  },
  {
    image: "../../images/assembly.jpg",
    title: "Bot Wheels & Mobility Systems",
    content:
      "Round and ready to roll! Learn about different types of robot wheels and how they enable movement.",
    route: "../../modules/assembly/robot_wheels.html",
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
