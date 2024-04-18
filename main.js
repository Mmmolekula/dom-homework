import { fetchGet, fetchPost } from "./api.js";
import { renderComments } from "./render.js"

export let comments = [];

const name = document.getElementById("name-input");
const text = document.getElementById("text-input");

// const list = document.querySelector(".comments");

document.querySelector(".comments").textContent = 
    "Комментарии подгружаются... Пожалуйста, подождите.";
document.querySelector(".add-form-button").disabled = true;

function getComments() {
fetchGet()
  .then((responseData) => {
    comments = responseData.comments;
    renderComments();
    document.querySelector(".add-form-button").disabled = false;
     })
  .catch((error) => {
    alert(error);
    console.log(error)
  })    
    };
  
getComments();

export const initLikesListeners = () => {
  const likeButtonsElements = document.querySelectorAll(".like-button");

  for (let likeButtonElement of likeButtonsElements) {
    likeButtonElement.addEventListener("click", (event) => {
      event.stopPropagation();   
      const indexL = likeButtonElement.dataset.index;
      let comment = comments[indexL];
      comment.likes = comment.isLiked ? comment.likes - 1 : comment.likes + 1;
      comment.isLiked = !comment.isLiked;

      renderComments();
    })
  }
}


// const renderComments = () => {

//   list.innerHTML = comments.map((comment, index) => {
//     return `
//     <li class="comment" data-index="${index}">
//       <div class="comment-header">
//         <div>${comment.author.name
//           .replaceAll("%BEGIN_QUOTE", "<div class='quote'>")
//           .replaceAll("END_QUOTE%", "</div>")
//           .replaceAll("<", "&lt;")
//           .replaceAll(">", "&gt;")}</div>
//         <div>${new Date(comment.date).toLocaleDateString()} 
//             ${new Date(comment.date).toLocaleTimeString()}</div>
//       </div>
//       <div class="comment-body">

//         <div class="comment-text">
//           ${comment.text
//           .replaceAll("%BEGIN_QUOTE", "<div class='quote'>")
//           .replaceAll("END_QUOTE%", "</div>")
//           .replaceAll("<", "&lt;")
//           .replaceAll(">", "&gt;")}</div>
//       </div>
//       <div class="comment-footer">
//         <div class="likes">
//           <span class="likes-counter">${comment.likes}</span>лайка
//           <button data-index="${index}" class="like-button ${comment.isLiked ? "-active-like" : ""
//         }"></button>
//           </div>
//         </div>
//       </li>
//   `
//   }).join("")

//   initLikesListeners();
//   commentQuote();

// };

const addButton = document.querySelector(".add-form-button");
addButton.addEventListener("click", (event) => {
  // event.stopPropagation();
  name.classList.remove("error");
  text.classList.remove("error");
  if (!name.value.trim()) {
    name.classList.add("error");
    return;
  }
  else if (!text.value.trim()) {
    text.classList.add("error");
    return;
  };

  addButton.disabled = true;
  addButton.textContent = "Комментарий добавляется...";
  addButton.style.fontSize = "16px";

  postComment();

function postComment() {
  fetchPost({text, name})
  .then(() => {
    getComments();
  })
  .then(() => {
    addButton.disabled = false;
    addButton.textContent = "Написать";
    addButton.style.fontSize = "24px";
    name.value = "";
    text.value = "";
  })
  .catch((error) => {
    alert(error);
    console.log(error)
    addButton.disabled = false;
    addButton.textContent = "Написать";
    addButton.style.fontSize = "24px";
   })
  };
});

export function commentQuote() {
for (const comment of document.querySelectorAll('.comment')) {
comment.addEventListener ("click", (event) => {
  event.stopPropagation();
  const currentComment = comments[comment.dataset.index];
  text.value = `${currentComment.author.name}:
  ${currentComment.text}`;
    });
  }
};