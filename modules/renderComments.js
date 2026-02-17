import { comments } from "./comments.js";
import { initLikesListeners, commentQuote } from "./initListeners.js";
import { token, username } from "./api.js";
import { authAction, formAction } from "./initListeners.js";
import { sanitizeHtml } from "./sanitizeHtml.js";

export const renderComments = () => {
  const app = document.getElementById("app");
  const commentsHtml = comments.map((comment, index) => {
    return `
      <li class="comment" data-index="${index}">
        <div class="comment-header">
          <div>${sanitizeHtml(comment.author.name)}</div>
          <div>${new Date(comment.date).toLocaleDateString()}
              ${new Date(comment.date).toLocaleTimeString()}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">${sanitizeHtml(comment.text)}</div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>лайка
            <button data-index="${index}" class="like-button ${comment.isLiked ? "-active-like" : ""}"></button>
          </div>
        </div>
      </li>
    `;
  }).join("");

  const formHtml = `
    <div class="add-form">
      <input
        type="text"
        id="name-input"
        value="${username}"
        class="add-form-name"
        readonly
        placeholder="Введите ваше имя"
      />
      <textarea
        type="textarea"
        id="text-input"
        class="add-form-text"
        placeholder="Введите ваш коментарий"
        rows="4"
      ></textarea>
      <div class="add-form-row">
        <button class="add-form-button">Написать</button>
      </div>
    </div>`;

  const authHtml = `
    <div class="add-auth" id="auth-message"><br>Чтобы добавить комментарий, <span id="login-link">авторизуйтесь</span>.</div>`;

  app.innerHTML = `
    <ul class="comments">
      ${commentsHtml}
    </ul>
    ${token ? formHtml : authHtml}
  `;

  initLikesListeners();
  commentQuote();
  formAction();
  authAction();
};