import "./style.css";
import plusIcon from "./images/plus-box-outline.svg";
import trashCanIcon from "./images/trash-can-outline.svg";
import fileEditIcon from "./images/file-edit-outline.svg";
import { getUniqueID } from "./todoProto";
import todoList from "./todoList";
import project from "./project";
import setUpDOM from "./initialiser";

const projArray = [];
const listArray = [];

const listTitleElement = "h3";
const todoNameElement = "h5";

/* REFACTOR TO MODULE
-------------------------
  TODO/LIST LOGIC
-------------------------
*/
/*
___CREATE PROJ/LIST___
*/
// Function to create new project
const createProj = (name = "New Project", info = undefined) => {
  // Get a unique ID for the project
  const id = getUniqueID("proj-");
  // Create a new project object
  const newProj = project(name, id, info);
  // Push the new project object to the project array
  projArray.push(newProj);

  // Return the project object
  return newProj;
};

// // Function to create new todo list
// const createList = (name = "New List", id = undefined, info = undefined) => {
//   const newList = todoList(name, `list${id}`, info);
//   listArray.push(newList);
//   // console.table(listArray);

//   return newList;
// };

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

/*
  ___EVENT HANDLERS___ (for event listeners)
*/
// Handle todo add event
function handleTodoAdd(e) {
  console.log(e.target);
  // Get project id
  const projId = e.target.closest(".project-container").id;
  // Get id of target
  const targetId = e.target.getAttribute("listId");
  // Get list object
  const list = returnObjectFromArray(targetId, listArray);
  // Create a todo item
  list.create();
  // Update view of lists in array in DOM
  updateProjView(targetId, listArray);
}

// Handle list add event
function handleListAdd(targetId) {
  console.log(targetId);
}

// Handle todo delete event
function handleTodoDel(e) {
  // Get target ID
  const targetId = e.target.getAttribute("id");
  // Get parent ID
  const parentId = e.target.closest(".list-container").id;
  // Filter through array of lists to find matching list object
  const list = returnObjectFromArray(parentId, listArray);
  // Remove the first 4 characters from targetId string (First 4 characters: "del-")
  const todoObjId = targetId.substring(4);
  // Find index of object in array
  const arrayIndex = list.todoArray.findIndex(
    (element) => element.id === todoObjId
  );
  // Remove the todo object from array in parent list object
  list.todoArray.splice(arrayIndex, 1);
  // Update list view in DOM
  updateProjView(parentId, listArray);
}

// Handle list delete event
function handleListDel(e) {
  // array
  let array = [listArray];

  console.table(array);
  console.log(e.target);

  // Get target type
  const targetType = e.target.getAttribute("type");
  // Get target ID
  const targetId = e.target.getAttribute("id");
  // Get parent ID
  const parentId = e.target.getAttribute("listId");
  // Filter through array of lists to find matching list object
  const list = returnObjectFromArray(targetId, array);
  // Remove the list from the list array
  array = array.filter((element) => element.id !== targetId);
  // Update view of lists in array in DOM
  updateProjView(targetId, array);
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

  // Check if element type is a list
  if (targetType === "list") {
    handleTodoAdd(e);
  } else if (targetType === "proj") {
    handleListAdd(e);
  }
});

// Event listener functionality for edit icons
addGlobalEventListener("click", ".edit-icon", (e) => {
  console.log(`Edit target:`);
  console.log(e.target);
});

// Event listener functionality for delete icons
addGlobalEventListener("click", ".del-icon", (e) => {
  // Set variables for the DOM element's type and id attributes
  const targetType = e.target.getAttribute("type");
  console.log(targetType);

  // Check if element type is a list
  if (targetType === "todo") {
    handleTodoDel(e);
  } else if (targetType === "list") {
    handleListDel(e);
  }
});

/* REFACTOR TO MODULE
-------------------------
DOM UPDATE
-------------------------
*/
// Function to display todo list
const displayList = (list) => {
  // Get project container
  const projectContainer = document.querySelector(".project-container");

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
  // removeIcon.addEventListener("click", handleListDel, { once: true });
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
    // todoDel.addEventListener("click", handleTodoDel, { once: true });
    todoIcons.appendChild(todoDel);
    todo.appendChild(todoIcons);
    // Add todo to container
    todoContainer.appendChild(todo);
  });

  // Add list container to DOM
  projectContainer.appendChild(listContainer);
};

/*
  ___UPDATE PROJECT VIEW___
*/
// Function to remove list from DOM
function removeListFromDOM(list) {
  // Get project element from DOM
  const proj = list.parentElement;
  // Remove the list DOM element from the project DOM element
  proj.removeChild(list);
}

// Function to add list to DOM
function addListToDOM(list) {
  // Display list in DOM
  displayList(list);
}

// Function to update project view
function updateProjView(listId, array) {
  if (array.length === 0) {
    // If array empty
    // Get DOM element for list
    const listDOM = document.getElementById(listId);
    // Remove list DOM element from project DOM element
    removeListFromDOM(listDOM);
  } else {
    // For each element in the list array
    array.forEach((element) => {
      // Get old DOM element for this array element
      const oldDOM = document.getElementById(element.id);
      // Remove old DOM element
      removeListFromDOM(oldDOM);
      // Add new DOM element
      addListToDOM(element);
    });
  }
}

/*
  ___DISPLAY PROJECT___
*/
function displayProject(projObj) {
  // Get the project ID
  const projectID = projObj.id;
  // Get the project container element from DOM
  const projectContainer = document.querySelector(".project-container");
  // Add ID to project container element
  projectContainer.setAttribute("id", projectID);

  projObj.listArray.forEach((element) => {
    // console.log(element);
    displayList(element);
  });
}

/*
-------------------------
  INITIALIZE
-------------------------
*/
// Set up the DOM
setUpDOM();

// Create a blank project
function createExampleProj() {
  // Create the project
  const myProj = createProj("My first project", "This is my first project");

  // Create a list in the project
  myProj.create("list-");

  // Create a set of todo items in the new list
  for (let i = 0; i < 7; i++) {
    myProj.listArray[0].create("todo-");
  }
}

// Call the function for creating a blank project
createExampleProj();

// Check details of default project
console.log(projArray[0]);

// Display the default project
function displayDefaultProject(index = 0) {
  displayProject(projArray[index]);
}

displayDefaultProject();
