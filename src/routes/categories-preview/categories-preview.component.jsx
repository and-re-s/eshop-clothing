import { Fragment } from "react";
import { useSelector } from "react-redux/es/exports";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategory } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategory);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
