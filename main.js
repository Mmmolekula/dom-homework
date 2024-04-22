import { fetchGet, fetchPost } from "./api.js";
import { renderComments } from "./render.js";

export let comments = [];

// const loginPage = document.getElementById("login-page");
// const authMessage = document.getElementById("auth-message");

document.getElementById("app").textContent = 
    "Комментарии подгружаются... Пожалуйста, подождите.";
// document.querySelector(".add-form-button").disabled = true;

export function getComments() {
fetchGet()
  .then((responseData) => {
    comments = responseData.comments;
    renderComments();
    // document.querySelector(".add-form-button").disabled = false;
     })
  .catch((error) => {
    alert(error);
    console.log(error)
  })    
    };
  
getComments();



