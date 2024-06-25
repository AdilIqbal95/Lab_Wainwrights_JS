const filterContainer = document.querySelector("#filterContainer")
const wainwrightsContainer = document.querySelector("#wainwrightsContainer")
const wainwrightsList = document.querySelector("#wainwrights-list")
let wainwrightData;

const getAllWainWrights = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json');
        const data = await response.json();
        
        wainwrightData = data;
        displayData(data)    
    } catch (error) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Unable to load data: ${error}`;
        errorMessage.id = "error-message";
        wainwrightsContainer.appendChild(errorMessage);
        // console.log(error);
    }
    
}
getAllWainWrights();

// Create form
const filterFormElement = document.createElement("form");
filterFormElement.id = "filter-form"
filterFormElement.setAttribute("method", "get");
filterContainer.appendChild(filterFormElement);
const filterForm = document.querySelector("#filter-form");

const filterFormInput = document.createElement("input");
filterFormInput.setAttribute("type", "text");
filterFormInput.setAttribute("name", "search");
filterFormInput.setAttribute("placeholder", "Enter search term...");
filterFormInput.id = "filter-form-search-bar"

const filterFormSubmitBtn = document.createElement("input");
filterFormSubmitBtn.setAttribute("type", "submit");
filterFormSubmitBtn.setAttribute("value", "Search");

filterForm.appendChild(filterFormInput)
filterForm.appendChild(filterFormSubmitBtn)


// Filtering
filterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchInput = event.target["filter-form-search-bar"].value.toLowerCase();
    filterForm.reset()
    if (searchInput == "") {
        displayData(wainwrightData)
    } else {
        const filteredData = wainwrightData.filter(item => item.name.toLowerCase().includes(searchInput));
        filterResults(searchInput);
    }

    
})

const filterResults = (searchInput) => {
    let filteredDataArr = []
    wainwrightData.forEach(element => {
        if (element.name.toLowerCase().includes(searchInput)) {
            filteredDataArr.push(element)
        }
    })
    displayData(filteredDataArr)
}

// Display data
const displayData = (data) => {
    
    wainwrightsList.textContent = ''

    data.forEach(element => {
    
    const nameNoSpace = element.name.replace(/\s+/g,'-').toLowerCase(); // replace spaces with '-'
    // Create elements
    const hillName = document.createElement("h2");
    hillName.textContent = element.name;
    hillName.id = nameNoSpace + "-name";

    const hillHeightMetres = document.createElement("p");
    hillHeightMetres.textContent = "Height (m): " + element.heightMetres;
    hillHeightMetres.id = nameNoSpace + "-height-m";

    const hillHeightFeet = document.createElement("p");
    hillHeightFeet.textContent = "Height (ft): " + element.heightFeet;
    hillHeightFeet.id = nameNoSpace + "-height-ft";

    const hillLatitude = document.createElement("p");
    hillLatitude.textContent = "Latitude: " + element.latitude;
    hillLatitude.id = nameNoSpace + "-lat";

    const hillLongitude = document.createElement("p");
    hillLongitude.textContent = "Longitude: " + element.longitude;
    hillLongitude.id = nameNoSpace + "-long";

    const areaName = document.createElement("p");
    areaName.textContent = "Area name: " + element.area.areaName;
    areaName.id = nameNoSpace + "-area-name";

    const localTowns = document.createElement("p");
    localTowns.textContent = "Local towns: " + element.area.localTowns
    localTowns.id = nameNoSpace + "-area-name";

    const about = document.createElement("p");
    about.textContent = "About: " + element.area.about
    about.id = nameNoSpace + "-about";
    
    // Append the elements

    wainwrightsList.appendChild(hillName);
    wainwrightsList.appendChild(hillHeightMetres);
    wainwrightsList.appendChild(hillHeightFeet);
    wainwrightsList.appendChild(hillLatitude);
    wainwrightsList.appendChild(hillLongitude);
    wainwrightsList.appendChild(areaName);
    wainwrightsList.appendChild(localTowns);
    wainwrightsList.appendChild(about);
    })

}


