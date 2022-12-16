let showsArray = [{
    day: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco,CA" 
},
{
    day: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco,CA" 
},
{
    day: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco,CA" 
},
{
    day: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco,CA"
},
{
    day: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco,CA",
},
];

function createShowsCard(show) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("shows__details");

    // This is for date and day of shows
    const dateEl = document.createElement("div");
    dateEl.classList.add("shows__date");

    const dateParagraphEl = document.createElement("p")
    dateParagraphEl.classList.add("span");
    dateParagraphEl.innerText = "Date";

    const dayEl = document.createElement("p");
    dayEl.innerText = show.day;

    dateEl.append(dateParagraphEl, dayEl);

    // This is for venue of the shows
    const venueEl = document.createElement("div");
    venueEl.classList.add("shows__venue");

    const venueParagraphEl = document.createElement("p")
    venueParagraphEl.classList.add("span");
    venueParagraphEl.innerText = "Venue";

    const addressEl = document.createElement("p");
    addressEl.innerText = show.venue;

    venueEl.append(venueParagraphEl, addressEl);

    // This is for location of the shows
    const locationEl = document.createElement("div");
    locationEl.classList.add("shows__location");

    const locationParagraphEl = document.createElement("p")
    locationParagraphEl.classList.add("span");
    locationParagraphEl.innerText = "Location";

    const cityEl = document.createElement("p");
    cityEl.innerText = show.location;

    locationEl.append(locationParagraphEl, cityEl);

    cardEl.append(dateEl, venueEl, locationEl);

    return cardEl;
}

// createShowsCard();

function renderShows() {
    const showsListEl = document.querySelector("#shows")

    showsListEl.innerText = "";

    for (let i = 0; i < showsArray.length; i++) {
        showsListEl.appendChild(createShowsCard(showsArray[i]));
    }
}

renderShows();