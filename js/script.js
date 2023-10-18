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

    let rng = Math.floor(Math.random() * 3);
    document.getElementById("homeBanner").src = "../img/Page-Home/BannerCycle/" + rng + ".png";

    setTimeout(cycleBanner, 5000);
}