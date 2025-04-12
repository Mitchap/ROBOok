const lessons = [
  {
    image: "../../images/programming.jpg",
    title: "Language of Robots",
    content:
      "Talk to your bot! Discover the secret languages called programming that tell robots exactly what to do, from simple commands to complex actions.",
    route: "../modules/programming/language_of_robots.html",
  },
  {
    image: "../../images/programming.jpg",
    title: "Block-Based Coding",
    content:
      "Code without typing! Learn the basics of programming your virtual robot using colorful drag-and-drop blocks in Tinkercad.",
    route: "../modules/programming/block_based_coding.html",
  },
  {
    image: "../../images/programming.jpg",
    title: "Arduino Code",
    content:
      "See the code behind the blocks! Explore how visual programming translates into the real text language of Arduino, the same language you'll use in the official Arduino IDE!",
    route: "../modules/programming/arduino_code.html",
  },
  {
    image: "../../images/programming.jpg",
    title: "Variables and Control",
    content:
      "Making choices and repeating tasks, your way! Program your virtual robot's behavior using both visual blocks and text commands.",
    route: "../modules/programming/variables_and_control.html",
  },
];

function returnCards(valuesCards) {
  return valuesCards
    .map(
      (valuesCard) => `
      <div class="col-6 col-md-4 ">
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
