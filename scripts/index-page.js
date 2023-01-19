let commentArray = [];
console.log(commentArray);

function getCommentData () {
    axios
    .get(`https://project-1-api.herokuapp.com/comments/?api_key=${apikey}`)
    .then((response) => {
        const holdingData = response.data;
        holdingData.forEach(element => {
        commentArray.push(element);
        // commentArray.reverse();
    });
        displayComments();
    })
    .catch((error) => {
        console.log(error);
    });
};
getCommentData();

function createCommentCard(post){
    
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
    
    
    const formattedDate = new Date(post.timestamp);
    const newDate = `${formattedDate.getMonth()+1}/${formattedDate.getDate()}/${formattedDate.getFullYear()}`;
    dateEl.innerText = newDate;
    
    
    const nameEl = document.createElement("p");
    nameEl.classList.add("comments__content--person");
    nameEl.innerText = post.name;

    commentContentEl.append(nameEl, dateEl);

    const commentTextEl = document.createElement("div");
    commentTextEl.classList.add("comments__text");

    const commentEl = document.createElement("p");
    commentEl.innerText = post.comment;

    const commentButtonsFunctionalityEl = document.createElement("div");
    commentButtonsFunctionalityEl.classList.add("comments__btn");

    const likeButtonEL = document.createElement("button");
    likeButtonEL.classList.add("comments__btn-like");
    likeButtonEL.setAttribute('id', 'like')

    const deleteButtonEL = document.createElement("button");
    deleteButtonEL.classList.add("comments__btn-delete");
    deleteButtonEL.setAttribute('id', 'comment-id')
    
    commentButtonsFunctionalityEl.append(likeButtonEL, deleteButtonEL);

    commentTextEl.append(commentEl, commentButtonsFunctionalityEl);


    commentMainContentEl.append(commentContentEl, commentTextEl);

    cardEl.append(commentImageEl, commentMainContentEl);

    return cardEl;
}

function displayComments() {
    const myCommentsEl = document.querySelector("#Comments");

    myCommentsEl.innerHTML = "";

    for (let i = 0; i < commentArray.length; i++) {
        myCommentsEl.appendChild(createCommentCard(commentArray[i]));
    }

    // for (let i = commentArray.length-1; i >= 0; i--) {
    //     myCommentsEl.appendChild(createCommentCard(commentArray[i]));
    // }
}

const commentsFormEl = document.querySelector("#form");

function formSubmitHandler(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;
    let currentDate = new Date();
    // let commentData = {
    //     name: document.getElementById('name').value,
    //     comment: document.getElementById('comment').value,
    //     timestamp: `${currentDate.getSeconds()}` + " " + 'seconds ago',
    // }

    axios
    .post(`https://project-1-api.herokuapp.com/comments/?api_key=${apikey}`, {
        name: name,
        comment: comment,
        // timestamp: `${currentDate.getSeconds()}` + " " + 'seconds ago',
    })
    .then((response) => {
        
        // this is added for displaying comments on top
        commentArray.push(response.data);
        // commentArray.sort();
        // commentArray.reverse();
        commentArray.unshift(response.data);
        
        
    })
    .then((res) => {
        displayComments();
    })
    .catch((error) => {
        console.log(error);
    });

    commentsFormEl.reset();
    displayComments();
}

commentsFormEl.addEventListener("submit", formSubmitHandler);
displayComments();
// getCommentData();



