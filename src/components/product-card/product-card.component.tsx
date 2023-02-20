import { FC } from "react";

import { useDispatch, useSelector } from "react-redux";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { CategoryItem } from "../../store/categories/category.types";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  ProductCardContainer,
  ProductButton,
  ProductImg,
  Footer,
  Name,
} from "./product-card.styles";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <ProductImg src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name} hihihi</Name>
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
