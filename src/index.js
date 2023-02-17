/* 
*********************************************************************

Factory function to return a ToDo object
OAL 15-02-2023
Version 0.1 genesis

This function called by project code to create and return a ToDo

********************************************************************* 
*/

import todoList from "./todoList";
import project from "./project";

const myTodoList = todoList();

for (let i = 0; i < 10; i++) {
  myTodoList.create();
}

console.table(myTodoList.todoArray);
console.log(myTodoList.todoArray[3].id);

// const myProject = project("myProject");

myTodoList.todoArray = myTodoList.deleteItem(myTodoList.todoArray[3].id);
console.table(myTodoList.todoArray);

// const elName = myTodoList.todoArray[3].name;

// myTodoList.todoArray = myTodoList.todoArray.filter(
//   (element) => element.name !== elName
// );

// myProject.addList(myTodoList);

// console.log(myProject);
