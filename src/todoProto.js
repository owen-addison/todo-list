import uniqid from "uniqid";

function getUniqueID(idPrefix) {
  return uniqid(idPrefix);
}

const creator = (state, arrayName, object, type) => ({
  create: (idPrefix) => {
    const id = getUniqueID(idPrefix);
    const objName = id;
    const info = null;
    // Get the type of child to add
    let childType;
    if (type === "list") {
      childType = "todo";
    } else if (type === "proj") {
      childType = "list";
    }
    // Add a child object to the array
    state[`${arrayName}`].push(object(objName, id, info, childType));
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

export { todoProto, creator, remover, getUniqueID };
