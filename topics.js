const topics = [
    {
      image: "../images/electronics.jpg",
      title: "Electronics",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      route: "../topics/electronics.html"
    },
    {
      image: "../images/mechanics.jpg",
      title: "Mechanics",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      route: "../topics/mechanics.html"
    },
    {
      image: "../images/programming.jpg",
      title: "Programming",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      route: "../topics/programming.html"
    },
    {
      image: "../images/about-robots.jpg",
      title: "All About Robots",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      route: "../topics/about-robots.html"
    },
    {
      image: "../images/creating.jpg",
      title: "Construct a Robot",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      route: "../topics/construct-robot.html"
    },
    {
      image: "../images/add-ons.jpg",
      title: "Add Ons",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      route: "../topics/add-ons.html"
    },
    {
      image: "../images/add-ons.jpg",
      title: "New Ons",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      route: "../topics/add-ons.html"
    }
  ];

  function returnCards(valuesCards) {
    return valuesCards.map(valuesCard => `
      <div class="col">
        <div class="card my-4 h-100">
          <img src="${valuesCard.image}" class="card-img-top" alt="${valuesCard.title}">
          <div class="card-body">
            <h3 class="card-title">${valuesCard.title}</h3>
            <p class="card-text">${valuesCard.content}</p>
          </div>
          <div class="ms-4 mb-5">
            <a href="${valuesCard.route}" class="btn btn-primary px-4">VIEW</a>
          </div>
        </div>
      </div>`).join('');
  }

  document.getElementById('topic-cards').innerHTML = returnCards(topics);
