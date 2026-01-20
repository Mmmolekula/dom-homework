export function initLikesListeners(comments, renderComments) {
    const likeButtonsElements = document.querySelectorAll(".like-button");

    for (let likeButtonElement of likeButtonsElements) {
    likeButtonElement.addEventListener("click", (event) => {
      event.stopPropagation();   
      const indexL = likeButtonElement.dataset.index;
      const comment = comments[indexL];
      comment.likes = comment.isLiked ? comment.likes - 1 : comment.likes + 1;
      comment.isLiked = !comment.isLiked;

      renderComments();
    })
  }
}

export function commentQuote (comments, text) {
  for (const comment of document.querySelectorAll('.comment')) {
  comment.addEventListener ("click", (event) => {
    event.stopPropagation();
    const currentComment = comments[comment.dataset.index];
    text.value = `${currentComment.name}:
    ${currentComment.text}`;
    });
  }
}