import { replaceSymbols } from './utils.js';

export function renderComments(comments, list, initLikesListeners, commentQuote) {
    list.innerHTML = comments.map((comment, index) => {
      return `
      <li class="comment" data-index="${index}">
        <div class="comment-header">
          <div>${replaceSymbols(comment.name)}</div>
          <div>${comment.date.toLocaleDateString()} 
              ${comment.date.toLocaleTimeString()}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${replaceSymbols(comment.text)}</div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>лайка
            <button data-index="${index}" class="like-button ${comment.isLiked ? "-active-like" : ""
          }"></button>
            </div>
          </div>
        </li>
    `
    }).join("");

    initLikesListeners();
    commentQuote();
  }