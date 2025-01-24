const proyectsButton = document.getElementById("proyects");
const aboutButton = document.getElementById("about");
const settingsButton = document.getElementById("settings");
const locationTitle = document.getElementById("locationTitle");
const homeImage = document.getElementById("homeImage");
const homeBackground = document.getElementById("homeBackground");
const starBackground = document.getElementById("starBackground");
const sunContainer = document.getElementById("sunContainer");
const sun = document.getElementById("sun");
const buttonContainer = document.getElementById("butonsContainer");
const buttonDecorations = document.getElementById("butonDecorations");

screen.orientation.lock("landscape-primary");

proyectsButton.addEventListener("click", () => {
    nextPage("proyects");
})

aboutButton.addEventListener("click", () => {
    nextPage("about");
})

settingsButton.addEventListener("click", () => {
    nextPage("settings");
})

function nextPage(pageName){
    locationTitle.setAttribute("class","reverse");
    homeImage.setAttribute("class","reverse");
    homeBackground.setAttribute("class","reverse");
    starBackground.setAttribute("class","reverse");
    sunContainer.setAttribute("class","reverse");
    sun.setAttribute("class","reverse");
    buttonContainer.setAttribute("class","reverse");
    buttonDecorations.style.display = "none";
    setTimeout(() => {
        locationTitle.style.display = "block";
        homeImage.style.display = "block";
        homeBackground.style.display = "block";
        starBackground.style.display = "block";
        sunContainer.style.display = "block";
        sun.style.display = "block";
        proyectsButton.style.display = "block";
        aboutButton.style.display = "block";
        settingsButton.style.display = "block";
    }, 1);

    setTimeout(() => {
        window.location.href = pageName + ".html";
    }, 1000)
}
