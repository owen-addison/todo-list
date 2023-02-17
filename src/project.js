/* 
*********************************************************************

Factory function to return a project object
OAL 16-02-2023
Version 0.1 genesis

This function called by index.js to create and return a todoList

********************************************************************* 
*/

import { creator, remover } from "./todoProto";
import todoList from "./todoList";

const project = (
  name,
  id,
  info,
  type = "project",
  arrayName = "listArray",
  obj = todoList
) => {
  const {
    todoArray: listArray,
    addItem,
    ...rest
  } = todoList(name, id, info, type, arrayName);
  const state = {
    ...rest,
    listArray,
  };
  return {
    ...state,
    ...creator(state, arrayName, obj),
    ...remover(state, arrayName),
  };
};

export default project;
