let styleButtons = [];
let fassadeButtons = [];
let highlightButtons = [];
let rooftype = true;
house = {};
let i = 0;
const highlightAreas = document.querySelectorAll("#highlights");
const fassadeAreas = document.querySelectorAll("#fassade");
const toggle = document.getElementById("id-name--1");
const fassadeColors = ["#d0d2ca", "#c7c3b9", "#e1e0cf"]
const highlightColors = ["#752931", "#461e33", "#395667", "#51555b", "#5c5348", "#9f8889"]

getButtons();
// getFassadeButtons();


styleButtons.forEach(function(element, index) {
  element.addEventListener('click', (event) => {
    i = index
    setHouses(i)
    let active = document.querySelector(".active")
    active.classList.toggle("active");
    element.classList.toggle("active");
  })
});

fassadeButtons.forEach(function(button, index) {
  button.style.backgroundColor = fassadeColors[index];
  button.addEventListener('click', (event) => {
    fassadeAreas.forEach(function(element) {
      if (element.style.fill === button.style.backgroundColor) {
        element.style.fill = "none"
        button.classList.toggle("active1");
      } else {
        element.style.fill = fassadeColors[index];
        let fassadeActive = document.querySelector(".active1");
        if(fassadeActive){
          fassadeActive.classList.toggle("active1");
        }
        button.classList.toggle("active1");
      }
    });
  });
});

highlightButtons.forEach(function(button, index) {
  button.style.backgroundColor = highlightColors[index];
  button.addEventListener('click', (event) => {
    highlightAreas.forEach(function(element) {
      if(element.style.fill === button.style.backgroundColor){
        element.style.fill = "none"
        button.classList.toggle("active2");
      } else {
        element.style.fill = highlightColors[index]
        let highlightActive = document.querySelector(".active2");
        if(highlightActive){
          highlightActive.classList.toggle("active2");
        }
        button.classList.toggle("active2");
      }
    });
  });
});

function getButtons() {
  styleButtons = document.querySelectorAll("#house-style");
  fassadeButtons = document.querySelectorAll("#fassade-btn")
  highlightButtons = document.querySelectorAll("#highlight-btn")
};

toggle.addEventListener('click', (event) => {
  rooftype = !rooftype;
  setHouses(i)
});


function setHouses(index) {
  house = document.querySelector(".displayed");
  if(rooftype === true) {
    house2 = document.getElementById("house-"+(index + 1)+"-flat");
  } else {
    house2 = document.getElementById("house-"+(index + 1)+"-gab");
  }
  house.classList.toggle("hidden");
  house.classList.toggle("displayed");
  house2.classList.toggle("hidden");
  house2.classList.toggle("displayed");
};
