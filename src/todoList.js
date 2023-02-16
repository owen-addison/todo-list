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

import todoProto from "./todoProto";
import todoItem from "./todoItem";

// const defaultName = `To do #${state.todoArray.length + 1}`;
const getName = (arrayLength) => `todo ${arrayLength + 1}`;

const adder = (state) => ({
  addItem: (itemName = getName(state.todoArray.length)) =>
    state.todoArray.push(todoItem(itemName)),
});

const remover = (state) => ({
  deleteItem: (name) =>
    state.todoArray.filter((element) => element.name !== name),
});

const todoList = (name = "Todo List") => {
  const todoArray = [];
  const state = {
    ...todoProto(name),
    todoArray,
  };
  return {
    ...state,
    ...adder(state),
    ...remover(state),
  };
};

export default todoList;
