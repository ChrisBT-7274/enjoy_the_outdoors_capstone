"use strict"

const main = document.querySelector("#main");
const locationDiv = document.querySelector('#locationDiv');
const parkDiv = document.querySelector("#parkDiv");

const locationTable = document.querySelector("#locationTable");
const parkTypeTable = document.querySelector("#parkTypeTable");



window.onload = init;

function init(){
console.log(main);
createAndLoadLocationDropDown().addEventListener('change',()=> {
searchAndPopulateParksByState();
})
createAndLoadParkTypeDropDown().addEventListener('change', ()=>{
    searchAndPopulateParksByType();
});
}

function createAndLoadLocationDropDown(){

    
    let locationSelectElement = document.createElement('select');
    locationSelectElement.id = "locationDropDown"
   


    for(let i = 0; i<locationsArray.length; i++){

        let option = document.createElement('option');

        if(i==0){
            option.innerHTML = "Select Location..."
            
        } else {
            option.innerHTML = `${locationsArray[i-1]}`;
        }

        locationSelectElement.appendChild(option);

    }
  

    locationDiv.appendChild(locationSelectElement);
 

  return locationSelectElement;

}

function createAndLoadParkTypeDropDown(){

   
    let parkSelectElement = document.createElement('select');
    parkSelectElement.id = "parkTypeDropDown";


    for(let i = 0; i<parkTypesArray.length; i++){

        let option = document.createElement('option');

        if(i==0){
            option.innerHTML = "Select Park Type..."
            
        } else {
            option.innerHTML = `${parkTypesArray[i-1]}`;
        }

        parkSelectElement.appendChild(option);

    }
  

    parkDiv.appendChild(parkSelectElement);

    return parkSelectElement;
}


function searchAndPopulateParksByState(){

    let selectedLocation = document.getElementById("locationDropDown");
    let valuee = selectedLocation.value;

    locationTable.innerHTML = "";
  let matchedArray = [];

nationalParksArray.forEach(((park) =>{

    if(park.State === valuee){

        matchedArray.push(park);
   
    } 

}

))


if(matchedArray.length > 0){
for( let park of matchedArray){

    addToTable(park, locationTable)
}

}  else {
    let row = locationTable.insertRow();
    row.innerHTML = "No records to show"
}




}




function searchAndPopulateParksByType(){


    let selectedType = document.getElementById("parkTypeDropDown");
    let valuee = selectedType.value;

    parkTypeTable.innerHTML = "";
  
    let matchedArray = []


nationalParksArray.forEach(((park) =>{

    if(park.LocationName.includes(valuee)){
       
       matchedArray.push(park)
    }

}))


if(matchedArray.length > 0){
    for( let park of matchedArray){
    
        addToTable(park, parkTypeTable)
    }
    
    }  else {
        let row = parkTypeTable.insertRow();
        row.innerHTML = "No records to show"
    }

}


function addToTable(park,table){

    let row = table.insertRow(0);

    let cell0 = row.insertCell(0);
    cell0.innerHTML = park.LocationName;

    let cell1 = row.insertCell(1);
    cell1.innerHTML = park.Address;

    let cell2 = row.insertCell(2);
    cell2.innerHTML = park.State;

    let cell3 = row.insertCell(3);
    cell3.innerHTML = park.Phone;


}