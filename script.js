document.getElementById("linkedin").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/markvarga21/", "_blank");
});
document.getElementById("github").addEventListener("click", () => {
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

const scroller = document.getElementById("projects");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scroller.setAttribute("data-animated", true);
  const scrollerInner = document.querySelector(".inner");
  const scrollerContent = Array.from(scrollerInner.children);

  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("area-hidden", true);
    scrollerInner.appendChild(duplicatedItem);
  });
}

const startStop = document.getElementById("startStop");
function startStopAnimation(event) {
  const status = event.target.classList[0];
  if (status === "start") {
    startStop.classList.remove("start");
    startStop.classList.add("stop");
    startStop.innerHTML = "Stop animation";
    document.querySelector("#projects .inner").style.animationPlayState =
      "running";
  } else if (status === "stop") {
    startStop.classList.remove("stop");
    startStop.classList.add("start");
    startStop.innerHTML = "Start animation";
    document.querySelector("#projects .inner").style.animationPlayState =
      "paused";
  }
}

function emptyFields() {
  document.getElementById("contactFirstName").value = "";
  document.getElementById("contactLastName").value = "";
  document.getElementById("contactEmail").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

function sendEmail(event) {
  event.preventDefault();
  const emailComponent = {
    firstName: document.getElementById("contactFirstName").value,
    lastName: document.getElementById("contactLastName").value,
    email: document.getElementById("contactEmail").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const mailtoLink =
    `mailto:` +
    encodeURIComponent(emailComponent.email) +
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
