/* 
*********************************************************************

Factory function to return a todoList object
OAL 15-02-2023
Version 0.1 genesis

This function called by project code to create and return a todoList.
The returned object includes an array of todoItems, name, info and
functions for adding and removing todoItems from array.

********************************************************************* 
*/

import { todoProto, creator, remover } from "./todoProto";
import todoItem from "./todoItem";

// const nameUpdater = (state) => ({
//   updateNames: () => {
//     const { todoArray } = state;

//     todoArray.map((obj) => {
//       obj.id = 6;
//     });
//   },
// });

const todoList = (
  type,
  id,
  name = "Todo List",
  arrayName = "todoArray",
  obj = todoItem
) => {
  const todoArray = [];
  const state = {
    ...todoProto(type, id, name),
    todoArray,
  };
  return {
    ...state,
    ...creator(state, arrayName, obj),
    ...remover(state, arrayName),
  };
};

export default todoList;
