import { Timestamp } from "firebase/firestore";
import { CartItem } from "../cart/cart.types";

export enum ORDER_ACTION_TYPES {
  SAVE_ORDER_HISTORY_START = "orders/SAVE_ORDER_HISTORY_START",
  GET_USER_ORDER_HISTORY_START = "orders/GET_USER_ORDER_HISTORY_START",
  SET_USER_ORDER_HISTORY = "orders/SET_USER_ORDER_HISTORY",
}

export type Uid = string;

export type OrderItem = CartItem;

export type OrderSending = {
  orderCreatedDate: Date;
  orderUserID: string;
  orderItems: OrderItem[];
  orderTotal: number;
  orderDelivery: {
    firstName: string;
    lastName: string;
    mobile: string;
    adress1: string;
    adress2: string;
    city: string;
    country: string;
    postcode: string;
  };
};

export type OrderReceiving = {
  orderCreatedDate: Timestamp;
  orderUserID: string;
  orderItems: OrderItem[];
  orderTotal: number;
  orderDelivery: {
    firstName: string;
    lastName: string;
    mobile: string;
    adress1: string;
    adress2: string;
    city: string;
    country: string;
    postcode: string;
  };
};

export type OrdersArray = OrderReceiving[];
