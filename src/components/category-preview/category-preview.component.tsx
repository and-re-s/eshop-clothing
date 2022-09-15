import { FC } from "react";

import { CategoryItem } from "../../store/categories/category.types";

import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  H2Container,
  Preview,
  TitleLink,
} from "./category-preview.styles";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <H2Container>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      </H2Container>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
