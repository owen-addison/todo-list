/* 
*********************************************************************

Factory function to return a project object
OAL 16-02-2023
Version 0.1 genesis

This function called by index.js to create and return a todoList

********************************************************************* 
*/

import todoList from "./todoList";

const project = (name = "Project") => {
  const { todoArray: listArray, ...rest } = todoList(name);
  const state = {
    ...rest,
    listArray,
  };
  return {
    ...state,
  };
};

export default project;
