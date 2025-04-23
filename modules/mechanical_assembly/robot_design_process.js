const lessons = [
  {
    image: "../../images/assembly.jpg",
    title: "Conceptual Design",
    content:
      "Brainstorm and sketch! Learn how robot ideas first take shape on paper.",
    route: "../../modules/assembly/conceptual_design.html",
  },
  {
    image: "../../images/assembly.jpg",
    title: "Introduction to CAD",
    content:
      "Draw it with computers! Discover how CAD software helps create precise robot plans.",
    route: "../../modules/assembly/introduction_to_cad.html",
  },
  {
    image: "../../images/assembly.jpg",
    title: "3D Modeling",
    content:
      "See it before you build it! Learn how 3D modeling brings your robot design to life on screen.",
    route: "../../modules/assembly/3d_modeling.html",
  },
  {
    image: "../../images/assembly.jpg",
    title: "Solid & Simple",
    content:
      "Build it to last (and build it easily)! Learn how to design robots that are strong, stable, and easy to put together.",
    route: "../../modules/assembly/solid_and_simple.html",
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
