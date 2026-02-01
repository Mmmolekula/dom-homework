import { fetchComments } from './api.js';
import { updateComments } from './comments.js';
import { initAddCommentListener } from './initListeners.js'
import { renderComments } from './renderComments.js'

document.querySelector(".comments").innerHTML = 
    'Загрузка комментариев...'

fetchComments()
.then(data => {
    updateComments(data);
    renderComments();
})

initAddCommentListener(renderComments);