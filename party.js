
//PART1
//A user enters the website and finds a list of the names, dates, times, locations, and descriptions of all the parties that are happening.

    //use async function to input api
let data="";
const wrapper = document.getElementById("wrapper");
const formContainer = document.getElementById("formContainer");

async function allPartyMembers(){
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events");
    return await response.json();
}

//result of the promise
allPartyMembers().then((response) => {
    console.log(response.data)
    response.data.forEach((itm) => {
        createCard(itm);
    });
});


//display cards for each guest?

function createCard(info){
    const ele = document.createElement("div");
    const nameEle = document.createElement("h1");
    const desEle = document.createElement ("p");
    const db = document.createElement("button");

    nameEle.innerHTML=info.name;
    desEle.innerHTML = `Date: ${info.dates}<br>Time: ${info.times}<br>Location: ${info.locations}<br>Description: ${info.description}`;
    
    db.textContent = "Delete"
    db.addEventListener("click", async() =>{
        await deleteApiElement(info.id);
        ele.remove();
    });

    ele.appendChild(nameEle);
    ele.appendChild(desEle);
    ele.appendChild(db);

    wrapper.appendChild(ele);
}

async function deleteApiElement(elementId) {
}
    allPartyMembers().then((response) => {
        response.data.forEach((itm) => {
            createCard(itm);
        });
    });   

function createForm(){
    const form = document.createElement("form");

    const nameLabel = document.createElement("label")
    nameLabel.textContent = "Name: ";
    const nameInput = document.createElement("input")
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");

    const dateLabel = document.createElement("date")
    dateLabel.textContent = "Date: ";
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "date");

    const timeLabel = document.createElement("time")
    dateLabel.textContent = "Time: ";
    const timeInput = document.createElement("input");
    dateInput.setAttribute("type", "time");
    dateInput.setAttribute("name", "time");

    const locationLabel = document.createElement("location")
    dateLabel.textContent = "Location: ";
    const locationInput = document.createElement("input");
    dateInput.setAttribute("type", "text");
    dateInput.setAttribute("name", "location");

    const descriptionLabel = document.createElement("Description")
    dateLabel.textContent = "Description: ";
    const descriptionInput = document.createElement("input");
    dateInput.setAttribute("type", "text");
    dateInput.setAttribute("name", "description");

    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.textContent = "submit";
    
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));

    form.appendChild(dateLabel);
    form.appendChild(dateInput);
    form.appendChild(document.createElement("br"));

    form.appendChild(timeLabel);
    form.appendChild(timeInput);
    form.appendChild(document.createElement("br"));

    form.appendChild(locationLabel);
    form.appendChild(locationInput);
    form.appendChild(document.createElement("br"));

    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(document.createElement("br"));

    form.appendChild(submit);

    form.addEventListener("submit", async function(event){
        event.preventDefault();
        const formData = new (FormData);
    });
    formContainer.appendChild(form)
}

async function submitFormData(formData){
    try{
        const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events", {
            method:"POST",
            body: formData
        });
        if (response.ok) {
            const responseData = await response.json();
        }
    }catch (error){
        console.error("Error", error);
    }
}
function displayResponse(responseData) {
    const output = document.getElementById("output");
    output.textContent = JSON.stringify(responseData);
}

window.onload = () => {
    createForm();
};