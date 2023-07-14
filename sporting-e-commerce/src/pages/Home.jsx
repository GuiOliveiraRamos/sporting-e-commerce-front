import { styled } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import partidaBasquete from "../assets/basket-partida.jpg";
import partidaFutebol from "../assets/partida-futebol.jpg";
import bolaFutebol from "../assets/bolaFutebol.jpg";
import camisaFutebol from "../assets/camisaFutebol.jpg";
import Carrossel from "../components/Carrossel";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib/cjs/iconContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function Home() {
  const navigate = useNavigate();
  const [rodarCarrossel, setRodarCarrossel] = useState(false);
  const [image, setImage] = useState(0);

  function mudarImagem() {
    setInterval(() => {
      n++;
      switch (n % 4) {
        case 0:
          setImage(0);
          console.log("foi 1");
          break;
        case 1:
          setImage(1);
          console.log("foi outro");
          break;
        case 2:
          setImage(2);
          console.log("foi mais um");
          break;
        default:
          setImage(3);
          console.log("foram todos");
      }
    }, 3000);
  }

  return (
    <>
      <MenuLateral />
      <D>
        <Header>
          <p>Todos os produtos</p>
          <p>Roupas</p>
          <p>Calçados</p>
          <p>Brinquedos</p>
          <IconContext.Provider
            value={{
              style: { cursor: "pointer" },
              color: "white",
              size: "50px",
              cursor: "pointer",
            }}
          >
            <AiOutlineShoppingCart onClick={() => navigate("/meu-carrinho")} />
          </IconContext.Provider>
        </Header>
        <ListaProdutos>
          <Carrossel image={partidaBasquete} />
          <ImgProdA src={partidaFutebol} alt="" />
          <DestaqueInfo>
            <DestaqueTitulo>Mês do Basquete</DestaqueTitulo>
            <DestaqueSubtitulo>
              Camiseta do seu time! <br />
              Além de bermuda, tênis, bolas e acessórios!
            </DestaqueSubtitulo>
            <DestaqueBtn>Venha conferir!</DestaqueBtn>
          </DestaqueInfo>
        </ListaProdutos>
      </D>
    </>
  );
}
const DestaqueInfo = styled.div`
  width: 60vw;
  height: 40vh;
  position: absolute;
  top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #318b425a;
  padding-bottom: 10px;
  border-radius: 10px;
  &:hover {
    background-image: linear-gradient(to bottom, black, #00000068, #318b4268);
  }
`;
const DestaqueTitulo = styled.h1`
  color: white;
  font-size: 8vh;
  font-weight: bold;
  text-align: center;
`;
const DestaqueSubtitulo = styled.h2`
  color: white;
  font-size: 4vh;
  text-align: center;
  font-style: italic;
`;
const DestaqueBtn = styled.button`
  width: 15vw;
  height: 8vh;
  font-size: 3vh;
  background-color: #adff00;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  &:hover {
    background-image: linear-gradient(to top, black, #adff00, #adff00);
    &:active {
      background-image: linear-gradient(to bottom, black, #adff00, #adff00);
    }
  }
`;

const ImgProdA = styled.img``;

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
