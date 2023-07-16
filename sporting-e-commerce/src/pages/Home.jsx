import { styled } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import Carrossel from "../components/Carrossel";
import { useContext, useEffect, } from "react";
import axios from "axios";
import { LoggedContext } from "../contexts/UserContext";
import Header from "../components/Header";

export default function Home() {
  const {setQtdProduto, setTemProduto}= useContext(LoggedContext)
  
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
  }, [])
  
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
`;
