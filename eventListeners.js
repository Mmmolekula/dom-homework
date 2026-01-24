import { comments } from './commentsData.js';

export function addComment(nameInput, textInput, renderApp) {
  nameInput.classList.remove("error");
  textInput.classList.remove("error");

  if (!nameInput.value.trim()) {
    nameInput.classList.add("error");
    return;
  } else if (!textInput.value.trim()) {
    textInput.classList.add("error");
    return;
  }

  comments.push({
    name: nameInput.value,
    text: textInput.value,
    date: new Date(),
    likes: 0,
    isLiked: false,
  });

  renderApp();

  nameInput.value = "";
  textInput.value = "";
}

export function addButtonClickEvent(nameInput, textInput, renderApp) {
  const addButton = document.querySelector(".add-form-button");

  if (!addButton) {
      console.log("Кнопка не найдена");
      return; 
  }

  addButton.addEventListener("click", () => {
      addComment(nameInput, textInput, renderApp);
  });
}

export function initLikesListeners(comments, renderComments) {
    const likeButtonsElements = document.querySelectorAll(".like-button");

    for (let likeButtonElement of likeButtonsElements) {
    likeButtonElement.addEventListener("click", (event) => {
      event.stopPropagation();   
      const indexL = likeButtonElement.dataset.index;
      const comment = comments[indexL];
      comment.likes = comment.isLiked ? comment.likes - 1 : comment.likes + 1;
      comment.isLiked = !comment.isLiked;

      renderComments();
    })
  }
}

export function commentQuote (comments, text) {
  for (const comment of document.querySelectorAll('.comment')) {
  comment.addEventListener ("click", (event) => {
    event.stopPropagation();
    const currentComment = comments[comment.dataset.index];
    text.value = `${currentComment.name}:
    ${currentComment.text}`;
    });
  }
}