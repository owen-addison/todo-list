import "./style.css";
import plusIcon from "./images/plus-box-outline.svg";
import trashCanIcon from "./images/trash-can-outline.svg";
import fileEditIcon from "./images/file-edit-outline.svg";
import todoList from "./todoList";
import project from "./project";

const listArray = [];

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
  Todo/list logic
-------------------------
*/
/*
  ___OBJECT LOGIC___
*/
// Get object from array
function returnObjectFromArray(id, array) {
  // Filter through array of lists to find matching list object
  const filteredArray = array.filter((element) => element.id === id);
  // Check for uniqueness
  if (filteredArray.length > 1) {
    // If more than one list object found throw error
    console.log(filteredArray);
    throw Error("ERROR! More than one relative found."); // Error if more that one relative object found
  } else if (filteredArray.length < 1) {
    throw Error("ERROR! No relative found."); // Error if no relative object found
  } else {
    // Destructure array of objects
    const [relative] = filteredArray;
    // Return list object
    return relative;
  }
}

function removeObjFromList(id, list, parentObj) {
  const filteredArray = list.filter((element) => element.id !== id);
}

/*
  ___HANDLER EVENTS___ (for event listeners)
*/
// Handle list add event
function handleTodoAdd(targetId) {
  // Get list object
  const list = returnObjectFromArray(targetId, listArray);
  // Create a todo item
  list.create();
  // Display list in DOM
  updateListView(targetId, list);
}

// Handle todo delete event
function handleTodoDel(targetId, parentId) {
  // Filter through array of lists to find matching list object
  const list = returnObjectFromArray(parentId, listArray);
  // Remove the first 4 characters from targetId string (First 4 characters: "del-")
  const todoObjId = targetId.substring(4);
  // Remove the todo object from array in parent list object
  list.todoArray = list.todoArray.filter((element) => element.id !== todoObjId);
  updateListView(parentId, list);
}

// Handle list delete event
function handleListDel(targetId) {
  // Filter through array of lists to find matching list object
  const list = returnObjectFromArray(targetId, listArray);
  console.log(list);
}

/*
  ___EVENT LISTENERS___
*/
// Global event listener
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

// Event listener functionality for add icons
addGlobalEventListener("click", ".add-icon", (e) => {
  // Set variables for the DOM element's type and id attributes
  const targetType = e.target.getAttribute("type");
  const targetId = e.target.getAttribute("listId");

  // Check if element type is a list
  if (targetType === "list") {
    handleTodoAdd(targetId);
  }
});

// Event listener functionality for edit icons
addGlobalEventListener("click", ".edit-icon", (e) => {
  console.log(`Edit target:`);
  console.log(e.target);
});

// Event listener functionality for delete icons
addGlobalEventListener("click", ".del-icon", (e) => {
  // Get target type
  const targetType = e.target.getAttribute("type");
  // Get target ID
  const targetId = e.target.getAttribute("id");
  // Get parent ID
  const parentId = e.target.getAttribute("listId");
  // Handle depending on target type
  if (targetType === "todo") {
    handleTodoDel(targetId, parentId);
  } else if (targetType === "list") {
    handleListDel(parentId);
  }
});

/*
-------------------------
  List create
-------------------------
*/
// Function to create new todo list
const createNewList = (name = "New List", id = undefined, info = undefined) => {
  const newList = todoList(name, `list${id}`, info);
  listArray.push(newList);
  // console.table(listArray);

  return newList;
};

/*
-------------------------
  List display
-------------------------
*/
// Function to display todo list
const displayNewList = (list) => {
  // Create new element
  const listContainer = document.createElement("div");
  // Assign class and id name
  listContainer.classList.add("list-container");
  const listIdName = `${list.id}`;
  listContainer.setAttribute("id", listIdName);

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
  addIcon.classList.add("add-icon");
  addIcon.setAttribute("id", `add-${listIdName}`);
  addIcon.setAttribute("type", "list");
  addIcon.setAttribute("listId", listIdName);
  iconContainer.appendChild(addIcon);
  const editIcon = new Image();
  editIcon.src = fileEditIcon;
  editIcon.classList.add("edit-icon");
  editIcon.setAttribute("id", `edit-${listIdName}`);
  editIcon.setAttribute("type", "list");
  editIcon.setAttribute("listId", listIdName);
  iconContainer.appendChild(editIcon);
  const removeIcon = new Image();
  removeIcon.src = trashCanIcon;
  removeIcon.classList.add("del-icon");
  removeIcon.setAttribute("id", `del-${listIdName}`);
  removeIcon.setAttribute("type", "list");
  removeIcon.setAttribute("listId", listIdName);
  iconContainer.appendChild(removeIcon);
  titleContainer.appendChild(iconContainer);

  // Display list contents
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container");
  listContainer.appendChild(todoContainer);
  list.todoArray.forEach((element) => {
    // Todo box
    const todo = document.createElement("div");
    const todoIdName = `${element.id}`;
    todo.classList.add("todo");
    todo.setAttribute("id", todoIdName);
    todoContainer.appendChild(todo);
    // Checkbox
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", `chk-${todoIdName}`);
    todo.appendChild(checkBox);
    // Todo name
    const todoName = document.createElement(todoNameElement);
    todoName.classList.add("todo-name");
    todoName.textContent = element.id;
    todo.appendChild(todoName);
    // Todo icons
    const todoIcons = document.createElement("div");
    todoIcons.classList.add("icon-container");
    const todoEdit = new Image();
    todoEdit.src = fileEditIcon;
    todoEdit.classList.add("edit-icon");
    todoEdit.setAttribute("id", `edit-${todoIdName}`);
    todoEdit.setAttribute("type", "todo");
    todoEdit.setAttribute("listId", listIdName);
    todoIcons.appendChild(todoEdit);
    const todoDel = new Image();
    todoDel.src = trashCanIcon;
    todoDel.classList.add("del-icon");
    todoDel.setAttribute("id", `del-${todoIdName}`);
    todoDel.setAttribute("type", "todo");
    todoDel.setAttribute("listId", listIdName);
    todoIcons.appendChild(todoDel);
    todo.appendChild(todoIcons);
    // Add todo to container
    todoContainer.appendChild(todo);
  });

  // Add list container to DOM
  projectView.appendChild(listContainer);
};

/*
-------------------------
  DOM update
-------------------------
*/
// Function to update list view
function updateListView(listId, list) {
  const listDOM = document.getElementById(listId);
  const proj = listDOM.parentElement;
  // console.log(listDOM);
  proj.removeChild(listDOM);
  displayNewList(list);
}

/*
-------------------------
  Init
-------------------------
*/
const myTodoList = createNewList("My first list", 1, "This is my first list");

for (let i = 0; i < 7; i++) {
  myTodoList.create();
}

displayNewList(myTodoList);
