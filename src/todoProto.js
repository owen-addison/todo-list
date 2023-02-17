const getDefaultName = (arrayLength) => `Item ${arrayLength + 1}`;

const creator = (state, array, object) => ({
  create: (
    objName = getDefaultName(state[`${array}`].length),
    idNum = state[`${array}`].length + 1
  ) => {
    state[`${array}`].push(object(objName, idNum));
  },
});

const remover = (state, array) => ({
  deleteItem: (id) => state[`${array}`].filter((element) => element.id !== id),
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
