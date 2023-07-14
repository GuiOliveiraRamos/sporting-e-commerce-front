import { styled } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import partidaBasquete from "../assets/basket-partida.jpg";
import partidaFutebol from "../assets/partida-futebol.jpg"
import bolaFutebol from "../assets/bolaFutebol.jpg";
import camisaFutebol from "../assets/camisaFutebol.jpg";
import Carrossel from "../components/Carrossel";
import { useEffect, useState } from "react";

export default function Home() {

  
  return (
    <>
      <MenuLateral />
      <D>
        <Header>
          <p>Todos os produtos</p>
          <p>Roupas</p>
          <p>Calçados</p>
          <p>Brinquedos</p>
        </Header>
        <ListaProdutos>
        <Carrossel />
        </ListaProdutos>
      </D>
    </>
  );
}

const ImgProdA = styled.img`
 
`

const D = styled.div`
  margin-left: 18vw;
  height: 100vh;
  overflow: hidden;
`;
const Header = styled.div`
  position: fixed;
  z-index:10;
  top:0;
  left: 18vw;
  height: 40px;
  width: 82vw;
  background-image: linear-gradient( to bottom, black, #318b42 );
  font-family: "Roboto";
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    color: white;
    &:hover{
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
