const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input"); // toDoForm.querySelector("input") 앞에 아무것도 없으면 태그로 식별
// const todos = [] 이 경우 앱이 실행될 때 todos는 항상 빈 배열로 시작
let todos = []; // submit되는 todo를 입력하는 배열, 기존 입력값을 기억하기 위해 let으로 업데이트 가능하게
const TODOS_KEY = "todos"; // 반복되는 string 입력으로 인한 오탈자 방지

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); // "todos"는 localstorage의 key이름, todos는 value로서 위의 배열
                                                            // 이 경우 "todos"라는 key에 todos에 속한 배열의 값들이 누적해서 입력
                                                            // JSON.stringify(todos)로 입력값을 문자열화하여 localstorage 안에 배열로 입력
}



function deleteTodo(event) { // 여기서 event라는 매개변수를 입력하여 해당 event에 대한 데이터를 조회 및 접근 가능(보통은 공란으로)
    const li = event.target.parentElement // event가 일어나는 target(누가 클릭된 것인가? 여기서는 button)의 parentElement(여기서는 li태그)
    li.remove(); // 위의 li 제거(각각의 li가 todo 항목이므로 해당 li를 제거하면 todo 삭제)
    todos = todos.filter((todo) => todo.id !== parseInt(li.id)); // 위에서 클릭한 li의 id와 일치하는 id를 가진 todo(여기서는 todo배열의 각 구성요소(각 객체)) 제거. li.id는 string이므로 parseInt로 타입 변환 필요
    saveTodos();
}                                                      // filter는 기존 배열을 변경하지 않고 새로운 배열 생성. 위의 경우 새로 만든 배열을 기존 배열에 업데이트  

function printTodo(todo) { // handleTodoSubmit의 부분 함수. HTML에 태그를 추가하고 입력된 todo 내용 추가하고 버튼 생성하고 삭제 이벤트 생성 
    const li = document.createElement("li");
    li.id = todo.id; // 여기서의 todo는 위의 매개변수 todo이며 handleTodoSUbmit 함수에서 newTodoObject를 전달인자로 받음
    const span = document.createElement("span");
    span.innerText = todo.content; // newTodo 객체의 content 키의 값을 span태그에 입력
    const button = document.createElement("button");
    button.style.border = "none"
    button.style.background = "transparent";
    button.innerText = "🗑";
    button.addEventListener("click", deleteTodo) // 자바스크립트는 기본적으로 event(해당 eventListener에서는 "click")에 대한 정보를 제공(5번 째 줄로 이동)
    li.appendChild(span); // append는 가장 마지막에 위치해야 한다
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) { // todo를 입력하고 제출하는 함수
    event.preventDefault();
    const newTodo = todoInput.value; // todoInput.value를 newTodo에 복사
    const newTodoObject = { // todo로 입력되는 값에 id를 추가하기 위해 객체에 저장 안녕하세요
        content: newTodo,
        id: Date.now(),
    }
    todoInput.value = ""; // newTodo애는 영향 X
    todos.push(newTodoObject);
    printTodo(newTodoObject);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY)

if(savedTodos !== null) { // localstorage에 데이터가 저장되어 있으면 해당 내용을 계속 화면에 출력해주는 조건문. handleTodoSubmit에서의 printTodo는 최초 입력 시에 화면에 출력. 여기서의 printTodo는 새로고침했을 때 출력
    const parsedTodos = JSON.parse(savedTodos); // 8번 째 줄에서 stringify된 todos를 파싱. 
    todos = parsedTodos; // todos(배열)을 "업데이트"하여 localstorage에 추가되는 todo가 덮어씌여지는 것이 아니라 누적하여 입력
    parsedTodos.forEach(printTodo); // .forEach는 .앞의 각각의 구성요소에 대해 ()안의 함수를 실행. 
}         

export { todoForm, todoList };