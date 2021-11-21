import { PayloadAction, Reducer } from "@reduxjs/toolkit";

export const nameReducer: Reducer<any, PayloadAction> = (
  state: any = { name: "" },
  action: PayloadAction
) => {
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
