import { fetchGet, fetchPost } from "./api.js";
import { renderLogin } from "./loginPage.js";
import { renderComments } from "./render.js";

export let comments = [];
// export let isAuthenticated = false;
// let isAuthorized = false;

const name = document.getElementById("name-input");
export const text = document.getElementById("text-input");


document.querySelector(".comments").textContent = 
    "Комментарии подгружаются... Пожалуйста, подождите.";
document.querySelector(".add-form-button").disabled = true;

function getComments() {
fetchGet()
  .then((responseData) => {
    comments = responseData.comments;
    renderComments();
    document.querySelector(".add-form-button").disabled = false;
     })
  .catch((error) => {
    alert(error);
    console.log(error)
  })    
    };
  
getComments();
renderLogin();

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