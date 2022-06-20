import { useState, useEffect } from "react";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  TitleLink,
  Preview,
  H2Container,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  const [is3ItemsOptimal, setIs3ItemsOptimal] = useState(false);
  useEffect(() => {
    const minWidth = window.matchMedia("(min-width: 521px)");
    const maxWidth = window.matchMedia("(max-width: 767px)");
    const listener = () =>
      setIs3ItemsOptimal(minWidth.matches && maxWidth.matches);
    listener();
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [is3ItemsOptimal]);

  return (
    <CategoryPreviewContainer>
      <H2Container>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      </H2Container>
      <Preview>
        {is3ItemsOptimal
          ? products
              .filter((_, index) => index < 3)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          : products
              .filter((_, index) => index < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
