let pButton = document.getElementById("p-button");
let pDiv = document.getElementById("p-div");
let pCounter = document.getElementById("p-count")
let pCount = 0;

let imgButton = document.getElementById("img-button");
let imgDiv = document.getElementById("img-div");
let imgCounter = document.getElementById("img-count");
let imgCount = 0;

let nothingButton = document.getElementById("nothing-button");
let nothingDiv = document.getElementById("nothing-div");
let nothingCounter = document.getElementById("nothing-count");
let nothingCount = 0;

pDiv.style.flexDirection = "column";
imgDiv.style.flexWrap = "wrap";

pButton.onclick = () => {
    imgDiv.style.display = "none";
    nothingDiv.style.display = "none";
    pDiv.style.display = "flex";

    let text = document.createElement("p")
    text.textContent = "Hot chocolate is bad today";
    text.style.padding = "8px";
    text.style.color = "white";
    text.style.backgroundColor = "black";

    pDiv.appendChild(text)

    pCount++;
    pCounter.innerHTML = `pCount: ${pCount}`
}

imgButton.onclick = () => {
    pDiv.style.display = "none";
    nothingDiv.style.display = "none";
    imgDiv.style.display = "flex";

    let img = document.createElement("img");
    img.src =
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png";
    img.style.width = "150px";
    img.style.height = "150px";
    imgDiv.appendChild(img);

    imgCount++;
    imgCounter.innerHTML = `imgCount: ${imgCount}`;
}

nothingButton.onclick = () => {
    pDiv.style.display = "none";
    imgDiv.style.display = "none";
    nothingDiv.style.display = "flex";

    nothingCount++;
    nothingCounter.innerHTML = `nothingCount: ${nothingCount}`;
}