import styled from "styled-components";
import logo from "../assets/logo-completa.png";
import { useNavigate } from "react-router-dom";
import bolaBasquete from "../assets/bolaBasquete.jpg";

export default function MenuLateral() {
  const navigate = useNavigate();
  return (
    <>
      <MenuContainer>
        <LogoComp src={logo} />
        <ul>
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/produtos")}>Produtos</li>
          <li onClick={() => navigate("/sobre-nos")}>Sobre</li>
          <li>Contato</li>
        </ul>
        <Carrinho onClick={() => navigate("/meu-carrinho")}>
          Meu Carrinho
        </Carrinho>
        <Carrinho onClick={() => navigate("/")}>Login</Carrinho>
        <Carrinho onClick={() => navigate("/cadastro")}>Cadastre-se</Carrinho>
      </MenuContainer>
    </>
  );
}
const Carrinho = styled.p`
  width: 16vw;
  height: 4vh;
  font-size: 18px;
  background-color: white;
  color: black;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1vh;
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(to bottom, black, #318b42);
    color: #adff00;
    &:active {
      color: #318b42;
    }
  }
`;
const LogoComp = styled.img`
  max-width: 280px;
  min-width: 80px;
  width: 80%;
  position: absolute;
  top: 10px;
`;
const MenuContainer = styled.main`
  width: 18vw;
  height: 100vh;
  min-width: 80px;
  background-image: linear-gradient(to bottom, black, black, #318b42);
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
    margin-bottom: 6vh;
  }
  li {
    &:hover {
      cursor: pointer;
      color: #adff00;
      &:active {
        color: #318b42;
      }
    }
  }
`;
