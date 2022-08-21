import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCardContainer,
  ProductButton,
  ProductImg,
  Footer,
  Name,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <ProductImg src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <span className="price">{price}</span>
      </Footer>
      <ProductButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </ProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
