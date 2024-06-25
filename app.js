const wainwrightsContainer = document.querySelector("#wainwrightsContainer")
const wainwrightsList = document.querySelector("#wainwrights-list")

const getAllWainWrights = async () => {
    const response = await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json');
    const data = await response.json();
    
    
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

        
    });

    console.log();
    return data;
}

getAllWainWrights()

// const displayData = async (data) => {

// }

// To be displayed
// name -> area (not inclusive of area)
// 


