import styled from "styled-components";
import logo from "../assets/logo-completa.png"

export default function MenuLateral() {
  return (
    <>
      <MenuContainer>
        <LogoComp src={logo} />
        <ul>
          <li>Home</li>
          <li>Produtos</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
        <p>CARRINHO DE COMPRAS</p>
      </MenuContainer>
    </>
  );
}
const LogoComp = styled.img`
  max-width: 280px;
  min-width: 80px;
  width: 80%;
  position: absolute;
  top: 10px;

`
const MenuContainer = styled.main`
  width: 18vw;
  height: 100vh;
  min-width: 80px;
  background-image: linear-gradient( to bottom, black, black,  #318b42 );
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Roboto";
  padding-top: 40vh;

  h1 {
    color: white;
  }
  ul {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    margin-bottom: 25vh;
  }
  p {
    position: absolute;
    bottom: 50vh;
    color: white;
    &:hover{
      cursor: pointer;
      color: #adff00;
      &:active {
        color: #318b42;
      }
    }
  }
  li{
    &:hover{
      cursor: pointer;
      color: #adff00;
      &:active {
        color: #318b42;
      }
    }
  }
`;
