function isTouchDevice() {
    try {
        //We try to create TouchEvent. It would fail for desktops and throw error
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

var customCursor = document.querySelector(".custom-cursor");
var cursorX = 0;
var cursorY = 0;

const move = (e) => {
    //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
    try {
      //PageX and PageY return the position of client's cursor from top left of screen
      var x = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
      var y = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    } catch (e) {}
    //set left and top of div based on mouse position
    customCursor.style.left = x - 25 + "px";
    customCursor.style.top = y - 25 + "px";
};
//For mouse
document.addEventListener("mousemove", (e) => {
    move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
    move(e);
});

var cssBody = document.querySelector("body");
var navOptions = document.querySelector("nav-option");

var navButton = document.querySelector(".nav-button");
var navButtonText = document.querySelector(".nav-prompt");

navButton.addEventListener("click", showNavOptions);

var navOptionsVisible = false;

function showNavOptions() {

    cssBody.style.setProperty("--nav-options-opacity", 1);
    cssBody.style.setProperty("--nav-width", "240px");
    cssBody.style.setProperty("--nav-height", "120px");
    cssBody.style.setProperty("--nav-options-pointer-events", "auto");

    navOptionsVisible = true;

    navButtonText.innerHTML = "close"

    navButton.removeEventListener("click", showNavOptions);
    navButton.addEventListener("click", hideNavOptions)
}

function hideNavOptions() {
    cssBody.style.setProperty("--nav-options-opacity", 0);
    cssBody.style.setProperty("--nav-width", "220px");
    cssBody.style.setProperty("--nav-height", "110px");
    cssBody.style.setProperty("--nav-options-pointer-events", "none");

    navOptionsVisible = false;

    navButtonText.innerHTML = "menu"

    navButton.removeEventListener("click", hideNavOptions);
    navButton.addEventListener("click", showNavOptions)
}

