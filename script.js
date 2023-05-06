/* SIDE MENU ACESS AND CLOSE SIDE MENU. */
let openSideMenu = document.getElementById("acessMenu").onclick = function myFunctionA() {
    sideMenuContainer.style.left = "0%";
    html.style.overflowY = "hidden"
    body.style.position = "fixed";
    body.style.overflow = "hidden"
    screenBlur.style.display = "block";
    screenBlur.style.zIndex = "3";
}

let closeSideMenu = document.getElementById("closeSideMenu").onclick = function myFunctionC() {
    sideMenuContainer.style.left = "-100%";
    html.style.overflowY = "scroll"
    body.style.position = "static";
    screenBlur.style.display = "none";
    screenBlur.style.zIndex = "-1";
    
}
/* END OF SIDE MENU ACESS AND CLOSE SIDE MENU. */

/* BANNER NAVIGATION. */
let slides = document.getElementsByClassName("slide");
let navlinks = document.getElementsByClassName("navigationLink");
let currentSlide = 0;

document.getElementById("next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("previous").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.navigationLink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})
/* END OF BANNER NAVIGATION. */

/* MAIN SLIDERS. */
document.getElementById('nextOne').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('structureOfTheListOne').scrollLeft += widthItem;
};
document.getElementById('previousOne').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('structureOfTheListOne').scrollLeft -= widthItem;
};

document.getElementById('nextTwo').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('structureOfTheListTwo').scrollLeft += widthItem;
};
document.getElementById('previousTwo').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('structureOfTheListTwo').scrollLeft -= widthItem;
};
/* END OF MAIN SLIDERS. */

/* FOOTER HIDE AND UNHIDE MENU'S. */
let footerListOne = document.getElementById("paymentMethods").onclick = function paymentFunction() {
    if (unhidePaymentMethods.style.display != "block") {
        unhidePaymentMethods.style.display = "block";
    let paymentIcon = document.getElementById("paymentIcon");
        paymentIcon.setAttribute("src", "/images/angle up.png");
    } else {
        unhidePaymentMethods.style.display = "none";
    let paymentIcon = document.getElementById("paymentIcon");
        paymentIcon.setAttribute("src", "/images/angle down.png");
    }
}

let footerListTwo = document.getElementById("help").onclick = function helpFunction() {
    if (unhideHelp.style.display != "block") {
        unhideHelp.style.display = "block";
    let helpIcon = document.getElementById("helpIcon");
        helpIcon.setAttribute("src", "/images/angle up.png");
    } else {
        unhideHelp.style.display = "none";
    let helpIcon = document.getElementById("helpIcon");
        helpIcon.setAttribute("src", "/images/angle down.png");
    }
}

let footerListThree = document.getElementById("aboutUs").onclick = function aboutUsFunction() {
    if (unhideAboutUs.style.display != "block") {
        unhideAboutUs.style.display = "block";
    let aboutUsIcon = document.getElementById("aboutUsIcon");
        aboutUsIcon.setAttribute("src", "/images/angle up.png");
    } else {
        unhideAboutUs.style.display = "none";
    let aboutUsIcon = document.getElementById("aboutUsIcon");
        aboutUsIcon.setAttribute("src", "/images/angle down.png");
    }
}
/* END OF FOOTER HIDE AND UNHIDE MENU'S. */