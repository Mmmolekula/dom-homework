import { comments } from './commentsData.js';
import { renderComments } from './render.js';
import { initLikesListeners, commentQuote } from './eventListeners.js';

const name = document.getElementById("name-input");
const text = document.getElementById("text-input");
const list = document.querySelector(".comments");
const addButton = document.querySelector(".add-form-button");

const renderApp = () => {
  renderComments(comments, list, () => initLikesListeners(comments, renderApp), () => commentQuote(comments, text));
};

renderApp();

addButton.addEventListener("click", (event) => {
  name.classList.remove("error");
  text.classList.remove("error");
  if (!name.value.trim()) {
    name.classList.add("error");
    return;
  } else if (!text.value.trim()) {
    text.classList.add("error");
    return;
  }

  comments.push({
    name: name.value,
    text: text.value,
    date: new Date(),
    likes: 0,
    isLiked: false,
  });

  renderApp();

  name.value = "";
  text.value = "";
});