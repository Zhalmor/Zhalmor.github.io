function dropdownMenu() {
    console.log("Test???")

    let pages = document.getElementById("navPages")
    
    if (pages.style.display === "flex") {
        pages.style.display = "none";
    }
    else {
        pages.style.display = "flex";
    }
}