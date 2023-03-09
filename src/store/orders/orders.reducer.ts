import { AnyAction } from "redux";
import { ORDER_ACTION_TYPES } from "./orders.types";

const INITIAL_STATE = {
  orderHistory: [],
};

export const ordersReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ORDER_ACTION_TYPES.SET_USER_ORDER_HISTORY:
      return {
        ...state,
        orderHistory: action.payload,
      };
    default:
      return state;
  }
};
