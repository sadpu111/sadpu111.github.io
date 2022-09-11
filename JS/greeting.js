import { todoForm, todoList } from "./todo.js";
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"


function onLoginSubmit(event) { // event handdler
    event.preventDefault(); // submit하면 refresh되는 기본작동을 방지
    loginForm.classList.add(HIDDEN_CLASSNAME); // login-form을 id로 갖는 태그에 부여된 classList애 hidden 추가
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // localstorage에 key와 value 추가(setter)
    printGreeting(username); // 함수는 전역변수
}

function printGreeting(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME); 
    todoForm.classList.remove(HIDDEN_CLASSNAME); 
    todoList.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${username}` 
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // localstorage의 저장값 조회(getter)

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit) // addEventListener("event", function) -> "event"가 발생하면 function 작동
} else {
    printGreeting(savedUsername);
}
