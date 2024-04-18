import { renderComments } from "./render.js";
import { comments } from "./main.js";

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