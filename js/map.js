const mapEl = document.querySelector(".boss .container");
const mapDragEl = document.querySelector(".boss .container .lower-map");

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

mapEl.addEventListener("mousedown", () => {
  mapEl.style.cursor = "grabbing";
  mapEl.addEventListener("mousemove", handleMouseMove);
});

mapEl.addEventListener("mouseup", () => {
  mapEl.style.cursor = "grab";
  mapEl.removeEventListener("mousemove", handleMouseMove);
});
