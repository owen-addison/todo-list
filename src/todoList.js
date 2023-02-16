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

const adder = (state) => ({
  addItem: (item) => state.todoArray.push(item),
});

const remover = (state) => ({
  deleteItem: (name) =>
    state.todoArray.filter((element) => element.name !== name),
});

const todoList = (name = "Todo List", info = "") => {
  const todoArray = [];
  const state = {
    name,
    info,
    todoArray,
  };
  return {
    ...state,
    ...adder(state),
    ...remover(state),
  };
};

export default todoList;
