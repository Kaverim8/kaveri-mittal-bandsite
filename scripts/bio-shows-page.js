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
    cardEl.setAttribute('id', 'shows-effects')
    cardEl.classList.add("shows__details");

    const showsEl = document.createElement("article");
    showsEl.classList.add("shows__main-content");

    // This is for date and day of shows
    const dateEl = document.createElement("div");
    dateEl.classList.add("shows__sub-content");

    const dateParagraphEl = document.createElement("h3")
    dateParagraphEl.classList.add("shows__sub-content--color");
    dateParagraphEl.innerText = "Date";

    const dayEl = document.createElement("p");
    dayEl.classList.add("shows__sub-content--font-weight")
    dayEl.innerText = show.day;

    dateEl.append(dateParagraphEl, dayEl);

    // This is for venue of the shows
    const venueEl = document.createElement("div");
    venueEl.classList.add("shows__sub-content");

    const venueParagraphEl = document.createElement("h3")
    venueParagraphEl.classList.add("shows__sub-content--color");
    venueParagraphEl.innerText = "Venue";

    const addressEl = document.createElement("p");
    addressEl.innerText = show.venue;

    venueEl.append(venueParagraphEl, addressEl);

    // This is for location of the shows
    const locationEl = document.createElement("div");
    locationEl.classList.add("shows__sub-content");

    const locationParagraphEl = document.createElement("h3")
    locationParagraphEl.classList.add("shows__sub-content--color");
    locationParagraphEl.innerText = "Location";

    const cityEl = document.createElement("p");
    cityEl.innerText = show.location;

    const BuyTicketsEl = document.createElement("div")
    BuyTicketsEl.classList.add("shows__shows-button")

    const BuyNowEl = document.createElement("button");
    BuyNowEl.classList.add("shows__buynow-button");
    BuyNowEl.innerText = "BUY TICKETS";

    BuyTicketsEl.append(BuyNowEl)

    locationEl.append(locationParagraphEl, cityEl);

    showsEl.append(dateEl, venueEl, locationEl, BuyTicketsEl);

    cardEl.appendChild(showsEl);

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

const showsOnClick = document.querySelector("#shows__effects");
