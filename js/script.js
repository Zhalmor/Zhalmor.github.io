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
    else
    {
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