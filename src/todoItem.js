/* 
*********************************************************************

Factory function to return a todoItem object
OAL 15-02-2023
Version 0.1 genesis

This function called by project or todoList code to create and return a todoItem

********************************************************************* 
*/

import { format } from "date-fns";
import { todoProto } from "./todoProto";

const todoItem = (
  name,
  id,
  info,
  type = "todo",
  dueDate = null,
  priority = "none",
  checklist = [],
  status = "pending"
) => {
  const state = {
    ...todoProto(name, id, info, type),
    creationDate: format(new Date(), "dd-MM-yyyy"),
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
