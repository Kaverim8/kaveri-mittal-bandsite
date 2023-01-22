let commentArray = [];

function getCommentData () {
    axios
    .get(`https://project-1-api.herokuapp.com/comments/?api_key=${apikey}`)
    .then((response) => {
        commentArray = response.data;
        commentArray.sort((a,b) =>  new Date(b.timestamp) - new Date(a.timestamp));
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
    likeButtonEL.setAttribute('type', 'button')
    likeButtonEL.setAttribute('value', 'click')
    likeButtonEL.setAttribute('id', post.id);
    likeButtonEL.addEventListener('click', likeHandler);

    const likeCountEl = document.createElement('p');
    likeCountEl.classList.add("comments__like-count");
    likeCountEl.innerText = post.likes

    const deleteButtonEL = document.createElement("button");
    deleteButtonEL.classList.add("comments__btn-delete");
    deleteButtonEL.setAttribute('type', 'button')
    deleteButtonEL.setAttribute('id', post.id)
    deleteButtonEL.addEventListener('click', deleteHandler);

    commentButtonsFunctionalityEl.append(likeButtonEL, likeCountEl, deleteButtonEL);

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
};

const commentsFormEl = document.querySelector("#form");

function formSubmitHandler(e) {
    e.preventDefault();
    let commentData = {
        name: e.target.name.value,
        comment: e.target.comment.value,
    }

// this function is for post request
    axios
    .post(`https://project-1-api.herokuapp.com/comments/?api_key=${apikey}`, {
        name: commentData.name,
        comment: commentData.comment,
    })
    .then(() => {
        getCommentData();
    })
    .catch((error) => {
        console.log(error);
    });

    commentsFormEl.reset();
}

commentsFormEl.addEventListener("submit", formSubmitHandler);

// this function is to like the comment
function likeHandler (e) {
    e.preventDefault();
    
    let likeId = e.target.id;

    const incrementLike = () => {
        axios 
    .put(`https://project-1-api.herokuapp.com/comments/${likeId}/like?api_key=${apikey}`) 
    .then((response) => {
        getCommentData();
    })
    .catch((error) => {
        console.log(error);
    })
    };
    incrementLike();
}

// this function is to delete the comment
function deleteHandler (e) {
    e.preventDefault();
    
    let deleteId = e.target.id;

    const deleteComment = () => {
        axios 
    .delete(`https://project-1-api.herokuapp.com/comments/${deleteId}/?api_key=${apikey}`) 
    .then((response) => {
        getCommentData();
    })
    .catch((error) => {
        console.log(error);
    })
    };
    deleteComment();
}









