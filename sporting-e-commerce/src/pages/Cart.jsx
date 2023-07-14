import { styled } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import { useNavigate } from "react-router";
export default function Cart(props) {
  const navigate = useNavigate();
  return (
    <>
      <MenuLateral />
      <ContainerCarrinho>
        <div>Que pena, parece que seu carrinho está vazio!</div>
        <button onClick={() => navigate("/home")}>Continuar comprando</button>
      </ContainerCarrinho>
    </>
  );
}

const ContainerCarrinho = styled.div`
  position: fixed;
  top: 0;
  left: 18vw;
  bottom: 0;
  right: 0;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Roboto";
  font-size: 30px;
  font-weight: 500;

  button {
    margin-top: 20px;
    width: 300px;
    background-color: #144d22;
    font-family: "Roboto";
    font-weight: 300;
    &:hover{
    background-image: linear-gradient( to top, black, #318b42, #318b42 );
    &:active {
      background-image: linear-gradient( to bottom, black, #318b42, #318b42 );
    }
  }
  }
`;