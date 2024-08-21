import { login, setToken, token, username, setUsername } from "./api.js";
import { getComments } from "./main.js";

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
        password: passwordInputElement.value,
    })
    .then((responseData) => {
        // console.log(token);
        setToken(responseData.user.token);
        console.log(token);
        setUsername(responseData.user.name)
        console.log(username);
        getComments();
        })
        .catch((error) => {
            console.error(error);
            alert(error.message);
        });
    })
};