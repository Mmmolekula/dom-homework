import { comments } from "./modules/comments.js";
import { fetchGet } from "./modules/api.js";
import { renderComments } from "./modules/renderComments.js";

document.getElementById("app").textContent =
  "Комментарии подгружаются... Пожалуйста, подождите.";

export function getComments() {
  fetchGet()
    .then((responseData) => {
      comments.length = 0;
      comments.push(...responseData.comments);
      renderComments();
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
}

getComments();
