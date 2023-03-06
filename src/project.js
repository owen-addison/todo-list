/* 
*********************************************************************

Factory function to return a project object
OAL 16-02-2023
Version 0.1 genesis

This function called by index.js to create and return a todoList

********************************************************************* 
*/

import { todoProto, creator, remover } from "./todoProto";
import todoList from "./todoList";

const project = (
  name,
  id,
  info,
  type = "project",
  arrayName = "listArray",
  obj = todoList
) => {
  const listArray = [];
  const state = {
    ...todoProto(name, id, info, type),
    listArray,
  };
  return {
    ...state,
    ...creator(state, arrayName, obj),
    ...remover(state, arrayName),
  };
};

export default project;
