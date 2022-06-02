import { useContext } from "react";
import ProductCard from "../../product-card/product-card.component";
import { ProductsContext } from "../../../contexts/products.context";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="main-frame">
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
