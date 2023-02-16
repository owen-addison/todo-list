/* 
*********************************************************************

Factory function to return a ToDo object
OAL 15-02-2023
Version 0.1 genesis

This function called by project code to create and return a ToDo

********************************************************************* 
*/

import todoProto from "./todoProto";
import todoList from "./todoList";
import project from "./project";

const myTodoList = todoList();

for (let i = 0; i < 10; i++) {
  myTodoList.addItem();
}

console.log(myTodoList);

console.log(myTodoList.todoArray[1]);
console.table(myTodoList.todoArray);

myTodoList.todoArray = myTodoList.deleteItem("todo 4");

console.table(myTodoList.todoArray);

const item = myTodoList.todoArray[3];

item.info = "This is an item of the to do list";

// const newProject = project();

console.log(project());
