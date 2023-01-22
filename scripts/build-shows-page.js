let showsArray = [];

const getShowsData = () => {
    axios 
    .get(`https://project-1-api.herokuapp.com/showdates/?api_key=${apikey}`)
    .then((response) => {
        showsArray = response.data;
        renderShows();
    })
    .catch((error) => {
    console.log(error);
    })
};

getShowsData();


function createShowsCard(show) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("shows__details");

    const showsEl = document.createElement("article");
    showsEl.classList.add("shows__main-content");

    // This is for date and day of shows
    const dateEl = document.createElement("div");
    dateEl.classList.add("shows__sub-content");

    const dateParagraphEl = document.createElement("h3")
    dateParagraphEl.classList.add("shows__labels");
    dateParagraphEl.innerText = "Date";

    const dayEl = document.createElement("p");
    dayEl.classList.add("shows__sub-content--font-weight")
    const formattedDate = new Date(show.date);
    const newDate = `${formattedDate.toDateString()}`
    dayEl.innerText = newDate;

    dateEl.append(dateParagraphEl, dayEl);

    // This is for venue of the shows
    const venueEl = document.createElement("div");
    venueEl.classList.add("shows__sub-content");

    const venueParagraphEl = document.createElement("h3")
    venueParagraphEl.classList.add("shows__labels");
    venueParagraphEl.innerText = "Venue";

    const addressEl = document.createElement("p");
    addressEl.innerText = show.place;

    venueEl.append(venueParagraphEl, addressEl);

    // This is for location of the shows
    const locationEl = document.createElement("div");
    locationEl.classList.add("shows__sub-content");

    const locationParagraphEl = document.createElement("h3")
    locationParagraphEl.classList.add("shows__labels");
    locationParagraphEl.innerText = "Location";

    const cityEl = document.createElement("p");
    cityEl.classList.add("shows__labels--city");
    cityEl.innerText = show.location;

    // this is for buy tickets button
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

function renderShows() {
    const showsListEl = document.querySelector("#shows")

    showsListEl.innerText = "";

    for (let i = 0; i < showsArray.length; i++) {
        showsListEl.appendChild(createShowsCard(showsArray[i]));
    }
}
renderShows();

// shows page stay selected function
const showOnClick =  document.querySelectorAll(".shows__details");
showOnClick.forEach(shows__details => {
    shows__details.addEventListener ('mousedown', function() {
    const selection = document.getElementById("active");
    if (selection === null) {
        shows__details.setAttribute('id', "active");
    } else {
        selection.removeAttribute('id');
        shows__details.setAttribute('id', "active");
    } 
        });
});
