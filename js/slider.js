const IMAGE_SIZE = 4;

const infoList = [
  {
    title: "The Midnight Woods",
    difficulty: 4,
    paragraph: {
      top: "The Crystal Forest or Midnight Woods is a biome on the West area of the land of light.",

      bottom:
        "It is filled with various green regenerative Hard Light Crystals. The crystals seem infectious, as the inhabitors of the forest can become encased in them.Various Crystal Beasts seem to be the outcome of being infected by these crystals.",
    },
  },
  {
    title: "The Divine Path",
    difficulty: 2,
    paragraph: {
      top: "The Mountains, also called Divine Path, the North and the Crystal Cliffs, are the northern area of the land of light.",

      bottom:
        "The Mountains are a collection of snowy mountaintops, abandoned structures, and underground cave systems. The area is inhabited by the Bird People, a tribe of Vultures. The Vultures, Vulture Acolytes, and Vulture Shamans are enemies exclusive to this area.",
    },
  },
  {
    title: "The Eastern Watershelf",
    difficulty: 3,
    paragraph: {
      top: "The Eastern Watershelf or lake is a biome on the East area of the land of light.",
      bottom:
        "The Lake requires hopping between various decayed platforms, and the player is primarily dependent on moving platforms with large safe areas in between. Along with the moving platforms, the player goes underground to skip between areas.",
    },
  },
  {
    title: "The Barren Hills",
    difficulty: 5,
    paragraph: {
      top: "The Barren Hills or simply Wastes is the South region of the land of light.",
      bottom:
        "The Barren Hills is home to a large underground laboratory complex that also serves as a robot factory and is responsible for the creation of various creatures seen around the world such as the Dirks and blue-skins. Scattered about the desert are a number of ruined mechanical structures resembling pieces of a large spacecraft possibly also created in the labs.",
    },
  },
];

const sliderImage = document.querySelector(".carousel .slider__image");
const nextSlideBtn = document.querySelector(
  ".carousel .navigation-button.next"
);
const prevSlideBtn = document.querySelector(
  ".carousel .navigation-button.prev"
);
const sliderPreviewImage = document.querySelectorAll(
  ".carousel .slider__image-preview"
);

const infoTitle = document.querySelector(".carousel .info .title");
const infoDetailsTop = document.querySelector(".carousel .info .details .top");
const infoDetailsBottom = document.querySelector(
  ".carousel .info .details .bottom"
);

const difficultyBullet = document.querySelectorAll(
  ".carousel .difficulty .bullet"
);

// State
let currentSlideNumber = 1;

// Level starts from 1
const setDifficulty = (level) => {
  difficultyBullet.forEach((bullet, i) => {
    bullet.classList.remove("filled");

    if (i < level) {
      bullet.classList.add("filled");
    }
  });
};

const setInfo = (target) => {
  const updatedInfo = infoList[target - 1];
  infoTitle.textContent = updatedInfo.title;

  infoDetailsTop.textContent = updatedInfo.paragraph.top;
  infoDetailsBottom.textContent = updatedInfo.paragraph.bottom;

  setDifficulty(updatedInfo.difficulty);
};

const changeImage = (target) => {
  // Change main image
  sliderImage.src = `./assets/carousel/carousel_${target}.png`;
  currentSlideNumber = target;

  // Set preview Image
  resetSelectedClass();
  const previewEl = document.querySelector(
    `.slider__image-preview[data-image="${target}"]`
  );
  previewEl.classList.add("selected");

  // Set info
  setInfo(target);
};

const resetSelectedClass = () => {
  sliderPreviewImage.forEach((slider) => {
    slider.classList.remove("selected");
  });
};

sliderPreviewImage.forEach((slider) => {
  slider.addEventListener("click", function () {
    // Change main image
    const targetImage = this.dataset.image;
    changeImage(targetImage);
  });
});

const slideTo = (where) => () => {
  if (where === "next") {
    changeImage(Math.min(currentSlideNumber + 1, IMAGE_SIZE));
  }

  if (where === "prev") {
    changeImage(Math.max(currentSlideNumber - 1, 1));
  }
};

nextSlideBtn.addEventListener("click", slideTo("next"));
prevSlideBtn.addEventListener("click", slideTo("prev"));

// Initialization
changeImage(1);
