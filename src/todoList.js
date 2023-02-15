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

const adder = (state, item) => ({
  addItem: () => state.todoArray.push(item),
});

const todoList = (name = "Todo List", info = "") => {
  const todoArray = [];
  const state = {
    name,
    info,
    todoArray,
  };
  return {
    ...adder(state),
  };
};

export default todoList;
