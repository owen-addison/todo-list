/* 
*********************************************************************

Factory function to return a todoItem object
OAL 15-02-2023
Version 0.1 genesis

This function called by project or todoList code to create and return a todoItem

********************************************************************* 
*/

import { todoProto } from "./todoProto";

const todoItem = (
  name,
  id,
  info,
  type = "todo",
  dueDate = null,
  priority = "none",
  checklist = [],
  complete = false
) => {
  const state = {
    ...todoProto(name, id, info, type),
    creationDate: new Date(),
    dueDate,
    priority,
    checklist,
    complete,
  };
  return {
    ...state,
  };
};

export default todoItem;
