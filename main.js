import { fetchGet, fetchPost } from "./api.js";
import { renderComments } from "./render.js";

export let comments = [];

const name = document.getElementById("name-input");
const text = document.getElementById("text-input");


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

const addButton = document.querySelector(".add-form-button");
addButton.addEventListener("click", () => {
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