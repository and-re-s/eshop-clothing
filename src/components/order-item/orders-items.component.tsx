import { FC, memo } from "react";
import { OrderItem } from "../../store/orders/orders.types";

import {
  OrderPreviewItemContainer,
  ItemDetails,
  ItemImage,
  Name,
  Price,
} from "./orders-items.styles";

type OrderItemProps = {
  orderItems: OrderItem;
};

const OrderItems: FC<OrderItemProps> = memo(({ orderItems }) => {
  const { name, imageUrl, price, quantity } = orderItems;
  return (
    <OrderPreviewItemContainer>
      <ItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} * ${price}
        </Price>
      </ItemDetails>
    </OrderPreviewItemContainer>
  );
});

export default OrderItems;
