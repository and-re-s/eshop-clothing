import { createSelector } from "reselect";
import { RootState } from "../store";
import { OrderReceiving, OrderItem } from "./orders.types";

const selectOrdersReducer = (state: RootState) => state.orders;

export const selectAllUserOrders = createSelector(
  [selectOrdersReducer],
  (orders) => orders.orderHistory
);

export const selectOrderItems = createSelector(
  [selectOrdersReducer],
  (orders: any) =>
    orders.orderHistory.reduce(
      (acc: OrderItem[][], order: OrderReceiving, index: number) => {
        const { orderItems } = order;
        acc[index] = orderItems;
        return acc;
      },
      [] as OrderItem[][]
    )
);
