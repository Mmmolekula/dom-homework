const commentsURL = "https://wedev-api.sky.pro/api/v2/maria-maltseva/comments";
const userURL = "https://wedev-api.sky.pro/api/user/login";

export let token;
export const setToken = (newToken) => {
  token = newToken;
}


export function fetchGet() {
    return fetch(commentsURL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .catch(() => {
    return Promise.reject("Fetch-запрос неудачен. Повторите.");
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
    return fetch(commentsURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
  },
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

export function login ({login, password}) {
  return fetch(userURL, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    })
  })
  .then((response) => {
    return response.json();
  })
}




