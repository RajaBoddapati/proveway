const allSections = document.querySelectorAll(".section");

allSections.forEach((section) => {
  const checkbox = section.querySelector(".toggle-checkbox");
  const dropdowns = section.querySelector(".dropdowns");

  section.addEventListener("click", (event) => {
    // Prevent the event from toggling the checkbox twice if it was directly clicked
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
      return;
    }

    // Uncheck all other checkboxes and hide their dropdowns
    allSections.forEach((otherSection) => {
      const otherCheckbox = otherSection.querySelector(".toggle-checkbox");
      const otherDropdowns = otherSection.querySelector(".dropdowns");
      otherCheckbox.checked = false;
      otherDropdowns.style.display = "none";
    });

    checkbox.checked = true;
    dropdowns.style.display = "block";
  });
});
