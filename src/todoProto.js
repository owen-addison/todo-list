const generateIdArray = (length) => {
  const array = [];
  for (let i = 0; i < length + 1; i++) {
    array.push(i + 1);
  }
  return array;
};

const checkIDs = (oldIDs, newIDs) => {
  let returnID;
  for (let i = 0; i < newIDs.length; i++) {
    if (!oldIDs.some((id) => id === i + 1)) {
      returnID = i + 1;
    }
  }
  return returnID;
};

const getDefaultId = (array) => {
  const { length } = array;

  // If button array empty return ID of 1
  if (length === 0) {
    return 1;
  }

  const newIDs = generateIdArray(length);
  const oldIDs = array.map((x) => x.id);

  // Check arrays of old and new IDs and return the suitable new ID number
  return checkIDs(oldIDs, newIDs);
};

const getDefaultName = (arrayLength) => `Item ${arrayLength + 1}`;

const creator = (state, arrayName, object) => ({
  create: (
    objName = getDefaultName(state[`${arrayName}`].length),
    id = `${state.id}_td${getDefaultId(state[`${arrayName}`])}`,
    info = undefined
    // id = state[`${array}`].length + 1,
  ) => {
    state[`${arrayName}`].push(object(objName, id, info));
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
