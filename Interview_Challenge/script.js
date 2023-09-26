let subHeading = document.getElementById("sub-heading");
subHeading.innerHTML = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric"
});
