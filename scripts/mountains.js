"use strict"

window.onload = () => {

    innitMountainsDropdown();

    mountainsDropdown = document.querySelector("#mountainSelect")

    mountainsDropdown.mountainsDropdown("change", displayMountainCard)

}

function displayMountainCard(event){

    let mountainsDiv = document.querySelector("#mountains");

    //clears out the prevous pet
    mountainsDiv.innerHTML = "";

}