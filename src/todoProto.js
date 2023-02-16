const todoProto = (name = null, info = null) => {
  const state = {
    name,
    info,
  };
  return {
    ...state,
  };
};

export default todoProto;
