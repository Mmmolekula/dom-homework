import { login, token } from "./api.js";

// export const renderLogin = () => {
//     const appElement = document.getElementById("app");
//     const loginHTML = `
//     <div class="auth-form" id="login-page">
//     <input type="text" class="auth-form-name" id="login-input" placeholder="Логин">
//     <input type="password" class="auth-form-name" id="password-input" placeholder="Пароль">
//     <button class="auth-form-button" id="login-button">Войти</button>
//     </div>`;
//     appElement.innerHTML = loginHTML;
// };

const loginButton = document.getElementById("login-button");
const loginInputElement = document.getElementById("login-input");
const passwordInputElement = document.getElementById("password-input");

loginButton.addEventListener("click", () => {
    // const username = document.getElementById("username").value.trim();
    // const password = document.getElementById("password").value.trim();
    login({
        login: loginInputElement.value,
        password: passwordInputElement.value,
    })
    .then((responseData) => {
        console.log(token);
        setToken(responseData.user.token);
        console.log(token);
    })
    // if (username === "user" && password === "password") {
    //     loginPage.style.display = "none";

    // } else {
    //     alert("Неверный логин или пароль.")}
});