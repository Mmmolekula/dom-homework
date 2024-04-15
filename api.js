export function fetchGet() {
    return fetch("https://wedev-api.sky.pro/api/v1/maria-maltseva/comments", {
    method: "GET"
  })
  .catch(() => {
    alert("Fetch-запрос неудачен. Повторите.")
  })
  .then((response) => {
    if (response.status === 500) {
      return Promise.reject("Сервер сломался/упал. Повторите позже.");
    }
    else if (response.status === 400) {
      return Promise.reject("Ошибка запроса/Неверный запрос. Повторите позже.");
    }
    else {
      return response.json();
    }
  })
};

export function fetchPost({text, name}) {
    return fetch("https://wedev-api.sky.pro/api/v1/maria-maltseva/comments", {
    method: "POST",
    body: JSON.stringify({text: text.value, name: name.value, forceError: true})
  })
  .catch(() => {
    alert("Fetch-запрос неудачен. Повторите.")
  })
  .then((response) => {
    if (response.status === 500) {
      return Promise.reject("Сервер сломался/упал. Повторите позже.");
    }
    else if (response.status === 400) {
      return Promise.reject("Ошибка запроса/Неверный запрос. Повторите позже.");
    }
    else {
      return response.json();
    }
  })
};