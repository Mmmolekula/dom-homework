import { fetchPost, token } from "./api.js";
import { renderLogin } from "./loginPage.js";
import { getComments } from "./main.js";


export function formAction() {
    if (!token) return;
    const name = document.getElementById("name-input");
    const text = document.getElementById("text-input");
    const addButton = document.querySelector(".add-form-button");
    addButton.addEventListener("click", () => {
      name.classList.remove("error");
      text.classList.remove("error");
      if (!name.value.trim()) {
        name.classList.add("error");
        return;
      }
      else if (!text.value.trim()) {
        text.classList.add("error");
        return;
      };
    
      addButton.disabled = true;
      addButton.textContent = "Комментарий добавляется...";
      addButton.style.fontSize = "16px";
    
      postComment();
    
    function postComment() {
      fetchPost({text, name})
      .then(() => {
        getComments();
      })
      .then(() => {
        addButton.disabled = false;
        addButton.textContent = "Написать";
        addButton.style.fontSize = "24px";
        name.value = "";
        text.value = "";
      })
      .catch((error) => {
        alert(error);
        console.log(error)
        addButton.disabled = false;
        addButton.textContent = "Написать";
        addButton.style.fontSize = "24px";
       })
      };
    });
  }

  export function authAction() {
    if (token) return;
    const loginLink = document.getElementById("login-link");
    loginLink.addEventListener("click", () => {
        renderLogin();
    });
  }