import styled from "styled-components";

export default function App() {
  return (
    <>
      <MenuLateral>
        <h1>
          LOJA DE
          <br /> ESPORTES
        </h1>
        <ul>
          <li>Home</li>
          <li>Produtos</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
        <p>CARRINHO DE COMPRAS</p>
      </MenuLateral>
    </>
  );
}

const MenuLateral = styled.main`
  width: 300px;
  height: 100%;
  background-color: #144d22;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-family: "Roboto";

  h1 {
    color: white;
  }
  ul {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
  }
  p {
    color: white;
  }
`;
