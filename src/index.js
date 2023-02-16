/* 
*********************************************************************

Factory function to return a ToDo object
OAL 15-02-2023
Version 0.1 genesis

This function called by project code to create and return a ToDo

********************************************************************* 
*/

import todoItem from "./todoItem";
import todoList from "./todoList";

const myTodoList = todoList();

for (let i = 0; i < 10; i++) {
  myTodoList.addItem(todoItem(`todo ${i + 1}`, `this is todo number ${i + 1}`));
}

console.log(myTodoList);

console.log(myTodoList.todoArray[1]);
console.table(myTodoList.todoArray);

myTodoList.todoArray = myTodoList.deleteItem("todo 4");

console.table(myTodoList.todoArray);
