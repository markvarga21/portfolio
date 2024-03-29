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
  var mouseX = event.clientX;
  var mouseY = event.clientY + window.scrollY;

  var gradientPosition = mouseX + "px " + mouseY + "px";
  document.getElementById("radialGradient").style.background =
    "radial-gradient(circle " +
    "20vw" +
    " at " +
    gradientPosition +
    ", rgba(135, 135, 135, 0.10), transparent)";
});

function handleNavClick(event) {
  const navId = event.target.id;
  const itemId = navId.replace("Nav", "");
  document.getElementById(itemId).scrollIntoView({ behavior: "smooth" });
  hideMobileNav();
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
  } else {
    scrollUp.style.display = "none";
    scrollUp.classList.remove("scaleUp");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
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

const boxWidth = $("#mNavigations").width();
function showMobileNav() {
  console.log(boxWidth);
  $("#mNavigations").css("visibility", "visible").animate({
    width: boxWidth,
  });
}

function hideMobileNav() {
  $("#mNavigations").animate(
    {
      width: 0,
    },
    () => {
      $(this).css("visibility", "hidden");
    }
  );
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
    document.getElementById("backendProjects").classList.remove("hidden");
  } else if (id === "frontend") {
    document.getElementById("frontendProjects").classList.remove("hidden");
  } else if (id === "ml") {
    document.getElementById("mlProjects").classList.remove("hidden");
  }
}

function changeProject(event) {
  const id = event.target.id;
  const element = document.getElementById(id);
  removeProjectActive();
  element.classList.add("projectActive");
  activateProject(id);
}

const SLIDE_ANIMATION_TIME = 400;
function slideDown(event) {
  $(event.target)
    .parent()
    .find(".description")
    .first()
    .slideToggle(SLIDE_ANIMATION_TIME);
}

function openDescriptionWithArrow(event) {
  $(event.target)
    .parent()
    .parent()
    .find(".description")
    .first()
    .slideToggle(SLIDE_ANIMATION_TIME);
}

function openDescriptionWithTitle(event) {
  $(event.target)
    .parent()
    .parent()
    .parent()
    .find(".description")
    .first()
    .slideToggle(SLIDE_ANIMATION_TIME);
}

function openProjectCategory(event) {
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
