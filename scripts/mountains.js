"use strict"

window.onload = () => {

    initMountainsDropdown();

    let mountainsDropdown = document.querySelector("#mountainSelect")

    mountainsDropdown.addEventListener("change", displayMountainCard)

}

function displayMountainCard(event) {

    let mountainsDiv = document.querySelector("#mountains");

    mountainsDiv.innerHTML = "";

    let mountain = mountainsArray.find((mountain) => mountain.name === event.target.value)


    //add cards
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "w-50");

    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top", "card-img-fit", "card-img-center");

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


    //card details goes here
    cardText.innerHTML = `
      ${mountain.desc} The elevation of this mountain is ${mountain.elevation}ft high!! This mountain is going to take a ${mountain.effort} amount of effort to climb. You can find this mountain through the provided coordinates: ${mountain.coords.lat} ${mountain.coords.lng}.`

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
