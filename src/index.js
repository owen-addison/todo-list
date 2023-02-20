import "./style.css";
import plusIcon from "./images/plus-box-outline.svg";
import trashCanIcon from "./images/trash-can-outline.svg";
import fileEditIcon from "./images/file-edit-outline.svg";
import todoList from "./todoList";
import project from "./project";

const listTitleElement = "h3";
const todoNameElement = "h5";

/*
-------------------------
  HTML setup
-------------------------
*/
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

/*
-------------------------
  List create/display
-------------------------
*/
// Function to create new todo list
const createNewList = (name = "New List", id = undefined, info = undefined) => {
  const newList = todoList(name, id, info);

  return newList;
};

// Function to display todo list
const displayNewList = (list) => {
  // Create new element
  const listContainer = document.createElement("div");
  // Assign class and id name
  listContainer.classList.add("list-container");
  const idName = `list${list.id}`;
  listContainer.setAttribute("id", idName);

  // Display name as title
  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");
  listContainer.appendChild(titleContainer);
  const title = document.createElement(listTitleElement);
  title.classList.add("list-title");
  title.textContent = list.name;
  titleContainer.appendChild(title);

  // Display icons
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");
  const addIcon = new Image();
  addIcon.src = plusIcon;
  addIcon.classList.add("add-todo");
  iconContainer.appendChild(addIcon);
  const editIcon = new Image();
  editIcon.src = fileEditIcon;
  editIcon.classList.add("edit-icon");
  iconContainer.appendChild(editIcon);
  const removeIcon = new Image();
  removeIcon.src = trashCanIcon;
  removeIcon.classList.add("remove-icon");
  iconContainer.appendChild(removeIcon);
  titleContainer.appendChild(iconContainer);

  // Display list contents
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container");
  listContainer.appendChild(todoContainer);
  list.todoArray.forEach((element) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    todo.setAttribute("id", list.name + element.id);
    todoContainer.appendChild(todo);
    const todoName = document.createElement(todoNameElement);
    todoName.textContent = element.id;
    todo.appendChild(todoName);
    todoContainer.appendChild(todo);
  });

  // Add list container to DOM
  projectView.appendChild(listContainer);
};

const myTodoList = createNewList("My first list", 1, "This is my first list");

for (let i = 0; i < 10; i++) {
  myTodoList.create();
}

displayNewList(myTodoList);

console.log(myTodoList);

console.table(myTodoList.todoArray);

// myTodoList.todoArray = myTodoList.deleteItem(myTodoList.todoArray[3].id);
// console.table(myTodoList.todoArray);
