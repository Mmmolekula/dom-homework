/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchGet: () => (/* binding */ fetchGet),\n/* harmony export */   fetchPost: () => (/* binding */ fetchPost),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   setToken: () => (/* binding */ setToken),\n/* harmony export */   setUsername: () => (/* binding */ setUsername),\n/* harmony export */   token: () => (/* binding */ token),\n/* harmony export */   username: () => (/* binding */ username)\n/* harmony export */ });\nconst commentsURL = \"https://wedev-api.sky.pro/api/v2/maria-maltseva/comments\";\r\nconst userURL = \"https://wedev-api.sky.pro/api/user/login\";\r\n\r\nlet token;\r\nconst setToken = (newToken) => {\r\n  token = newToken;\r\n};\r\n\r\nlet username;\r\nconst setUsername = (newUsername) => {\r\n  username = newUsername;\r\n  };\r\n\r\n\r\nfunction fetchGet() {\r\n    return fetch(commentsURL, {\r\n    method: \"GET\",\r\n    headers: {\r\n      Authorization: `Bearer ${token}`\r\n    }\r\n  })\r\n  .catch(() => {\r\n    return Promise.reject(\"Fetch-запрос неудачен. Повторите.\");\r\n  })\r\n  .then((response) => {\r\n    if (response.status === 500) {\r\n      return Promise.reject(\"Сервер сломался/упал. Повторите позже.\");\r\n    }\r\n    else if (response.status === 400) {\r\n      return Promise.reject(\"Ошибка запроса/Неверный запрос. Повторите позже.\");\r\n    }\r\n    else {\r\n      return response.json();\r\n    }\r\n  })\r\n};\r\n\r\nfunction fetchPost({text, name}) {\r\n    return fetch(commentsURL, {\r\n    method: \"POST\",\r\n    headers: {\r\n      Authorization: `Bearer ${token}`,\r\n  },\r\n    body: JSON.stringify({text: text.value, name: name.value, forceError: true})\r\n  })\r\n  .catch(() => {\r\n    alert(\"Fetch-запрос неудачен. Повторите.\")\r\n  })\r\n  .then((response) => {\r\n    if (response.status === 500) {\r\n      return Promise.reject(\"Сервер сломался/упал. Повторите позже.\");\r\n    }\r\n    else if (response.status === 400) {\r\n      return Promise.reject(\"Ошибка запроса/Неверный запрос. Повторите позже.\");\r\n    }\r\n    else {\r\n      return response.json();\r\n    }\r\n  })\r\n};\r\n\r\nfunction login ({login, password}) {\r\n  return fetch(userURL, {\r\n    method: \"POST\",\r\n    body: JSON.stringify({\r\n      login,\r\n      password,\r\n    })\r\n  })\r\n  .then((response) => {\r\n    if (response.status === 400) {\r\n      throw new Error(\"Неправильный логин или пароль.\");\r\n    }\r\n    else {\r\n      return response.json();\r\n    }\r\n  })\r\n}\n\n//# sourceURL=webpack://dom-homework/./api.js?");

/***/ }),

/***/ "./likesfun.js":
/*!*********************!*\
  !*** ./likesfun.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initLikesListeners: () => (/* binding */ initLikesListeners)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./render.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\r\n\r\n\r\nconst initLikesListeners = () => {\r\n    const likeButtonsElements = document.querySelectorAll(\".like-button\");\r\n  \r\n    for (let likeButtonElement of likeButtonsElements) {\r\n      likeButtonElement.addEventListener(\"click\", (event) => {\r\n        event.stopPropagation();   \r\n        const indexL = likeButtonElement.dataset.index;\r\n        let comment = _main_js__WEBPACK_IMPORTED_MODULE_1__.comments[indexL];\r\n        comment.likes = comment.isLiked ? comment.likes - 1 : comment.likes + 1;\r\n        comment.isLiked = !comment.isLiked;\r\n  \r\n        (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderComments)();\r\n      })\r\n    }\r\n  }\n\n//# sourceURL=webpack://dom-homework/./likesfun.js?");

/***/ }),

/***/ "./listeners.js":
/*!**********************!*\
  !*** ./listeners.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authAction: () => (/* binding */ authAction),\n/* harmony export */   formAction: () => (/* binding */ formAction)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _loginPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginPage.js */ \"./loginPage.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\r\n\r\n\r\n\r\n\r\nfunction formAction() {\r\n    if (!_api_js__WEBPACK_IMPORTED_MODULE_0__.token) return;\r\n    const name = document.getElementById(\"name-input\");\r\n    const text = document.getElementById(\"text-input\");\r\n    const addButton = document.querySelector(\".add-form-button\");\r\n    addButton.addEventListener(\"click\", () => {\r\n      name.classList.remove(\"error\");\r\n      text.classList.remove(\"error\");\r\n      if (!name.value.trim()) {\r\n        name.classList.add(\"error\");\r\n        return;\r\n      }\r\n      else if (!text.value.trim()) {\r\n        text.classList.add(\"error\");\r\n        return;\r\n      };\r\n    \r\n      addButton.disabled = true;\r\n      addButton.textContent = \"Комментарий добавляется...\";\r\n      addButton.style.fontSize = \"16px\";\r\n    \r\n      postComment();\r\n    \r\n    function postComment() {\r\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchPost)({text, name})\r\n      .then(() => {\r\n        (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.getComments)();\r\n      })\r\n      .then(() => {\r\n        addButton.disabled = false;\r\n        addButton.textContent = \"Написать\";\r\n        addButton.style.fontSize = \"24px\";\r\n        name.value = \"\";\r\n        text.value = \"\";\r\n      })\r\n      .catch((error) => {\r\n        alert(error);\r\n        console.log(error)\r\n        addButton.disabled = false;\r\n        addButton.textContent = \"Написать\";\r\n        addButton.style.fontSize = \"24px\";\r\n       })\r\n      };\r\n    });\r\n  }\r\n\r\n  function authAction() {\r\n    if (_api_js__WEBPACK_IMPORTED_MODULE_0__.token) return;\r\n    const loginLink = document.getElementById(\"login-link\");\r\n    loginLink.addEventListener(\"click\", () => {\r\n        (0,_loginPage_js__WEBPACK_IMPORTED_MODULE_1__.renderLogin)();\r\n    });\r\n  }\n\n//# sourceURL=webpack://dom-homework/./listeners.js?");

/***/ }),

/***/ "./loginPage.js":
/*!**********************!*\
  !*** ./loginPage.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLogin: () => (/* binding */ renderLogin)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\r\n\r\n\r\nconst renderLogin = () => {\r\n    const appElement = document.getElementById(\"app\");\r\n    const loginHTML = `\r\n        <div class=\"auth-form add-form\" id=\"login-page\">\r\n        <input type=\"text\" class=\"auth-form-name add-form-text\" id=\"login-input\" placeholder=\"Логин\">\r\n        <input type=\"password\" class=\"auth-form-name add-form-text\" id=\"password-input\" placeholder=\"Пароль\">\r\n        <button class=\"auth-form-button add-form-button\" id=\"login-button\">Войти</button>\r\n        </div>`;\r\n    appElement.innerHTML = loginHTML;\r\n\r\nconst loginButton = document.getElementById(\"login-button\");\r\nconst loginInputElement = document.getElementById(\"login-input\");\r\nconst passwordInputElement = document.getElementById(\"password-input\");\r\n\r\nloginButton.addEventListener(\"click\", () => {\r\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.login)({\r\n        login: loginInputElement.value,\r\n        password: passwordInputElement.value,\r\n    })\r\n    .then((responseData) => {\r\n        // console.log(token);\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setToken)(responseData.user.token);\r\n        console.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.token);\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setUsername)(responseData.user.name)\r\n        console.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.username);\r\n        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.getComments)();\r\n        })\r\n        .catch((error) => {\r\n            console.error(error);\r\n            alert(error.message);\r\n        });\r\n    })\r\n};\n\n//# sourceURL=webpack://dom-homework/./loginPage.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comments: () => (/* binding */ comments),\n/* harmony export */   getComments: () => (/* binding */ getComments)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./render.js\");\n\r\n\r\n\r\nlet comments = [];\r\n\r\n// const loginPage = document.getElementById(\"login-page\");\r\n// const authMessage = document.getElementById(\"auth-message\");\r\n\r\ndocument.getElementById(\"app\").textContent = \r\n    \"Комментарии подгружаются... Пожалуйста, подождите.\";\r\n// document.querySelector(\".add-form-button\").disabled = true;\r\n\r\nfunction getComments() {\r\n(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchGet)()\r\n  .then((responseData) => {\r\n    comments = responseData.comments;\r\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderComments)();\r\n    // document.querySelector(\".add-form-button\").disabled = false;\r\n     })\r\n  .catch((error) => {\r\n    alert(error);\r\n    console.log(error)\r\n  })    \r\n    };\r\n  \r\ngetComments();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://dom-homework/./main.js?");

/***/ }),

/***/ "./quotefun.js":
/*!*********************!*\
  !*** ./quotefun.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentQuote: () => (/* binding */ commentQuote)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\r\n\r\nfunction commentQuote() {\r\n  const text = document.getElementById(\"text-input\");\r\n    for (const comment of document.querySelectorAll('.comment')) {\r\n    comment.addEventListener (\"click\", (event) => {\r\n      event.stopPropagation();\r\n      const currentComment = _main_js__WEBPACK_IMPORTED_MODULE_0__.comments[comment.dataset.index];\r\n      text.value = `${currentComment.author.name}:\r\n      ${currentComment.text}`;\r\n        });\r\n      }\r\n    };\n\n//# sourceURL=webpack://dom-homework/./quotefun.js?");

/***/ }),

/***/ "./render.js":
/*!*******************!*\
  !*** ./render.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderComments: () => (/* binding */ renderComments)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n/* harmony import */ var _likesfun_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likesfun.js */ \"./likesfun.js\");\n/* harmony import */ var _quotefun_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotefun.js */ \"./quotefun.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners.js */ \"./listeners.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst renderComments = () => {\r\n  const app = document.getElementById(\"app\");\r\n    const commentsHtml = _main_js__WEBPACK_IMPORTED_MODULE_0__.comments.map((comment, index) => {\r\n      return `\r\n      <li class=\"comment\" data-index=\"${index}\">\r\n        <div class=\"comment-header\">\r\n          <div>${comment.author.name\r\n            .replaceAll(\"%BEGIN_QUOTE\", \"<div class='quote'>\")\r\n            .replaceAll(\"END_QUOTE%\", \"</div>\")\r\n            .replaceAll(\"<\", \"&lt;\")\r\n            .replaceAll(\">\", \"&gt;\")}</div>\r\n          <div>${new Date(comment.date).toLocaleDateString()} \r\n              ${new Date(comment.date).toLocaleTimeString()}</div>\r\n        </div>\r\n        <div class=\"comment-body\">\r\n  \r\n          <div class=\"comment-text\">\r\n            ${comment.text\r\n            .replaceAll(\"%BEGIN_QUOTE\", \"<div class='quote'>\")\r\n            .replaceAll(\"END_QUOTE%\", \"</div>\")\r\n            .replaceAll(\"<\", \"&lt;\")\r\n            .replaceAll(\">\", \"&gt;\")}</div>\r\n        </div>\r\n        <div class=\"comment-footer\">\r\n          <div class=\"likes\">\r\n            <span class=\"likes-counter\">${comment.likes}</span>лайка\r\n            <button data-index=\"${index}\" class=\"like-button ${comment.isLiked ? \"-active-like\" : \"\"\r\n          }\"></button>\r\n            </div>\r\n          </div>\r\n        </li>\r\n    `\r\n    }).join(\"\")\r\n\r\n    const formHtml = `\r\n    <div class=\"add-form\">\r\n     <input \r\n     type=\"text\" \r\n     id=\"name-input\"\r\n     value = \"${_api_js__WEBPACK_IMPORTED_MODULE_3__.username}\"\r\n     class=\"add-form-name\" readonly \r\n     placeholder=\"Введите ваше имя\"\r\n     />\r\n\r\n     <textarea \r\n     type=\"textarea\"\r\n     id=\"text-input\" \r\n     class=\"add-form-text\"      \r\n     placeholder=\"Введите ваш коментарий\" \r\n     rows=\"4\"\r\n   ></textarea>\r\n     <div class=\"add-form-row\">\r\n       <button class=\"add-form-button\">Написать</button>\r\n     </div>\r\n   </div>`\r\n\r\n    const authHtml = `\r\n    <div class=\"add-auth\" id=\"auth-message\">Чтобы добавить комментарий, <span id=\"login-link\" >авторизуйтесь</span>.</div>`\r\n\r\n    app.innerHTML = ` \r\n    <ul class=\"comments\">\r\n    ${commentsHtml}\r\n    </ul>\r\n    ${_api_js__WEBPACK_IMPORTED_MODULE_3__.token ? formHtml : authHtml}\r\n   \r\n  \r\n   `\r\n    ;(0,_likesfun_js__WEBPACK_IMPORTED_MODULE_1__.initLikesListeners)();\r\n    (0,_quotefun_js__WEBPACK_IMPORTED_MODULE_2__.commentQuote)();\r\n    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_4__.formAction)();\r\n    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_4__.authAction)();\r\n  };\n\n//# sourceURL=webpack://dom-homework/./render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;