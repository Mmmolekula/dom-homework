import { comments } from "./comments.js";
import { fetchPost, token } from "./api.js";
import { renderLogin } from "./loginPage.js";
import { getComments } from "../index.js";
import { renderComments } from "./renderComments.js";

export function initLikesListeners() {
  const likeButtonsElements = document.querySelectorAll(".like-button");

  for (let likeButtonElement of likeButtonsElements) {
    likeButtonElement.addEventListener("click", (event) => {
      event.stopPropagation();
      const indexL = likeButtonElement.dataset.index;
      let comment = comments[indexL];
      comment.likes = comment.isLiked ? comment.likes - 1 : comment.likes + 1;
      comment.isLiked = !comment.isLiked;

      renderComments();
    });
  }
}

export function commentQuote() {
  const text = document.getElementById("text-input");
  for (const comment of document.querySelectorAll(".comment")) {
    comment.addEventListener("click", (event) => {
      event.stopPropagation();
      const currentComment = comments[comment.dataset.index];
      text.value = `${currentComment.author.name}:
${currentComment.text}`;
    });
  }
}

export function formAction() {
  if (!token) return;
  const name = document.getElementById("name-input");
  const text = document.getElementById("text-input");

  const addButton = document.querySelector(".add-form-button");
  addButton.addEventListener("click", () => {

    name.classList.remove("error");
    text.classList.remove("error");

    if (!name.value.trim()) {
      name.classList.add("error");
      return;
    } 
    if (!text.value.trim()) {
      text.classList.add("error");
      alert("Комментарий не может быть пустым.");
      return;
    } else if (text.value.trim().length < 3) {
      text.classList.add("error");
      alert("Комментарий должен содержать не менее 3 символов.");
      return;
    }

    addButton.disabled = true;
    addButton.textContent = "Комментарий добавляется...";
    addButton.style.fontSize = "16px";

    postComment();

    function postComment() {
      fetchPost({ text, name })
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
          console.log(error);
          addButton.disabled = false;
          addButton.textContent = "Написать";
          addButton.style.fontSize = "24px";
        });
    }
  });
}

export function authAction() {
  if (token) return;
  const loginLink = document.getElementById("login-link");
  loginLink.addEventListener("click", () => {
    renderLogin();
  });
}
