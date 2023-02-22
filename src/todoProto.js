const getDefaultName = (arrayLength) => `Item ${arrayLength + 1}`;

const creator = (state, array, object) => ({
  create: (
    objName = getDefaultName(state[`${array}`].length),
    id = `${state.id}_td${state[`${array}`].length + 1}`
    // id = state[`${array}`].length + 1,
  ) => {
    state[`${array}`].push(object(objName, id));
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
