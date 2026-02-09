import { fetchComments } from "./api.js";
import { login, setToken, setUsername } from "./api.js";
import { updateComments } from "./comments.js";
import { renderComments } from "./renderComments.js";

export const renderLogin = () => {
  const appElement = document.getElementById("app");

  const loginHTML = `
    <div class="auth-form add-form" id="login-page">
      <input type="text" class="auth-form-name add-form-text" id="login-input" placeholder="Логин">
      <input type="password" class="auth-form-name add-form-text" id="password-input" placeholder="Пароль">
      <button class="auth-form-button add-form-button" id="login-button">Войти</button>
    </div>`;

  appElement.innerHTML = loginHTML;

  const loginButton = document.getElementById("login-button");
  const loginInputElement = document.getElementById("login-input");
  const passwordInputElement = document.getElementById("password-input");

  loginButton.addEventListener("click", () => {
    login({
      login: loginInputElement.value,
      password: passwordInputElement.value
    })
      .then((responseData) => {
        setToken(responseData.user.token);
        setUsername(responseData.user.name);
        fetchComments()
          .then((comments) => {
            updateComments(comments);
            renderComments();
          })
          .catch((error) => {
            console.error("Ошибка загрузки комментариев:", error);
            alert("Не удалось загрузить комментарии. Попробуйте позже.");
          });
      })
      .catch((error) => {
        console.error("Ошибка авторизации:", error);
        alert(error.message || "Неправильный логин или пароль.");
      });
  });
};
