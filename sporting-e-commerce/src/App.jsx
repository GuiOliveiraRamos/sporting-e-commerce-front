import Login from "./pages/Login";
import ProductsList from "./pages/ProductsList";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import ProductsDetails from "./pages/ProductsDetails";
import ConfirmPurchase from "./pages/ConfirmPurchase";
import Purchased from "./pages/Purchased";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import UserInfo from "./pages/UserInfo";
import {Route} from 'react-router-dom'
import { Routes } from "react-router-dom";

import axios from 'axios';
import UserProvider from "./contexts/UserContext";



export default function App() {

  return (
  <UserProvider>
  <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/cadastro' element={<SignUp />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/produtos/?pagina' element={<ProductsList />}/>
    <Route path='/meu-carrinho' element={<Cart />}/>
    <Route path='/comprador' element={<UserInfo />}/>
    <Route path='/sobre-nos' element={<AboutUs />}/>
    <Route path='/produtos/:id' element={<ProductsDetails />}/>
    <Route path='/confirmacao' element={<ConfirmPurchase />}/>
    <Route path='/compra-concluida' element={<Purchased />}/>
  </Routes>
  
  </UserProvider>
  )
}
