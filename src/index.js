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

const myTodo = todoItem();
const myTodoList = todoList();

console.table(myTodoList);
