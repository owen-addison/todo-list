/* 
*********************************************************************

Factory function to return a project object
OAL 16-02-2023
Version 0.1 genesis

This function called by index.js to create and return a todoList

********************************************************************* 
*/

import { remover } from "./todoProto";
import todoList from "./todoList";

const returnError = () => alert("No list specified");

const adder = (state) => ({
  addList: (list) => {
    if (list !== undefined) {
      state.listArray.push(list);
    } else {
      returnError();
    }
  },
});

const project = (name = "Project", arrayName = "listArray") => {
  const { todoArray: listArray, addItem, ...rest } = todoList(name, arrayName);
  const state = {
    ...rest,
    listArray,
  };
  return {
    ...state,
    ...adder(state),
    ...remover(state),
  };
};

export default project;
