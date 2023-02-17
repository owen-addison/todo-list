import "./style.css";
import todoList from "./todoList";
import project from "./project";

// Get content div element
const content = document.querySelector(".content");

// Create content container
const contentContainer = document.createElement("div");
contentContainer.classList.add("content-container");

// Create sidebar section
const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");

// Create project view
const projectView = document.createElement("div");
projectView.classList.add("project-view");

// Add elements to document
contentContainer.appendChild(sidebar);
contentContainer.appendChild(projectView);
content.appendChild(contentContainer);

const myTodoList = todoList();

for (let i = 0; i < 10; i++) {
  myTodoList.create();
}

console.table(myTodoList.todoArray);
console.log(myTodoList.todoArray[3].id);

myTodoList.todoArray = myTodoList.deleteItem(myTodoList.todoArray[3].id);
console.table(myTodoList.todoArray);
