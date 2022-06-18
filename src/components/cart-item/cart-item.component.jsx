import {
  CartItemContainer,
  ItemDetails,
  ItemImage,
  Name,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} * ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
