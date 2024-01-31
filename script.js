window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  var currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 10) {
    console.log("Godmorgen");
  } else if (currentHour >= 10 && currentHour < 18) {
    console.log("Goddag");
  } else if (currentHour >= 18 && currentHour < 24) {
    console.log("Godaften");
  } else if (currentHour >= 24 && currentHour < 5) {
    console.log("Godnat");
  }
}
