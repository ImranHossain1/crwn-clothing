import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { useEffect } from 'react';
import { checkUserSession } from './store/user/user.action';
import { useDispatch } from 'react-redux';



const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession())
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='/shop/*' element={<Shop></Shop>}></Route>
        <Route path='/sign-in' element={<Authentication/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
