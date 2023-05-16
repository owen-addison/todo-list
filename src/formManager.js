import returnObjectFromArray from "./objectLogic";
import { updateProjView } from "./domManager";

// Define priority options array
const priorityOptionsArray = ["none", "low", "medium", "high"];

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

  // Create form background
  const formBackground = document.createElement("div");
  formBackground.classList.add("form-background");
  // Create form container
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  // Append container to background element
  formBackground.appendChild(formContainer);

  // Add container for name elements
  const nameDiv = document.createElement("div");
  nameDiv.classList.add("form-div");
  // Add label for name input
  const todoNameLabel = document.createElement("label");
  todoNameLabel.setAttribute("for", "todo-name");
  todoNameLabel.textContent = "Name:";
  // Add input for name and set attributes
  const todoNameInput = document.createElement("input");
  todoNameInput.setAttribute("type", "text");
  todoNameInput.setAttribute("id", "todo-name");
  todoNameInput.setAttribute("name", "todo-name");
  // Set input as required
  todoNameInput.required = true;
  // Set input value to current name
  todoNameInput.value = currentName;

  // Append both label and input for name to name container
  nameDiv.appendChild(todoNameLabel);
  nameDiv.appendChild(todoNameInput);
  // Append the name container to form container
  formContainer.appendChild(nameDiv);

  // Add container for priority elements
  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("form-div");
  // Add label for priority select
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "todo-priority");
  priorityLabel.textContent = "Priority:";
  // Add priority select element
  const prioritySelect = document.createElement("select");
  prioritySelect.name = "todo-priority";
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
  prioritySelect.setAttribute("id", "todo-priority");

  // Add the select elements to priority container
  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(prioritySelect);
  // Append the priority container to the form container
  formContainer.appendChild(priorityDiv);

  // Add container for info
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("form-div");
  // Add label for info box
  const infoLabel = document.createElement("label");
  infoLabel.setAttribute("for", "todo-info");
  infoLabel.textContent = "Info:";
  // Add info text area element
  const infoTextArea = document.createElement("textarea");
  infoTextArea.name = "todo-info";
  // Set info text area value to current info
  infoTextArea.value = currentInfo;

  // Add the info elements to info container
  infoDiv.appendChild(infoLabel);
  infoDiv.appendChild(infoTextArea);
  // Append the info container to the form container
  formContainer.appendChild(infoDiv);

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
    if (todoNameInput.value !== "") {
      // Change the name of todo object
      todo.name = todoNameInput.value;
      // Change the priority of todo object
      todo.priority = prioritySelect.value;
      // Change the info of the todo object
      todo.info = infoTextArea.value;

      // Update project view
      updateProjView(proj.listArray);

      // Remove form background element from DOM
      formBackground.remove();
    } else {
      // Throw error and cancel submission of form
      alert("no name");
    }
  });

  // Add event listener to cancel button
  cancelBtn.addEventListener("click", () => {
    // Remove form background element from DOM
    formBackground.remove();
  });

  // Add form container to document
  const content = document.querySelector(".content-container");
  content.appendChild(formBackground);
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

  console.log(currentName);
  console.log(currentInfo);
  console.log(list);
}

// Project edit form

export { generateTodoForm, generateListForm };
