import { styled } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import bolaBasquete from "../assets/bolaBasquete.jpg";
import bolaFutebol from "../assets/bolaFutebol.jpg";
import camisaFutebol from "../assets/camisaFutebol.jpg";

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
          <div>
            <img src={bolaBasquete} alt="" />
            <h2>Bola de Basquete</h2>
            <h3>R$ 50,00</h3>
          </div>
          <div>
            <img src={bolaFutebol} alt="" />
            <h2>Bola de Futebol</h2>
            <h3>R$ 35,00</h3>
          </div>
          <div>
            <img src={camisaFutebol} alt="" />
            <h2>Camisa de Futebol</h2>
            <h3>R$ 100,00</h3>
          </div>
          <div>
            <img src={bolaBasquete} alt="" />
            <h2>Bola de Basquete</h2>
            <h3>R$ 50,00</h3>
          </div>
          <div>
            <img src={bolaFutebol} alt="" />
            <h2>Bola de Futebol</h2>
            <h3>R$ 35,00</h3>
          </div>
          <div>
            <img src={camisaFutebol} alt="" />
            <h2>Camisa de Futebol</h2>
            <h3>R$ 100,00</h3>
          </div>
          <div>
            <img src={bolaBasquete} alt="" />
            <h2>Bola de Basquete</h2>
            <h3>R$ 50,00</h3>
          </div>
          <div>
            <img src={bolaFutebol} alt="" />
            <h2>Bola de Futebol</h2>
            <h3>R$ 35,00</h3>
          </div>
        </ListaProdutos>
      </D>
    </>
  );
}

const D = styled.div`
  margin-left: 300px;
`;
const Header = styled.div`
  height: 40px;
  width: 100%;
  background-color: #144d22;
  font-family: "Roboto";
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    color: white;
  }
`;
const ListaProdutos = styled.div`
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  img {
    width: 200px;
  }
  div {
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 50px;
    font-family: "Roboto";
    color: #1fa74c;
  }
`;
