export const nameReducer = (state: any = { name: "" }, action: any) => {
  switch (action.type) {
    case "CHANGENAME":
      return { name: action.payload };
    default:
      return state;
  }
};

export const changeName = (name: string) => {
  return {
    type: "CHANGENAME",
    payload: name,
  };
};
