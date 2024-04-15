const list = document.querySelector(".comments");

export const renderComments = () => {

    list.innerHTML = comments.map((comment, index) => {
      return `
      <li class="comment" data-index="${index}">
        <div class="comment-header">
          <div>${comment.author.name
            .replaceAll("%BEGIN_QUOTE", "<div class='quote'>")
            .replaceAll("END_QUOTE%", "</div>")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")}</div>
          <div>${new Date(comment.date).toLocaleDateString()} 
              ${new Date(comment.date).toLocaleTimeString()}</div>
        </div>
        <div class="comment-body">
  
          <div class="comment-text">
            ${comment.text
            .replaceAll("%BEGIN_QUOTE", "<div class='quote'>")
            .replaceAll("END_QUOTE%", "</div>")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")}</div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>лайка
            <button data-index="${index}" class="like-button ${comment.isLiked ? "-active-like" : ""
          }"></button>
            </div>
          </div>
        </li>
    `
    }).join("")
  
    initLikesListeners();
    commentQuote();
  
  };