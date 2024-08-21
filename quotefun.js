import { comments } from "./main.js";

export function commentQuote() {
  const text = document.getElementById("text-input");
    for (const comment of document.querySelectorAll('.comment')) {
    comment.addEventListener ("click", (event) => {
      event.stopPropagation();
      const currentComment = comments[comment.dataset.index];
      text.value = `${currentComment.author.name}:
      ${currentComment.text}`;
        });
      }
    };