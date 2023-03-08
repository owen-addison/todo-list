import { todoProto, creator, remover } from "./todoProto";
import todoList from "./todoList";

const project = (
  name,
  id,
  info,
  type = "proj",
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
    ...creator(state, arrayName, obj, type),
    ...remover(state, arrayName),
  };
};

export default project;
