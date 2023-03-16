import { takeLatest, put, all, call } from "typed-redux-saga/macro";

import {
  Uid,
  OrderSending,
  ORDER_ACTION_TYPES,
  OrdersArray,
} from "./orders.types";
import {
  handleSaveOrder,
  handleGetUserOrderHistory,
} from "../../utils/firebase/firebase.utils";
import { setUserOrderHistory } from "./orders.actions";

export function* getUserOrderHistory({
  payload,
}: {
  type: string;
  payload: Uid;
}) {
  try {
    const history: OrdersArray = yield handleGetUserOrderHistory(payload);
    yield put(setUserOrderHistory(history));
  } catch (error) {
    console.log(error);
  }
}

export function* onGetUserOrderHistoryStart() {
  yield* takeLatest(
    ORDER_ACTION_TYPES.GET_USER_ORDER_HISTORY_START,
    getUserOrderHistory
  );
}

export function* saveOrder({
  payload,
}: {
  type: string;
  payload: OrderSending;
}) {
  try {
    yield handleSaveOrder(payload);
  } catch (error) {
    console.log(error);
  }
}

export function* onSaveOrderHistoryStart() {
  yield* takeLatest(ORDER_ACTION_TYPES.SAVE_ORDER_HISTORY_START, saveOrder);
}

export function* ordersSagas() {
  yield all([call(onSaveOrderHistoryStart), call(onGetUserOrderHistoryStart)]);
}
