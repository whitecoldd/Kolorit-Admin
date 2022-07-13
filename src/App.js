import Topbar from "./comps/topbar/Topbar";
import Sidebar from "./comps/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { Container } from '@mui/material'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import { userRows, productRows, userData, productData } from './dummyData'
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin
  return (
    <>
      <Router>
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Routes>
            <Route exact path='/login' element={<Login />} />
            {admin && (
              <>
                <Route exact path='/' element={<Home userData={userData} />}></Route>
                <Route exact path='/newUser' element={<NewUser />}></Route>
                <Route exact path='/newProduct' element={<NewProduct />}></Route>
                <Route exact path='/product/:productId' element={<Product productData={productData} />}></Route>
                <Route exact path='/users' element={<UserList userRows={userRows} />}></Route>
                <Route exact path='/products' element={<ProductList productRows={productRows} />}></Route>
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
