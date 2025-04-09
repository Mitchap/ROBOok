const navbarItems = [
  {
    type: "link",
    label: "HOME",
    href: "index.html",
    active: true,
  },
  {
    type: "dropdown",
    label: "TOPICS",
    href: "topics.html",
    items: [
      {
        type: "link",
        label: "View Topics",
        href: "../topics.html",
        bold: true,
      },
      { type: "divider" },
      // We inject the topic-based links here dynamically below
      ...topics.map((topic) => ({
        type: "link",
        label: topic.title,
        href: topic.route,
      })),
    ],
  },
  {
    type: "link",
    label: "ABOUT",
    href: "about.html",
  },
];

function returnNavbar(navItems) {
  return `
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img src="../images/logo.png" class="logo" alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><i class="fa-solid fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              ${navItems
                .map((item) => {
                  if (item.type === "dropdown") {
                    return `
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle mx-3 text-light"
                          href="${item.href}"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          ${item.label}
                        </a>
                        <ul class="dropdown-menu">
                          ${item.items
                            .map((subItem) => {
                              if (subItem.type === "divider") {
                                return `<li><hr class="dropdown-divider" /></li>`;
                              }
                              return `<li>
                                <a class="dropdown-item text-light ${
                                  subItem.bold ? "fw-semibold" : ""
                                }" href="${subItem.href}">
                                  ${subItem.label}
                                </a>
                              </li>`;
                            })
                            .join("")}
                        </ul>
                      </li>`;
                  } else {
                    return `
                      <li class="nav-item">
                        <a class="nav-link mx-3 ${
                          item.active ? "active" : "text-light"
                        }"
                           href="${item.href}">
                          ${item.label}
                        </a>
                      </li>`;
                  }
                })
                .join("")}
            </ul>
          </div>
        </div>
      </nav>`;
}

document.getElementById("navbar").innerHTML = returnNavbar(navbarItems);

// When the user scrolls down 20px from the top of the document, show the back to top button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
