document.getElementById("linkedinLink").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/markvarga21/", "_blank");
});
document.getElementById("githubLink").addEventListener("click", () => {
  window.open("https://github.com/markvarga21", "_blank");
});

document.getElementById("linkedinMobile").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/markvarga21/", "_blank");
});
document.getElementById("githubMobile").addEventListener("click", () => {
  window.open("https://github.com/markvarga21", "_blank");
});

document.addEventListener("mousemove", function (event) {
  // Get the mouse position
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // Calculate the distance from the mouse to the corners of the screen
  var distanceToTopLeft = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
  var distanceToTopRight = Math.sqrt(
    (window.innerWidth - mouseX) * (window.innerWidth - mouseX) +
      mouseY * mouseY
  );
  var distanceToBottomLeft = Math.sqrt(
    mouseX * mouseX +
      (window.innerHeight - mouseY) * (window.innerHeight - mouseY)
  );
  var distanceToBottomRight = Math.sqrt(
    (window.innerWidth - mouseX) * (window.innerWidth - mouseX) +
      (window.innerHeight - mouseY) * (window.innerHeight - mouseY)
  );

  // Get the maximum distance
  var maxDistance = Math.max(
    distanceToTopLeft,
    distanceToTopRight,
    distanceToBottomLeft,
    distanceToBottomRight
  );

  // Set the radial gradient radius based on the maximum distance (reducing the intensity)
  var gradientRadius = maxDistance * 0.35 + "px"; // Adjust the multiplier to control the intensity

  // Set the radial gradient position
  var gradientPosition = mouseX + "px " + mouseY + "px";

  // Apply the radial gradient style to the div with a more blurry effect
  document.getElementById("radialGradient").style.background =
    "radial-gradient(circle " +
    gradientRadius +
    " at " +
    gradientPosition +
    ", rgba(135, 135, 135, 0.2), transparent)";
  document.getElementById("radialGradient").style.filter = "blur(50px)"; // Adjust the blur value as needed
});

function removeAllActive() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("about").classList.remove("active");
  document.getElementById("projects").classList.remove("active");
  document.getElementById("contact").classList.remove("active");
}

function addHoverStyleToNav(id) {
  document.getElementById(id).classList.add("navActive");
}

const navs = ["mainNav", "aboutNav", "projectsNav", "contactNav"];
function removeAllActive() {
  for (let i = 0; i < navs.length; i++) {
    document.getElementById(navs[i]).classList.remove("navActive");
  }
}

function handleNavClick(event) {
  const navId = event.target.id;
  removeAllActive();
  addHoverStyleToNav(navId);
  const itemId = navId.replace("Nav", "");
  document.getElementById(itemId).scrollIntoView({ behavior: "smooth" });
  const mNavigations = document.getElementById("mNavigations");
  mNavigations.style.display = "none";
}

function navigateToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  const scrollUp = document.getElementById("scrollUp");
  if (window.pageYOffset > 500) {
    scrollUp.style.display = "block";
    scrollUp.classList.add("scaleUp");
  } else if (window.pageYOffset < 50) {
    removeAllActive();
  } else {
    scrollUp.style.display = "none";
    scrollUp.classList.remove("scaleUp");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  removeAllActive();
}

function emptyFields() {
  document.getElementById("contactFirstName").value = "";
  document.getElementById("contactLastName").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

const EMAIL = "vargalabs21@gmail.com";
function sendEmail(event) {
  event.preventDefault();
  const emailComponent = {
    firstName: document.getElementById("contactFirstName").value,
    lastName: document.getElementById("contactLastName").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const mailtoLink =
    `mailto:` +
    encodeURIComponent(EMAIL) +
    `?subject=` +
    encodeURIComponent(emailComponent.subject) +
    `&body=` +
    encodeURIComponent(
      emailComponent.message +
        "\n\n" +
        emailComponent.firstName +
        " " +
        emailComponent.lastName
    );
  window.location.href = mailtoLink;
  emptyFields();
}

function moveToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

const burgerIcon = document.getElementById("burgerIcon");
const closeIcon = document.getElementById("xIcon");
function showMobileNav() {
  const nav = document.getElementById("mNavigations");
  const actualState = nav.style.display;
  if (actualState === "none") {
    nav.style.display = "flex";
    burgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    console.log(closeIcon.style.display);
    nav.style.display = "none";
    burgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
}

function removeProjectActive() {
  const projects = document.querySelectorAll(".option");
  for (let i = 0; i < projects.length; i++) {
    projects[i].classList.remove("projectActive");
  }
}

function hideProjects() {
  document.getElementById("backendProjects").classList.add("hidden");
  document.getElementById("frontendProjects").classList.add("hidden");
  document.getElementById("mlProjects").classList.add("hidden");
}

function activateProject(id) {
  hideProjects();
  if (id === "backend") {
    console.log("backend");
    document.getElementById("backendProjects").classList.remove("hidden");
  } else if (id === "frontend") {
    console.log("frontend");
    document.getElementById("frontendProjects").classList.remove("hidden");
  } else if (id === "ml") {
    console.log("ml");
    document.getElementById("mlProjects").classList.remove("hidden");
  }
}
function hideAllDescriptions() {
  const descriptions = document.querySelectorAll("#projects .description");
  for (let i = 0; i < descriptions.length; i++) {
    descriptions[i].classList.add("pHidden");
  }
}

function changeProject(event) {
  const id = event.target.id;
  const element = document.getElementById(id);
  removeProjectActive();
  element.classList.add("projectActive");
  activateProject(id);
  hideAllDescriptions();
}

function openDescription(event) {
  const actual = event.target;
  element = actual.parentElement.querySelectorAll(".description")[0];
  const status = element.classList.contains("pHidden");
  if (status) {
    element.classList.remove("pHidden");
  } else {
    element.classList.add("pHidden");
  }
}

function openDescriptionWithArrow(event) {
  const actual = event.target;
  const element =
    actual.parentElement.parentElement.querySelectorAll(".description")[0];
  const hidden = element.classList.contains("pHidden");
  if (hidden) {
    element.classList.remove("pHidden");
  } else {
    element.classList.add("pHidden");
  }
}

function openDescriptionWithTitle(event) {
  const element =
    event.target.parentElement.parentElement.parentElement.querySelectorAll(
      ".description"
    )[0];
  const hidden = element.classList.contains("pHidden");
  if (hidden) {
    element.classList.remove("pHidden");
  } else {
    element.classList.add("pHidden");
  }
}

function openProjectCategory(event) {
  console.log("openProjectCategory");
  const element = event.target.parentElement;
  const category = element.querySelectorAll(".title p")[0].innerHTML;
  switch (category) {
    case "Backend":
      document.getElementById("backend").click();
      break;
    case "Frontend":
      document.getElementById("frontend").click();
      break;
    case "Machine Learning":
      document.getElementById("ml").click();
      break;
  }
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}
