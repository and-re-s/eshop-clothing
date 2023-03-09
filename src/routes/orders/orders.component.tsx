import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrderItems from "../../components/order-item/orders-items.component";

import { OrderItem } from "../../store/orders/orders.types";
import {
  selectAllUserOrders,
  selectOrderItems,
} from "../../store/orders/orders.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { getUserOrderHistory } from "../../store/orders/orders.actions";

import {
  MainContainer,
  OrdersContainer,
  OrderContainer,
  ItemsContainer,
  Total,
  DeliveryContainer,
  DeliveryAdressContainer,
  OrderDateContainer,
  DeliveryDataTable,
  Tr,
  Td,
} from "./orders.styles";

const Orders = () => {
  const orders = useSelector(selectAllUserOrders);
  const itemsArray = useSelector(selectOrderItems);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrderHistory(user!.id));
  }, [dispatch, user]);

  function printAdress(number: number) {
    return (
      <DeliveryDataTable>
        <tbody>
          <Tr>
            <Td>First Name</Td>
            <Td>{orders[number].orderDelivery.firstName}</Td>
          </Tr>
          <Tr>
            <Td>Last Name</Td>
            <Td>{orders[number].orderDelivery.lastName}</Td>
          </Tr>
          <Tr>
            <Td>Mobile</Td>
            <Td>{orders[number].orderDelivery.mobile}</Td>
          </Tr>
          <Tr>
            <Td>Adress</Td>
            <Td>{orders[number].orderDelivery.adress1}</Td>
          </Tr>
          <Tr>
            <Td>City</Td>
            <Td>{orders[number].orderDelivery.city}</Td>
          </Tr>
          <Tr>
            <Td>Postcode</Td>
            <Td>{orders[number].orderDelivery.postcode}</Td>
          </Tr>
          <Tr>
            <Td>Adress</Td>
            <Td>{orders[number].orderDelivery.adress2}</Td>
          </Tr>
          <Tr>
            <Td>Country</Td>
            <Td>{orders[number].orderDelivery.country}</Td>
          </Tr>
        </tbody>
      </DeliveryDataTable>
    );
  }

  return (
    <>
      <MainContainer>
        <OrdersContainer>
          {itemsArray.map((items: OrderItem[], index: number) => (
            <OrderContainer>
              <>
                <ItemsContainer>
                  {items.map((singleItem, index) => (
                    <OrderItems key={index} orderItems={singleItem} />
                  ))}
                  <Total>Total: ${orders[index].orderTotal}</Total>
                </ItemsContainer>
                <DeliveryContainer>
                  <DeliveryAdressContainer>
                    {printAdress(index)}
                  </DeliveryAdressContainer>
                  <OrderDateContainer>
                    Order received:
                    {orders[index].orderCreatedDate.toDate().toString()}
                  </OrderDateContainer>
                </DeliveryContainer>
              </>
            </OrderContainer>
          ))}
        </OrdersContainer>
      </MainContainer>
    </>
  );
};

export default Orders;
