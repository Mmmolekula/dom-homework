import { comments } from "./comments.js";
import { initLikeListeners, initReplyListeners } from "./initListeners.js";
import { token, username } from "./api.js";
import { renderLogin } from "./loginPage.js";

export const renderComments = () => {
  const appElement = document.getElementById("app");

  const commentsHtml = comments
    .map((comment, index) => {
      return `
        <li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.date.toLocaleDateString()} ${comment.date.toLocaleTimeString()}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">${comment.text}</div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button
                class="like-button ${comment.isLikes ? "-active-like" : ""}"
                data-index="${index}"
              ></button>
            </div>
          </div>
        </li>`;
    })
    .join("");

  let bottomHtml = "";
  if (token) {
    bottomHtml = `
      <div class="add-form">
        <input
          type="text"
          class="add-form-name"
          id="name-input"
          value="${username}"
          readonly
          placeholder="Введите ваше имя"
        />
        <textarea
          type="textarea"
          class="add-form-text"
          placeholder="Введите ваш комментарий"
          rows="4"
          id="text-input"
        ></textarea>
        <div class="add-form-row">
          <button class="add-form-button">Написать</button>
        </div>
      </div>
      <div class="form-loading" style="display: none; margin-top: 20px">
        Комментарий добавляется...
      </div>`;
  } else {
    bottomHtml = `
      <div class="add-auth auth-message" id="auth-message">
        Чтобы добавить комментарий, <span id="login-link" class="login-link">авторизуйтесь</span>.
      </div>`;
  }

  appElement.innerHTML = `
    <ul id="commentsList" class="comments">${commentsHtml}</ul>
    ${bottomHtml}`;


  initLikeListeners(renderComments);
  initReplyListeners();

  if (!token) {
    const loginLink = document.getElementById("login-link");
    if (loginLink) {
      loginLink.addEventListener("click", () => {
        renderLogin();
      });
    }
  }
};
