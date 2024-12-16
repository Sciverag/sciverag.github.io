const proyectConatainer = document.getElementById("proyectContainer");

fetch("../info/proyects.json")
.then(result => result.json())
.then(data => showProyects(data))

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

        proyectConatainer.appendChild(proyectDiv);
    });
}