import styled from "styled-components";
import logo from "../assets/logo-completa.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoggedContext } from "../contexts/UserContext";

export default function MenuLateral() {
  const loggedcontexto = useContext(LoggedContext)
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
        <Carrinho color={loggedcontexto.logged} onClick={loggedcontexto.logged ? () => {confirm('Você deseja sair da sua conta?'); localStorage.clear('token'); loggedcontexto.setLogged(false)} : () => navigate("/")}>{loggedcontexto.logged ? 'Logout' : 'Login'}</Carrinho>
        <Carrinho hide={loggedcontexto.logged} onClick={() => navigate("/cadastro")}>Cadastre-se</Carrinho>
      </MenuContainer>
    </>
  );
}
const Carrinho = styled.p`
  width: 16vw;
  height: 4vh;
  font-size: 18px;
  background-color: ${x => x.color ? 'red' : 'white'};
  color: black;
  font-weight: bold;
  border-radius: 5px;
  display: ${x => x.hide ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  margin-bottom: 1vh;
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(to bottom, black, ${x => x.color ? 'red, red' : '#318b42'});
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
