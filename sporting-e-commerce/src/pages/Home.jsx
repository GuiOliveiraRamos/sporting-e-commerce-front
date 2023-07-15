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
        <Header>
          <p>Todos os produtos</p>
          <p>Roupas</p>
          <p>Calçados</p>
          <p>Brinquedos</p>
          <IconBox onClick={() => navigate("/meu-carrinho")} temitem={temProduto}>
            <CountProdCart temitem={temProduto}>{qtdProduto}</CountProdCart>
          <IconContext.Provider
            value={{
              style: { cursor: "pointer" },
              color: "white",
              size: "50px",
              cursor: "pointer",
            }}
          >
            <AiOutlineShoppingCart />
          </IconContext.Provider>
          </IconBox>
        </Header>
        <ListaProdutos>
        <Carrossel />
        </ListaProdutos>
      </D>
    </>
  );
}
const CountProdCart = styled.div`
width: 20px;
height: 20px;
background-color: #adff00;
color: black;
font-weight: bold;
display: ${x => x.temitem ? 'flex' : 'none'};
align-items: center;
justify-content: center;
border-radius: 50%;
position: absolute;
top:0px;
right:-8px;

`;

const IconBox = styled.div`
width: 40px;
height: 40px;
background-color:${x => x.temitem ? 'white' : ''};
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
position: relative;
&:hover{
  cursor: pointer;
  background-color: #adff00;
  div {
    background-color: #318b42;
  }
}
`;

const D = styled.div`
  margin-left: 18vw;
  height: 100vh;
  overflow: hidden;
`;
const Header = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 18vw;
  height: 40px;
  width: 82vw;
  background-image: linear-gradient(to bottom, black, #318b42);
  font-family: "Roboto";
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    color: white;
    &:hover {
      cursor: pointer;
      color: #adff00;
      &:active {
        color: #318b42;
      }
    }
  }
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
