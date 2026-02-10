export const host = `https://wedev-api.sky.pro/api/v1/maria-maltseva`

export const fetchComments = () => {
    return fetch(host + '/comments')
        .catch(() => {
            return Promise.reject({
                message: 'Fetch-запрос неудачен. Повторите.'
            });
         })
         .then((response) => {
            if (response.status === 500) {
                return Promise.reject({
                    message: 'Сервер сломался/упал. Повторите позже.'
                });
              }
              else if (response.status === 400) {
                return Promise.reject({
                    message: 'Ошибка запроса/Неверный запрос. Повторите позже.'
                });
              }
              else {
                return response.json();
              }
         })
        .then((responseData) => {
            const appComments = responseData.comments.map((comment) => {
                return {
                    name: comment.author.name,
                    date: new Date(comment.date),
                    text: comment.text,
                    likes: comment.likes,
                    isLikes: false,
                }
            })

            return appComments
        })
}

export const postComment = (name, text) => {
    return fetch(host + '/comments', {
        method: 'POST',
        body: JSON.stringify({
            name,
            text,
        }),
    })
    .catch(() => {
        return Promise.reject({
            message: 'Fetch-запрос неудачен. Повторите.'
        })
    })
    .then((response) => {
        if (response.status === 500) {
            return Promise.reject({
                message: 'Сервер сломался/упал. Повторите позже.'
            })
        }
        if (response.status === 400) {
            return Promise.reject({
                message: 'Ошибка запроса/Неверный запрос. Повторите позже.'
            })
        }
        if (response.status === 201) {
            return response.json()
        }
    })
}