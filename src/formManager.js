import { format, formatDistanceToNowStrict, parseISO, isPast } from "date-fns";
import returnObjectFromArray from "./objectLogic";
import {
  updateProjView,
  displayProject,
  updateSidebarList,
} from "./domManager";
import storeData from "./storeData";

// Define priority options array
const priorityOptionsArray = ["none", "low", "medium", "high"];

// Function for initializing form
function initForm() {
  // Create form background
  const formBackground = document.createElement("div");
  formBackground.classList.add("form-background");
  // Create form container
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  // Append container to background element
  formBackground.appendChild(formContainer);

  // Add form container to document
  const content = document.querySelector(".content-container");
  content.appendChild(formBackground);
}

// Function for adding name input elements
function addNameInput(currentName) {
  // Get the form container
  const formContainer = document.querySelector(".form-container");

  // Add container for name elements
  const nameDiv = document.createElement("div");
  nameDiv.classList.add("form-div");
  // Add label for name input
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name-input");
  nameLabel.textContent = "Name:";
  // Add input for name and set attributes
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name-input");
  nameInput.setAttribute("name", "name-input");
  // Set input as required
  nameInput.required = true;
  // Set input value to current name
  nameInput.value = currentName;

  // Append both label and input for name to name container
  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);
  // Append the name container to form container
  formContainer.appendChild(nameDiv);
}

// Function for adding priority select input elements
function addPriorityInput(currentPriority) {
  // Get the form container
  const formContainer = document.querySelector(".form-container");

  // Add container for priority elements
  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("form-div");
  // Add label for priority select
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority-input");
  priorityLabel.textContent = "Priority:";
  // Add priority select element
  const prioritySelect = document.createElement("select");
  prioritySelect.name = "priority-input";
  // Loop through options array
  priorityOptionsArray.forEach((element) => {
    // Create option element
    const priorityOption = document.createElement("option");
    // Set option value to the string of each array item
    priorityOption.setAttribute("value", element);
    // Get string for option name
    const optionName = element;
    // Get the first letter of the name
    const firstLetter = optionName.charAt(0);
    // Set the text to name with capital first letter
    priorityOption.innerText = firstLetter.toUpperCase() + optionName.slice(1);
    // Add option element to select element
    prioritySelect.appendChild(priorityOption);
  });
  // Set select value to current priority
  prioritySelect.value = currentPriority;
  // Set ID attribute for select element
  prioritySelect.setAttribute("id", "priority-input");

  // Add the select elements to priority container
  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(prioritySelect);
  // Append the priority container to the form container
  formContainer.appendChild(priorityDiv);
}

// Function for adding info input elements
function addInfoInput(currentInfo) {
  // Get the form container
  const formContainer = document.querySelector(".form-container");

  // Add container for info
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("form-div");
  // Add label for info box
  const infoLabel = document.createElement("label");
  infoLabel.setAttribute("for", "info-input");
  infoLabel.textContent = "Info:";
  // Add info text area element
  const infoInput = document.createElement("textarea");
  infoInput.name = "info-input";
  // Set ID attribute for info text area input element
  infoInput.setAttribute("id", "info-input");
  // Set info text area value to current info
  infoInput.value = currentInfo;

  // Add the info elements to info container
  infoDiv.appendChild(infoLabel);
  infoDiv.appendChild(infoInput);
  // Append the info container to the form container
  formContainer.appendChild(infoDiv);
}

// Function for adding due date selection
function addDateInput(currentDate) {
  // Get the form container
  const formContainer = document.querySelector(".form-container");

  // Add container for date
  const dateDiv = document.createElement("div");
  dateDiv.classList.add("form-div");

  // Add label for date box
  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date-input");
  dateLabel.textContent = "Due Date:";
  // Add date input element
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.name = "date-input";
  // Set ID attribute for date input element
  dateInput.setAttribute("id", "date-input");

  // Add paragraph element for countdown
  const countdown = document.createElement("p");
  // Set id for countdown element
  countdown.classList.add("form-countdown");

  // Check current due date on todo item and set to either the previously set date or current date
  if (currentDate === null) {
    const date = format(new Date(), "yyyy-MM-dd");
    // Set date value to current date
    dateInput.value = date;
    // Change countdown text
    countdown.textContent = "";
  } else {
    const textParse =
      typeof currentDate === "string" ? parseISO(currentDate) : currentDate;
    // console.log(currentDate);
    dateInput.value = format(textParse, "yyyy-MM-dd");
    // Change countdown text
    countdown.textContent = formatDistanceToNowStrict(textParse, {
      addSuffix: true,
    });
    // Check if due date is soon or late
    if (isPast(textParse)) {
      countdown.classList.remove("early");
      countdown.classList.add("late");
    } else {
      countdown.classList.remove("late");
      countdown.classList.add("early");
    }
  }

  // Add the date elements to date container
  dateDiv.appendChild(dateLabel);
  dateDiv.appendChild(dateInput);
  dateDiv.appendChild(countdown);
  // Append the date container to the form container
  formContainer.appendChild(dateDiv);
}

// Function for adding button elements
function addButtons(obj, projArray, proj) {
  // Get the object type
  const { type } = obj;

  // Get the form background
  const formBackground = document.querySelector(".form-background");
  // Get the form container
  const formContainer = document.querySelector(".form-container");

  // Add container for submit and cancel buttons
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("form-button-div");
  // Add input element of type submit
  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.classList.add("edit-form-btn");
  // Add submit button to the button div
  buttonDiv.appendChild(submitBtn);
  // Add a button element for cancelling action
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("edit-form-btn");
  // Set button text
  cancelBtn.textContent = "Cancel";
  // Add cancel button to the button div
  buttonDiv.appendChild(cancelBtn);
  // Add submit container to form container
  formContainer.appendChild(buttonDiv);

  // Add event listener to submit button
  submitBtn.addEventListener("click", () => {
    // Get name input element
    const nameInput = document.getElementById("name-input");

    // Get info input element
    const infoInput = document.getElementById("info-input");

    // Get date input element
    const dateInput = document.getElementById("date-input");

    // Check whether the name input is empty
    if (nameInput.value !== "") {
      // Change the name of object
      obj.name = nameInput.value;

      // If the type is todo then change the todo priority and due date
      if (type === "todo") {
        // Change the priority of object
        obj.priority = document.getElementById("priority-input").value;
        // console.log("date before", typeof obj.dueDate, obj.dueDate);

        // Change the due date of object
        if (obj.dueDate === null) {
          obj.dueDate = new Date(dateInput.value);
          // console.log("date after", typeof obj.dueDate, obj.dueDate);
        } else {
          const yr = document.getElementById("date-input").value.slice(0, 4);
          const month = document.getElementById("date-input").value.slice(5, 7);
          const day = document.getElementById("date-input").value.slice(8, 10);

          // console.table(typeof yr, yr, typeof month, month, typeof day, day);

          // Check whether the type of obj.dueDate is an object or string (depending on whether it's been loaded from localStorage or not)
          if (typeof obj.dueDate === "object") {
            // If it's an object, set the value as if it were a date object
            obj.dueDate.setFullYear(yr);
            obj.dueDate.setMonth(month - 1);
            obj.dueDate.setDate(day);
          } else if (typeof obj.dueDate === "string") {
            // If it's a string set it by creating a new date object
            obj.dueDate = new Date(yr, month, day);
            // obj.dueDate = Date.parse(`${yr}-${month}-${day} GMT`);
          }
          // console.log("date after", typeof obj.dueDate, obj.dueDate);
        }
      }

      // Change the info of the object
      obj.info = infoInput.value;

      if (type === "todo" || type === "list") {
        // Update project view
        updateProjView(proj.listArray);
      } else if (type === "proj") {
        // Update project view
        displayProject(obj);
        updateSidebarList(projArray);
      }

      // Remove form background element from DOM
      formBackground.remove();
    } else {
      // Throw error and cancel submission of form
      alert("no name");
    }

    // Store data in local storage
    storeData(projArray);
  });

  // Add event listener to cancel button
  cancelBtn.addEventListener("click", () => {
    // Remove form background element from DOM
    formBackground.remove();
  });
}

// Todo edit form
function generateTodoForm(projId, projArray, listId, todoId) {
  // Get the project object from the project array
  const proj = returnObjectFromArray(projId, projArray);
  // Get the list object from the project's list array
  const list = returnObjectFromArray(listId, proj.listArray);
  // Get the todo object from the list's todo array
  const todo = returnObjectFromArray(todoId, list.todoArray);

  // Get current name of todo
  const currentName = todo.name;
  // Get current priority of todo
  const currentPriority = todo.priority;
  // Get current info of todo
  const currentInfo = todo.info;
  // Get current due date of todo
  const currentDate = todo.dueDate;

  initForm();

  addNameInput(currentName);

  addPriorityInput(currentPriority);

  addInfoInput(currentInfo);

  addDateInput(currentDate);

  addButtons(todo, projArray, proj);
}

// List edit form
function generateListForm(projId, projArray, listId) {
  // Get the project object from the project array
  const proj = returnObjectFromArray(projId, projArray);
  // Get the list object from the project's list array
  const list = returnObjectFromArray(listId, proj.listArray);

  // Get current name of list
  const currentName = list.name;
  // Get current info of list
  const currentInfo = list.info;

  initForm();

  addNameInput(currentName);

  addInfoInput(currentInfo);

  addButtons(list, projArray, proj);
}

// Project edit form
function generateProjForm(projId, projArray) {
  // Get the project object from the project array
  const proj = returnObjectFromArray(projId, projArray);

  // Get current name of project
  const currentName = proj.name;
  // Get the current info of project
  const currentInfo = proj.info;

  initForm();

  addNameInput(currentName);

  addInfoInput(currentInfo);

  addButtons(proj, projArray);
}

export { generateTodoForm, generateListForm, generateProjForm };
