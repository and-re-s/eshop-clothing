import { AnyAction } from "redux";
import { OrdersArray } from "./orders.types";
import { setUserOrderHistory } from "./orders.actions";

const INITIAL_STATE = {
  orderHistory: [] as OrdersArray,
};

export const ordersReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (setUserOrderHistory.match(action)) {
    return {
      ...state,
      orderHistory: action.payload,
    };
  }

  return state;
};
