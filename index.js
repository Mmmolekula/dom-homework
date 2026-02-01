import { fetchComments } from './modules/api.js'
import { updateComments } from './modules/comments.js'
import { initAddCommentListener } from './modules/initListeners.js'
import { renderComments } from './modules/renderComments.js'

const addButton = document.querySelector('.add-form-button');

document.querySelector('.comments').innerHTML =
    'Пожалуйста подождите, загружаю комментарии.'

fetchComments().then((data) => {
    updateComments(data);
    renderComments();
    addButton.disabled = false;
})

initAddCommentListener(renderComments)