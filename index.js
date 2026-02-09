import { fetchComments } from "./modules/api.js";
import { updateComments } from "./modules/comments.js";
import { initAddCommentListener } from "./modules/initListeners.js";
import { renderComments } from "./modules/renderComments.js";
import { token, username } from "./modules/api.js";
import { renderLogin } from "./modules/loginPage.js";

const appElement = document.getElementById("app");

if (!token) {
  appElement.innerHTML = `
    <ul id="commentsList" class="comments"></ul>
    <div class="add-auth" id="auth-message">
      Чтобы добавить комментарий, <span id="login-link">авторизуйтесь</span>.
    </div>
  `;

  const loginLink = document.getElementById("login-link");
  if (loginLink) {
    loginLink.addEventListener("click", () => {
      renderLogin();
    });
  }

  fetchComments()
    .then((data) => {
      updateComments(data);
      renderComments();
    })
    .catch((error) => {
      console.error(error);
      appElement.textContent = "Ошибка загрузки комментариев. Попробуйте позже.";
    });
} else {
  appElement.innerHTML = `
    <ul id="commentsList" class="comments"></ul>
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
    </div>
  `;

  fetchComments()
    .then((data) => {
      updateComments(data);
      renderComments();
    })
    .catch((error) => {
      console.error(error);
      appElement.textContent = "Ошибка загрузки комментариев. Попробуйте позже.";
    });

  initAddCommentListener(renderComments);
}
