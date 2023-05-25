import { format } from "date-fns";
import "./style.css";
import { getUniqueID } from "./todoProto";
import project from "./project";
import {
  setUpDOM,
  updateProjView,
  displayProject,
  updateSidebarList,
  displayEmptyProjArray,
} from "./domManager";
import {
  generateTodoForm,
  generateListForm,
  generateProjForm,
} from "./formManager";
import returnObjectFromArray from "./objectLogic";

const projArray = [];

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

/*
  ___EVENT HANDLERS___ (for event listeners)
*/

/* ADD EVENTS */

// Handle todo add event
function handleTodoAdd(e) {
  // Get project id
  const projId = e.target.closest(".project-container").id;
  // Get project object from array
  const proj = returnObjectFromArray(projId, projArray);
  // Get list id
  const listId = e.target.closest(".list-container").id;
  // Get list object
  const list = returnObjectFromArray(listId, proj.listArray);
  // Create a todo item
  list.create("todo-");
  // Update view of lists in array in DOM
  updateProjView(proj.listArray);
}

// Handle list add event
function handleListAdd(e) {
  // Get project id
  const projId = document.querySelector(".project-container").id;
  // Get project object from array
  const proj = returnObjectFromArray(projId, projArray);
  // Create a list in the project
  proj.create("list-");
  // Get new list object
  const list = proj.listArray[proj.listArray.length - 1];
  // Get ID of new list
  const listId = list.id;
  // Update view of project in array in DOM
  updateProjView(proj.listArray);
}

// Handle project add event
function handleProjAdd(e) {
  // Create a new project
  const newProj = createProj();

  // Update sidebar
  updateSidebarList(projArray);

  // Display new project
  displayProject(newProj);
}

/* DELETE EVENTS */

// Handle todo delete event
function handleTodoDel(e) {
  // Get project id
  const projId = e.target.closest(".project-container").id;
  // Get project object from array
  const proj = returnObjectFromArray(projId, projArray);
  // Get todo ID
  const todoId = e.target.getAttribute("id");
  // Get list ID
  const listId = e.target.closest(".list-container").id;
  // Filter through array of lists to find matching list object
  const list = returnObjectFromArray(listId, proj.listArray);
  // Remove the first 4 characters from targetId string (First 4 characters: "del-")
  const todoObjId = todoId.substring(4);
  // Find index of object in array
  const arrayIndex = list.todoArray.findIndex(
    (element) => element.id === todoObjId
  );
  // Remove the todo object from array in parent list object
  list.todoArray.splice(arrayIndex, 1);
  // Update project view in DOM
  updateProjView(proj.listArray);
}

// Handle list delete event
function handleListDel(e) {
  // Get project id
  const projId = e.target.closest(".project-container").id;
  // Get project object from array
  const proj = returnObjectFromArray(projId, projArray);
  // Get list ID
  const listId = e.target.closest(".list-container").id;
  // Filter through array of lists to find matching list object
  const arrayIndex = proj.listArray.findIndex(
    (element) => element.id === listId
  );
  // Remove the list object from array in parent project object
  proj.listArray.splice(arrayIndex, 1);
  // Update proj view in DOM
  updateProjView(proj.listArray);
}

// Handle project deletion event
function handleProjDel(e) {
  // Get project id from project container
  const projId = document.querySelector(".project-container").id;
  // Get project object from array
  const arrayIndex = projArray.findIndex((element) => element.id === projId);
  // Remove the list object from array in parent project object
  projArray.splice(arrayIndex, 1);
  // Display previous project
  if (projArray.length > 0) {
    displayProject(projArray[arrayIndex - 1]);
  } else {
    displayEmptyProjArray();
  }
  // Update sidebar list of projects
  updateSidebarList(projArray);
}

/* EDIT EVENTS */

// Handle todo edit event
function handleTodoEdit(e) {
  // Get project id
  const projId = e.target.closest(".project-container").id;
  // Get list id
  const listId = e.target.closest(".list-container").id;
  // Get the id of the targeted todo DOM element
  const todoId = e.target.id;
  // Remove the first 4 characters from targetId string (First 5 characters: "edit-")
  const todoObjId = todoId.substring(5);

  generateTodoForm(projId, projArray, listId, todoObjId);
}

// Handle list edit event
function handleListEdit(e) {
  // Get project id
  const projId = e.target.closest(".project-container").id;
  // Get list id
  const listId = e.target.closest(".list-container").id;

  generateListForm(projId, projArray, listId);
}

// Handle project edit event
function handleProjEdit(e) {
  // Get project id from project container
  const projId = document.querySelector(".project-container").id;

  generateProjForm(projId, projArray);
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

// Event listener functionality for sidebar add project button
addGlobalEventListener("click", ".sb-add-button", (e) => {
  // Call event handler for adding a project
  handleProjAdd(e);
});

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
  // Set variables for the DOM element's type and id attributes
  const targetType = e.target.getAttribute("type");

  // Check if element type is a list
  if (targetType === "todo") {
    handleTodoEdit(e);
  } else if (targetType === "list") {
    handleListEdit(e);
  } else if (targetType === "proj") {
    handleProjEdit(e);
  }
});

// Event listener functionality for delete icons
addGlobalEventListener("click", ".del-icon", (e) => {
  // Set variables for the DOM element's type and id attributes
  const targetType = e.target.getAttribute("type");

  // Check if element type is a list
  if (targetType === "todo") {
    handleTodoDel(e);
  } else if (targetType === "list") {
    handleListDel(e);
  } else if (targetType === "proj") {
    handleProjDel(e);
  }
});

/*
-------------------------
  INITIALIZE
-------------------------
*/

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

// Set up the DOM
setUpDOM(projArray);

// Display the default project
function displayDefaultProject(index = 0) {
  displayProject(projArray[index]);
}

// Call function for displaying the default project
displayDefaultProject();

// Get current project id of DOM project container element
const curProjId = document.querySelector(".project-container").id;

// Get object of current project from main project array
const curProjObj = returnObjectFromArray(curProjId, projArray);

// Get id of first list from current project object
const curListObj = curProjObj.listArray[0];
const curListId = curListObj.id;
// Get id of first todo item in the list object's todo array
const curTodoId = curListObj.todoArray[0].id;

// Call generateTodoForm for testing
// generateTodoForm(curProjId, projArray, curListId, curTodoId);

const date = new Date(2023, 4, 25);

const formatDate = format(date, "yyyy-MM-dd");

console.log(formatDate);
