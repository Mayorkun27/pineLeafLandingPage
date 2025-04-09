let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let main = document.querySelector("main");
let cont = document.querySelector(".cont");
let product = main.querySelectorAll(".product");

let active = 0;
let firstPosition = 0;
let lastPosition = product.length - 1;

let autoPlay;
const startAutoPlay = () => {
  clearInterval(autoPlay);
  autoPlay = setInterval(() => {
    nextBtn.click();
  }, 5000);
};
startAutoPlay();

const backgrounds = [
  { url: "images/img5.png", position: "top", size: "cover" },
  { url: "images/img3.jpg", position: "center", size: "cover" },
  { url: "images/img4.jpg", position: "center", size: "cover" },
  { url: "images/img2.webp", position: "center", size: "cover" },
];

const setSlider = () => {
  let itemActiveOld = main.querySelector(".product.active");
  if (itemActiveOld) {
    itemActiveOld.classList.remove("active");
  }
  product[active].classList.add("active");

  let eachredirect = product[active].getAttribute("data-link");
  let productBtn = product[active].querySelector("button");
  let eachDescription = product[active].querySelector(".details");

  eachDescription.addEventListener("mouseover", () => {
    clearInterval(autoPlay);
  });

  productBtn.addEventListener("click", () => {
    productBtn.setAttribute("disabled", true);
    productBtn.textContent = "Redirecting...";
    clearInterval(autoPlay);

    const tempAncTag = document.createElement("a");
    tempAncTag.setAttribute("href", eachredirect);
    tempAncTag.setAttribute("target", "_blank");
    tempAncTag.setAttribute("rel", "noopener noreferrer");
    setTimeout(() => {
      productBtn.removeAttribute("disabled");
      productBtn.textContent = "Visit Page";
      setTimeout(() => {
        tempAncTag.click();
      }, 500);
    }, 3000);
  });

  const bg = backgrounds[active];
  cont.style.background = `linear-gradient(to top, #000000e8 20%, #00000018), url(${bg.url})`;
  cont.style.backgroundPosition = bg.position;
  cont.style.backgroundSize = bg.size;
};

setSlider();

nextBtn.addEventListener("click", () => {
  active = active + 1 > lastPosition ? 0 : active + 1;
  document.documentElement.style.setProperty("--calculation", 1);
  clearInterval(autoPlay);
  setSlider();
  setTimeout(() => {
    startAutoPlay();
  }, 3000);
});

prevBtn.addEventListener("click", () => {
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  document.documentElement.style.setProperty("--calculation", -1);
  clearInterval(autoPlay);
  setSlider();
  setTimeout(() => {
    startAutoPlay();
  }, 3000);
});
