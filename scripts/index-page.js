const commentArray = [
    {
        name: "Conor Walton",
        timeStamp: "02/17/2021",
        comment: `This is art. This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.`,
        image: " ",
    },
    {
    name: "Emilie Beach",
    timeStamp: "01/09/2021",
    comment: `I feel blessed to have seen them in person. What a show! They were just perfection. If therewas one day of my life I could relive, this wouldbe it. What an incredible day.`,
    image: " ",
    },
    {
        name: "Miles Acosta",
        timeStamp: "12/20/2020",
        comment: `I can't stop listening. Every time I hear one of their songs - the  vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough`,
        image: " ",      
    },
];

function createCommentCard(post) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("comments");

    const commentImageEl = document.createElement("div");
    commentImageEl.classList.add("comments__image");


    const commentContentEl = document.createElement("div");
    commentContentEl.classList.add("comments__content");

    const dateEl = document.createElement("p");
    dateEl.classList.add("comments__date");
    dateEl.innerText = post.timeStamp;
    
    const nameEl = document.createElement("p");
    nameEl.classList.add("comments__person");
    nameEl.innerText = post.name;

    commentContentEl.append(nameEl, dateEl);
    
    const commentTextEl = document.createElement("div");
    commentTextEl.classList.add("comments__text");

    const commentEl = document.createElement("p");
    commentEl.innerText = post.comment;

    commentTextEl.append(commentEl);

    cardEl.append(commentImageEl, commentContentEl, commentTextEl);

    return cardEl;
}

function renderComments() {
    const myCommentsEl = document.querySelector("#Comments");

    myCommentsEl.innerHTML = "";

    for (let i = 0; i < commentArray.length; i++) {
        myCommentsEl.appendChild(createCommentCard(commentArray[i]));
    }
}

const commentsFormEl = document.querySelector("#form");

function formSubmitHandler(e) {
    e.preventDefault();

const dateNow = new Date();
const commentData = {
    name: e.target.name.value,
    timeStamp: (dateNow.getMonth()+1) + '/' + dateNow.getDate() + '/' + dateNow.getFullYear(),
    comment: e.target.comment.value,
};

console.log(commentData);

commentsFormEl.reset();
commentArray.push(commentData);
renderComments();

}

commentsFormEl.addEventListener("submit", formSubmitHandler);
renderComments();






// formEl.reset();
// const commentSubmission = {
//     name: e.target.name.checked,
//     comment: e.target.comment.checked,
//     image: e.target.image.value
// }

// console.log(commentSubmission); 