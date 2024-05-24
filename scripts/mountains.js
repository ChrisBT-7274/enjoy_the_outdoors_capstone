"use strict"

window.onload = () => {

    initMountainsDropdown();

    let mountainsDropdown = document.querySelector("#mountainSelect")

    mountainsDropdown.addEventListener("change", displayMountainCard)

}

function displayMountainCard(event) {

    let mountainsDiv = document.querySelector("#mountainsArray");

    mountainsDiv.innerHTML = "";

    let mountain = mountainsArray.find((mountain) => mountain.name === event.target.value)


    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "w-25");

    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top", "card-img-fit");

    cardImage.src = mountain.img;
    cardImage.alt = mountain.name;

    cardDiv.appendChild(cardImage);

    let cardBody = document.createElement("div")
    cardDiv.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");


    cardTitle.innerText = mountain.name;


    cardBody.appendChild(cardTitle);


    let cardText = document.createElement("p");
    cardTitle.classList.add("card-text");

    cardText.innerHTML = `
      ${mountain.name} --- ${mountain.desc}. --- ${mountain.elevation} ----- ${mountain.coords}.`

    cardBody.appendChild(cardText);

    cardDiv.appendChild(cardBody)

    mountainsDiv.appendChild(cardDiv)
}

function initMountainsDropdown() {
    let mountainsDropdown = document.querySelector("#mountainSelect");

    let defaultOption = document.createElement("option");

    defaultOption.value = "";

    defaultOption.textContent = "Select a Mountain...";

    mountainsDropdown.appendChild(defaultOption);

    mountainsArray.forEach((mountain) => {
        let newOption = document.createElement("option");

        newOption.value = mountain.name;

        newOption.textContent = mountain.name;

        mountainsDropdown.appendChild(newOption);
    })

}
