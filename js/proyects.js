const proyectConatainer = document.getElementById("proyectContainer");
const proyectsList = document.getElementById("proyectsList");
const selectedProyect = document.getElementById("selectedProyect");
const proyectTitle = document.getElementById("proyectTitle");
const pName = document.getElementById("name");
const pType = document.getElementById("type");
const proyectTechs = document.getElementById("proyectTechs");
const proyectDescription = document.getElementById("proyectDescription");
const proyectImage = document.getElementById("proyectImage");
const closeButton = document.getElementById("close");

fetch("../info/proyects.json")
.then(result => result.json())
.then(data => showProyects(data));

closeButton.addEventListener("click", () => {
    proyectsList.removeAttribute("class");
    proyectTitle.setAttribute("class","reverse");
    proyectTechs.setAttribute("class","reverse");
    proyectDescription.setAttribute("class","reverse");
    proyectImage.setAttribute("class","reverse");
    closeButton.setAttribute("class","reverse");
    proyectTitle.style.display = "none";
    proyectTechs.style.display = "none";
    proyectDescription.style.display = "none";
    proyectImage.style.display = "none";
    closeButton.style.display = "none";
    setTimeout(() => {
        proyectsList.style.display = "block";
        proyectTitle.style.display = "block";
        proyectTechs.style.display = "flex";
        proyectDescription.style.display = "flex";
        proyectImage.style.display = "block";
        closeButton.style.display = "block";
    },1)

    setTimeout(() => {
        selectedProyect.style.display = "none";
    },750)
})

function showProyects(proyects){
    proyectConatainer.innerHTML = "";
    proyects.forEach(proyect => {
        let proyectDiv = document.createElement("div");
        proyectDiv.setAttribute("class","proyect");
        let proyectType = document.createElement("h2");
        proyectType.innerText = proyect.type;
        let proyectName = document.createElement("p");
        proyectName.innerText = proyect.name;

        proyectDiv.appendChild(proyectType);
        proyectDiv.appendChild(proyectName);

        proyectDiv.addEventListener("click", () => {

            pName.innerText = proyect.name;
            pType.innerText = proyect.type;
            proyectDescription.innerHTML = proyect.description;
            proyectImage.style.backgroundImage = "url("+proyect.image+")";
            proyectTechs.innerHTML = "";
            proyect.techs.forEach(tech => {
                let techLi = document.createElement("li");
                techLi.innerText = tech;
                proyectTechs.appendChild(techLi);
            });

            proyectsList.setAttribute("class","reverse");
            proyectsList.style.display = "none";
            proyectTitle.removeAttribute("class");
            proyectTechs.removeAttribute("class");
            proyectDescription.removeAttribute("class");
            proyectImage.removeAttribute("class");
            closeButton.removeAttribute("class");
            setTimeout(() => {
                proyectsList.style.display = "block";
                selectedProyect.style.display = "grid";
            },1)

            setTimeout(() => {
                proyectsList.style.display = "none";
            },750)
        })

        proyectConatainer.appendChild(proyectDiv);
    });
}