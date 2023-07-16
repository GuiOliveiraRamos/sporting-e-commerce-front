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
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { LoggedContext } from "./contexts/UserContext";
import { useEffect, useState } from "react";

export default function App() {
const [logged, setLogged] = useState(false)
const [produto, setProduto] = useState([]);
const [temProduto, setTemProduto] = useState(false)
const [qtdProduto, setQtdProduto] = useState('')
useEffect(() => {
if (localStorage.getItem('token')){
  setLogged(true)
}
}, [localStorage.getItem('token')])

  return (
    <LoggedContext.Provider value={{logged, setLogged, produto, setProduto, qtdProduto, setQtdProduto, setTemProduto, temProduto}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<ProductsList />} />
          <Route path="/meu-carrinho" element={<Cart />} />
          <Route path="/comprador" element={<UserInfo />} />
          <Route path="/sobre-nos" element={<AboutUs />} />
          <Route path="/produtos/:id" element={<ProductsDetails />} />
          <Route path="/confirmacao" element={<ConfirmPurchase />} />
          <Route path="/compra-concluida" element={<Purchased />} />
        </Routes>
      </BrowserRouter>
    </LoggedContext.Provider>
  );
}
