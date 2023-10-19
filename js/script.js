window.onload = function () {
    rngOld = 0;
    cycleBanner();
}

function dropdownMenu() {
    let pages = document.getElementById("navPages")

    if (pages.style.display === "flex") {
        pages.style.display = "none";
    }
    else {
        pages.style.display = "flex";
    }
}

function cycleBanner() {
    // Makes the homebanner image on the homescreen background
    // cycle between a folder of images

    let rngNew = Math.floor(Math.random() * 3);

    if (rngNew != rngOld) {
        document.getElementById("homeBanner").src = "../img/Page-Home/BannerCycle/" + rngNew + ".png";
        rngOld = rngNew;
        setTimeout(cycleBanner, 5000);
    }
    else
    {
        cycleBanner();
    }
}