import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCategoriesStart, setCategories } from '../../store/categories/category.action';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const getCategoriesMap = ()=>{
        dispatch(fetchCategoriesStart());
    }
    getCategoriesMap();
},[])
  return (
    <Routes>
        <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
        <Route path=":category" element={<Category ></Category>}></Route>

    </Routes>
  );
};

export default Shop;
