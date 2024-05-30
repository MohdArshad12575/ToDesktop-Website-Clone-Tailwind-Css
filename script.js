const navHidden = document.getElementById("nav-hidden");
const handleMenu = () => {
  navHidden.classList.toggle("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
  const dtElements = document.querySelectorAll("dt");

  dtElements.forEach((element) => {
    element.addEventListener("click", () => {
      const ddId = element.getAttribute("aria-controls");
      const ddElement = document.getElementById(ddId);
      const ddArrowIcon = element.querySelector("i");

      if (ddElement) {
        ddElement.classList.toggle("hidden");
      }

      if (ddArrowIcon) {
        ddArrowIcon.classList.toggle("-rotate-180");
      }
    });
  });
});
