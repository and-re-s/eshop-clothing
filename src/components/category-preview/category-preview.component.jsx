import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  TitleLink,
  Preview,
  H2Container,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <H2Container>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      </H2Container>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
