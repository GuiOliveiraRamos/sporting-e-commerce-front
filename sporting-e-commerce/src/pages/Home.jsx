import { styled } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import partidaBasquete from "../assets/basket-partida.jpg";
import partidaFutebol from "../assets/partida-futebol.jpg";
import bolaFutebol from "../assets/bolaFutebol.jpg";
import camisaFutebol from "../assets/camisaFutebol.jpg";
import Carrossel from "../components/Carrossel";
import { useContext, useEffect, useState } from "react";
import { IconContext } from "react-icons/lib/cjs/iconContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { LoggedContext } from "../contexts/UserContext";
import Header from "../components/Header";

export default function Home() {
  const loggedcontexto = useContext(LoggedContext)
  const navigate = useNavigate()
  const [temProduto, setTemProduto] = useState(false)
  const [qtdProduto, setQtdProduto] = useState('')

  useEffect(()=>{
  axios.get(`${import.meta.env.VITE_API_URL}/meu-carrinho`, {
    headers:{token: localStorage.getItem('token')}
    })
  .then(res => {
    res.data.length === 0 ? setTemProduto(false) : setTemProduto(true)
    setQtdProduto(res.data.length)
  })
  .catch(err => {
    console.log(err)
    setTemProduto(false)
    setQtdProduto(0)
  })
  }, [loggedcontexto.logged])
  
  return (
    <>
      <MenuLateral />
      <D>
        <Header />
        <ListaProdutos>
        <Carrossel />
        </ListaProdutos>
      </D>
    </>
  );
}

const D = styled.div`
  margin-left: 18vw;
  height: 100vh;
  overflow: hidden;
`;

const ListaProdutos = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  img {
    height: 100%;
    opacity: 25%;
    position: relative;
  }
  /*
  div {
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 50px;
    font-family: "Roboto";
    color: #1fa74c;
  }*/
`;
