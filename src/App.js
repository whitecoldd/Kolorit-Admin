import Topbar from "./comps/topbar/Topbar";
import Sidebar from "./comps/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { Container } from '@mui/material'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import { userRows, productRows, userData, productData } from './dummyData'
import NewUser from "./pages/newUser/NewUser";
import NewCategory from "./pages/newCategory/NewCategory";
import ProductList from "./pages/productList/ProductList";
import SliderList from "./pages/sliderList/SliderList";
import CategoryList from "./pages/categoryList/CategoryList";
import Product from "./pages/product/Product";
import Category from "./pages/category/category";
import Slider from "./pages/slider/Slider";
import NewProduct from "./pages/newProduct/NewProduct";
import NewSlider from "./pages/newSlider/NewSlider";
import Login from "./pages/login/Login";
import { useContext } from 'react'
import { AuthContext } from '../src/contexts/authContext'
import { useSelector } from 'react-redux'
function App() {
  //const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin
  const admin = useSelector((state) => state.user.currentUser);
  const { user } = useContext(AuthContext)
  return (
    <>
      <Router>
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Routes>
            <Route exact path='/login' {...admin ? <Navigate to="/"/> : <Navigate to="/login"/>} element={<Login />} />
            {admin && (
              <>
                <Route exact path='/' element={<Home userData={userData} />}></Route>
                <Route exact path='/newUser' element={<NewUser />}></Route>
                <Route exact path='/newProduct' element={<NewProduct />}></Route>
                <Route exact path='/newCategory' element={<NewCategory />}></Route>
                <Route exact path='/newSlider' element={<NewSlider />}></Route>
                <Route exact path='/product/:productId' element={<Product productData={productData} />}></Route>
                <Route exact path='/category/:categoryId' element={<Category />}></Route>
                <Route exact path='/slider/:sliderId' element={<Slider />}></Route>
                <Route exact path='/users' element={<UserList userRows={userRows} />}></Route>
                <Route exact path='/products' element={<ProductList productRows={productRows} />}></Route>
                <Route exact path='/categories' element={<CategoryList />}></Route>
                <Route exact path='/sliders' element={<SliderList />}></Route>
                <Route exact path='/users/:userId' element={<User userRows={userRows} />}></Route>
              </>
            )}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
