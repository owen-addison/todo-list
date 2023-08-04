import "./style.css";
import { getUniqueID } from "./todoProto";
import rebuild from "./rebuildProjArray";
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
import storeData from "./storeData";

/*
-------------------------
  STORAGE & PROJECT ARRAY
-------------------------
*/

// Define the project array depending on the presence of localStorage data
const projArray = localStorage.getItem("projArray")
  ? rebuildJSONdata(localStorage.getItem("projArray"))
  : [];

// Rebuild the project objects from from the project array
function rebuildJSONdata(jsonString) {
  const oldArray = JSON.parse(jsonString);
  // console.log("old array", oldArray);

  const newArray = rebuild(oldArray);
  console.log("rebuilt array", newArray);

  return newArray;
}

// Log the storage data received from localStorage
if (!JSON.parse(localStorage.getItem("projArray"))) {
  // If no storage data exists
  console.log("no local storage data");
} else {
  // If storage data does exist
  console.log("retrieved JSON", JSON.parse(localStorage.getItem("projArray")));
}

/*
-------------------------
  TODO/LIST LOGIC
-------------------------
*/
/*
___CREATE PROJ___
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

/* SWITCH EVENTS */

// Handle project switch event
function handProjSelect(e) {
  // Get project id
  const projId = e.target.id;
  // Get project object from array
  const proj = returnObjectFromArray(projId, projArray);
  // Update the project view
  displayProject(proj);
  localStorage.setItem("defaultProjNum", projArray.indexOf(proj));
}

/* CHECKBOX EVENTS */

// Handle checkbox change event
function handleCheckboxChange(e) {
  // Get project id
  const projId = e.target.closest(".project-container").id;
  // Get project object from array
  const proj = returnObjectFromArray(projId, projArray);
  // Get list ID
  const listId = e.target.closest(".list-container").id;
  // Filter through array of lists to find matching list object
  const list = returnObjectFromArray(listId, proj.listArray);
  // Get the todo element id
  const todoId = e.target.closest(".todo").id;
  // Filter through the array of todo objects to find matching object
  const todo = returnObjectFromArray(todoId, list.todoArray);
  // Set the todo object's "complete" property
  todo.complete = e.target.checked;
}

/*
    ___EVENT LISTENERS___
*/
// Global event listener
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
      storeData(projArray);
    }
  });
}

// Event listener functionality for sidebar add project button
addGlobalEventListener("click", ".sb-add-button", (e) => {
  // Call event handler for adding a project
  handleProjAdd(e);
});

// Event listener functionality for sidebar project selection
addGlobalEventListener("click", ".sb-proj-item", (e) => {
  // Call event handler for selecting a project
  handProjSelect(e);
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

// Event listener functionality for checkboxes
addGlobalEventListener("change", ".checkbox", (e) => {
  // Call the callback function for handling a todo checkbox change
  handleCheckboxChange(e);
});

/*
-------------------------
  INITIALIZE
-------------------------
*/

// Create an example project, called if no local storage data
function createExampleProj() {
  // Create the project
  const myProj = createProj("My first project", "This is my first project");

  // Create a list in the project
  myProj.create("list-");

  // Create a todo item in the new list
  myProj.listArray[0].create("todo-");
}

// Display the default project
function displayDefaultProject(index = 0) {
  // console.log("displayDefaultProject", projArray[index]);
  displayProject(projArray[index]);
}

// Check to see whether local storage is empty
if (!localStorage.getItem("projArray")) {
  // Call the function for creating a blank project
  createExampleProj();
  // Set up the DOM
  setUpDOM(projArray);
  // Call function for displaying the default project
  displayDefaultProject();
  // console.log("default", projArray); // Log the project array generated from a default project
  storeData(projArray); // Store the data
} else {
  // Set the default project number to data saved in local storage or to 0 if no local storage data
  const defaultProjNum = localStorage.getItem("defaultProjNum")
    ? localStorage.getItem("defaultProjNum")
    : 0;
  // Set up the DOM
  setUpDOM(projArray);
  // Call function for displaying the default project
  displayDefaultProject(defaultProjNum);
  // console.log("storage", projArray); // Log the project array retrieved from localStorage
}
