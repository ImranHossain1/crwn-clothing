import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from 'react-redux';

import { CategoryContainer, Title } from "./category.styles";
import { selectCategoriesMap } from "../../store/categories/category.selector";
const Category = () => {
  const { category } = useParams();
  const categoriesMap  = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;