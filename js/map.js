const mapEl = document.querySelector(".boss .container");
const mapDragEl = document.querySelector(".boss .container .lower-map");
const skullIcon = document.querySelectorAll(".boss-pin .skull");
const popupIcon = document.querySelectorAll(".boss .popup");
const dragMatEl = document.querySelector(".boss .drag-mat");

const sectionEl = document.querySelector(".section.boss");

let isMousedown = false;

const setMapPosition = (targetPercentage) => {
  mapDragEl.style.width = `${targetPercentage}%`;
};

const handleMouseMove = (e) => {
  const mapLeftPos = mapEl.getBoundingClientRect().left;
  const mapWidth = mapEl.getBoundingClientRect().width;
  const deltaX = e.clientX - mapLeftPos;
  const movePercentage = (deltaX / mapWidth) * 100;

  setMapPosition(movePercentage);
};

const detachListener = () => {
  isMousedown = false;
  dragMatEl.style.display = "none";
  mapEl.style.cursor = "grab";
  mapEl.removeEventListener("mousemove", handleMouseMove);
};

sectionEl.addEventListener("mousedown", () => {
  isMousedown = true;
  dragMatEl.style.display = "block";
  mapEl.style.cursor = "grabbing";
  mapEl.addEventListener("mousemove", handleMouseMove);
});

mapEl.addEventListener("mouseup", () => {
  detachListener();
});

dragMatEl.addEventListener("mouseleave", () => {
  detachListener();
});

// skullIcon.forEach((skull) => {
//   skull.addEventListener("mousedown", () => {
//     dragMatEl.style.display = "block";
//     mapEl.style.cursor = "grabbing";
//     mapEl.addEventListener("mousemove", handleMouseMove);
//   });

//   // skull.addEventListener("mouseover", () => {
//   //   dragMatEl.style.display = "none";
//   //   mapEl.style.cursor = "grab";
//   //   mapEl.removeEventListener("mousemove", handleMouseMove);
//   // });
// });

// popupIcon.forEach((popup) => {
//   popup.addEventListener("mousedown", () => {
//     dragMatEl.style.display = "block";
//     mapEl.style.cursor = "grabbing";
//     mapEl.addEventListener("mousemove", handleMouseMove);
//   });
// });
