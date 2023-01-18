const apikey = "ebd4424c-8699-41a7-bfb5-50dc374276fd";

let commentArray = [];
console.log(commentArray);

// const getCommentData = () => {
//     axios
//     .get(`https://project-1-api.herokuapp.com/comments/?api_key=${apikey}`)
//     .then((response) => {
//         const commentResponse = response.data;
//         console.log(response);
//         displayComments(commentResponse);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// };
// getCommentData();
const getCommentData = () => {
    axios
    .get(`https://project-1-api.herokuapp.com/comments/?api_key=${apikey}`)
    .then((response) => {
        const holdingData = response.data;
        holdingData.forEach(element => {
            commentArray.push(element);
        });
    }).then((commentResponse) => {
        displayComments();
    })
    .catch((error) => {
        console.log(error);
    });
};
getCommentData();


function createCommentCard(post) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("comments", "comments--border");

    const commentImageEl = document.createElement("div");
    commentImageEl.classList.add("comments__image");

    const commentMainContentEl = document.createElement("div");
    commentMainContentEl.classList.add("comments__main-content")

    const commentContentEl = document.createElement("div");
    commentContentEl.classList.add("comments__content");

    const dateEl = document.createElement("p");
    dateEl.classList.add("comments__content--date");
    
    
    const formattedDate = new Date(commentArray.timestamp);
    // console.log(formattedDate.getDate());
    const newDate = `${formattedDate.getMonth()+1}/${formattedDate.getDate()}/${formattedDate.getFullYear()}`;
    dateEl.innerText = newDate;
    
    
    const nameEl = document.createElement("p");
    nameEl.classList.add("comments__content--person");
    nameEl.innerText = commentArray.name;

    commentContentEl.append(nameEl, dateEl);

    const commentTextEl = document.createElement("div");
    commentTextEl.classList.add("comments__text");

    const commentEl = document.createElement("p");
    commentEl.innerText = commentArray.comment;

    const likeButtonEL = document.createElement("button");
    likeButtonEL.classList.add("comments__like");

    const deleteButtonEL = document.createElement("button");
    deleteButtonEL.classList.add("comments__delete");
    

    commentTextEl.append(commentEl, likeButtonEL, deleteButtonEL)

    // commentTextEl.append(commentEl);

    commentMainContentEl.append(commentContentEl, commentTextEl);

    cardEl.append(commentImageEl, commentMainContentEl);

    return cardEl;
}

function displayComments() {
    const myCommentsEl = document.querySelector("#Comments");

    myCommentsEl.innerHTML = "";

    // for (let i = 0; i < commentArray.length; i++) {
    //     myCommentsEl.appendChild(createCommentCard(commentArray[i]));
    // }

    for (let i = commentArray.length; i >= 0; i--) {
        myCommentsEl.appendChild(createCommentCard(commentArray[i]));
            console.log (commentArray[i]);
    }
}

const commentsFormEl = document.querySelector("#form");

function formSubmitHandler(e) {
    e.preventDefault();

// const dateNow = new Date();
// const commentData = {
//     name: e.target.name.value,
//     timeStamp: (dateNow.getMonth()+1) + '/' + dateNow.getDate() + '/' + dateNow.getFullYear(),
//     comment: e.target.comment.value,
// };
    let name = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;


    axios
    .post(`https://project-1-api.herokuapp.com/comments/?api_key=${apikey}`, {
        name: name,
        comment: comment
    })
    .then((response) => {
        commentArray.push(response.data);
    })
    .then((res) => {
        displayComments();
    })
    .catch((error) => {
        console.log(error);
    });
    commentsFormEl.reset();
    displayComments();
// commentsFormEl.reset();
// commentArray.unshift(commentData);
// displayComments();
}

commentsFormEl.addEventListener("submit", formSubmitHandler);
displayComments();
