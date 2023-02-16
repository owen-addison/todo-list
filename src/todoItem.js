/* 
*********************************************************************

Factory function to return a todoItem object
OAL 15-02-2023
Version 0.1 genesis

This function called by project or todoList code to create and return a todoItem

********************************************************************* 
*/

import todoProto from "./todoProto";

const todoItem = (
  name,
  dueDate = null,
  priority = "none",
  checklist = [],
  status = "pending"
) => {
  const state = {
    ...todoProto(name),
    creationDate: new Date(),
    dueDate,
    priority,
    checklist,
    status,
  };
  return {
    ...state,
  };
};

export default todoItem;
