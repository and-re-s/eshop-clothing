import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

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
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
