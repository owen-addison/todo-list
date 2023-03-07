const generateIdArray = (length, idPrepend) => {
  const array = [];
  for (let i = 0; i < length + 1; i++) {
    array.push(`${idPrepend}${i + 1}`);
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

const getDefaultId = (state, arrayName) => {
  const { length } = state[`${arrayName}`];
  const idPrepend = `${state.id}_item`;

  // If button array empty return ID of 1
  if (length === 0) {
    return 1;
  }

  const newIDs = generateIdArray(length, idPrepend);
  const oldIDs = state[`${arrayName}`].map((x) => x.id);

  console.table("old IDs:", oldIDs);
  console.table("new IDs:", newIDs);
  console.log("Generated ID", checkIDs(oldIDs, newIDs));

  // Check arrays of old and new IDs and return the suitable new ID number
  return checkIDs(oldIDs, newIDs);
};

// const getDefaultName = (arrayLength) => `Item ${arrayLength + 1}`;

const creator = (state, arrayName, object) => ({
  create: (
    objName = `Item ${getDefaultId(state, arrayName)}`,
    id = `${state.id}_item${getDefaultId(state, arrayName)}`,
    info = undefined
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
