import { Route, Routes } from 'react-router-dom';
import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';
import SignIn from './components/routes/sign-in/sign-in.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='/shop' element={<Home></Home>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
