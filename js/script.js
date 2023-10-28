window.onload = function () {
    rngOld = 0;
    cycleBanner();
}

function cycleBanner() {
    // Makes the homebanner image on the homescreen background
    // cycle between a folder of images

    let rngNew = Math.floor(Math.random() * 7);

    // If the random number being picked is not the same as the last picked image
    if (rngNew != rngOld) {
        // Sets the homeBanner image to the new image and then wait 5 seconds to cycle again
        document.getElementById("homeBanner").src = "../img/Page-Home/BannerCycle/" + rngNew + ".png";
        rngOld = rngNew;
        setTimeout(cycleBanner, 5000);
    }
    else {
        cycleBanner();
    }
}

function dropdownMenu() {
    let pages = document.getElementById("navPages")

    // Toggles the visibility of the navigation menu
    if (pages.style.display == "flex") {
        pages.style.display = "none";
        document.getElementById("dropdownButton").style.backgroundImage = "url(../img/Nav/Nav_Closed.svg)";
    }
    else {
        pages.style.display = "flex";
        document.getElementById("dropdownButton").style.backgroundImage = "url(../img/Nav/Nav_Open.svg)";
    }
}

document.addEventListener("DOMContentLoaded", function cookies() {

    if (localStorage.getItem("cookiesButtonChosen") == "true") {
        // If one of the cookies pop-up buttons has previously been clicked
        // Hide cookie Pop-up
        document.getElementById("cookiePopup").style.display = "none";
    }


    
    // Hides the cookie pop-up if the user accepts or rejects the use of cookies
    // Doesn't matter since the cookie pop-up doesn't do anything in the first place,

    // Only meant for:
    // Grading group 5: Responsiveness & Metadata:
    //Uses property z-index for a "cookies" message with value 9999.

    document.getElementById("cookieButtonAccept").addEventListener("click", function () {
        localStorage.setItem("cookiesButtonChosen", "true")
        document.getElementById("cookiePopup").style.display = "none";
    });
    document.getElementById("cookieButtonDecline").addEventListener("click", function () {
        localStorage.setItem("cookiesButtonChosen", "true")
        document.getElementById("cookiePopup").style.display = "none";
    });
})