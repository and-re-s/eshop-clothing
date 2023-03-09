import { createSelector } from "reselect";
import { RootState } from "../store";
import { Order, OrderItem } from "./orders.types";

const selectOrdersReducer = (state: RootState) => state.orders;

export const selectAllUserOrders = createSelector(
  [selectOrdersReducer],
  (orders) => orders.orderHistory
);

export const selectOrderItems = createSelector(
  [selectOrdersReducer],
  (orders) =>
    orders.orderHistory.reduce(
      (acc: OrderItem[][], order: Order, index: number) => {
        const { orderItems } = order;
        acc[index] = orderItems;
        return acc;
      },
      []
    )
);
