import {
  Uid,
  OrderSending,
  OrdersArray,
  ORDER_ACTION_TYPES,
} from "./orders.types";

import {
  createAction,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type SaveOrderHistory = ActionWithPayload<
  ORDER_ACTION_TYPES.SAVE_ORDER_HISTORY_START,
  OrderSending
>;

export type GetUserOrderHistory = ActionWithPayload<
  ORDER_ACTION_TYPES.GET_USER_ORDER_HISTORY_START,
  Uid
>;

export type SetUserOrderHistory = ActionWithPayload<
  ORDER_ACTION_TYPES.SET_USER_ORDER_HISTORY,
  OrdersArray
>;

export const saveOrderHistory = withMatcher(
  (order: OrderSending): SaveOrderHistory =>
    createAction(ORDER_ACTION_TYPES.SAVE_ORDER_HISTORY_START, order)
);

export const getUserOrderHistory = withMatcher(
  (uid: Uid): GetUserOrderHistory =>
    createAction(ORDER_ACTION_TYPES.GET_USER_ORDER_HISTORY_START, uid)
);

export const setUserOrderHistory = withMatcher(
  (history: OrdersArray): SetUserOrderHistory =>
    createAction(ORDER_ACTION_TYPES.SET_USER_ORDER_HISTORY, history)
);
