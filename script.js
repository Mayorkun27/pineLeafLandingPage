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
        nextBtn.click()
    }, 5000)
}
startAutoPlay()

const setSlider = () => {
    let itemActiveOld = main.querySelector(".product.active");
    if (itemActiveOld) {
        itemActiveOld.classList.remove("active")
    }
    product[active].classList.add("active")
    let eachredirect = product[active].getAttribute("data-link")
    console.log(eachredirect)
    let productBtn = product[active].querySelector("button")
    if (productBtn) {
        console.log("seen")
    } else {
        console.log("not seen")
    }
    productBtn.addEventListener("click", () => {
        console.log("clicked")
        productBtn.setAttribute("disabled", true);
        productBtn.textContent = "Redirecting..."

        const tempAncTag = document.createElement("a")
        tempAncTag.setAttribute("href", eachredirect)
        tempAncTag.setAttribute("target", "_blank")
        tempAncTag.setAttribute("rel", "noopener noreferrer")
        console.log(tempAncTag)
        setTimeout(() => {
            productBtn.removeAttribute("disabled");
            productBtn.textContent = "Visit Page";
            setTimeout(() => {
                tempAncTag.click()
            }, 500);
        }, 3000);
    })

    if (active == 0) {
        cont.style.background = "linear-gradient(to top, #000000e8 20%, #00000018), url(images/img5.png)";
        cont.style.backgroundPosition = "top"
        cont.style.backgroundSize = "cover"
    } else if (active == 1) {
        cont.style.background = "linear-gradient(to top, #000000e8 20%, #00000018), url(images/img3.jpg)"
        cont.style.backgroundPosition = "center"
        cont.style.backgroundSize = "cover"
    } else if (active == 2) {
        cont.style.background = "linear-gradient(to top, #000000e8 20%, #00000018), url(images/img4.jpg)"
        cont.style.backgroundPosition = "center"
        cont.style.backgroundSize = "cover"
    } else if (active == 3) {
        cont.style.background = "linear-gradient(to top, #000000e8 20%, #00000018), url(images/img2.webp)"
        cont.style.backgroundPosition = "center"
        cont.style.backgroundSize = "cover"
    }
}

setSlider();

nextBtn.addEventListener("click", () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    document.documentElement.style.setProperty("--calculation", 1);
    setSlider();
})

prevBtn.addEventListener("click", () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    document.documentElement.style.setProperty("--calculation", -1);
    setSlider();
})
