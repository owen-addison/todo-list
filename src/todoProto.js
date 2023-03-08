import uniqid from "uniqid";

const creator = (state, arrayName, object, type) => ({
  create: (idPrefix) => {
    const objName = idPrefix;
    const id = uniqid(idPrefix);
    const info = null;
    let childType;
    if (type === "list") {
      childType = "todo";
    } else if (type === "proj") {
      childType = "list";
    }
    console.log("Generated ID", id);
    state[`${arrayName}`].push(object(objName, id, info, childType));
    console.log("Updated array:", state[`${arrayName}`]);

    return state[`${arrayName}`];
  },
  deleteItem: (id) => {
    state[`${arrayName}`].filter((element) => element.id !== id);
  },
});

const remover = (state, arrayName) => ({
  deleteItem: (id) =>
    state[`${arrayName}`].filter((element) => element.id !== id),
});

const todoProto = (name, id, info, type) => {
  const state = {
    name,
    id,
    info,
    type,
  };
  return {
    ...state,
  };
};

export { todoProto, creator, remover };
