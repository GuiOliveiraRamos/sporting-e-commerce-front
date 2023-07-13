import { styled } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import bolaBasquete from "../assets/basket-partida.jpg";
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
        <ImgProdA src={bolaBasquete} alt="" />
        <DestaqueInfo>
          <DestaqueTitulo>Mês do Basquete</DestaqueTitulo>
          <DestaqueSubtitulo>Camiseta do seu time! <br/>Além de bermuda, tênis, bolas e acessórios!</DestaqueSubtitulo>
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
  border: 2px solid #318b425a ;
  padding-bottom: 10px;
  border-radius: 10px;
  &:hover{
    background-image: linear-gradient( to bottom, black, #00000068, #318b4268 );
  }
`
const DestaqueTitulo = styled.h1`
  color: white;
  font-size: 8vh;
  font-weight: bold;
  text-align: center;

`
const DestaqueSubtitulo = styled.h2`
  color: white;
  font-size: 4vh;
  text-align: center;
  font-style: italic;
`
const DestaqueBtn = styled.button`
  width: 15vw;
  height: 8vh;
  font-size: 3vh;
  background-color: #adff00;
  color: black;
  &:hover{
    background-image: linear-gradient( to top, black, #adff00, #adff00 );
    &:active {
      background-image: linear-gradient( to bottom, black, #adff00, #adff00 );
    }
  }
`

const ImgProdA = styled.img`
 width: 100%;
 opacity: 25%;
 position: relative;
`

const D = styled.div`
  margin-left: 18vw;
  height: 100vh;
  overflow-y: hidden;
`;
const Header = styled.div`
  height: 40px;
  width: 100%;
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

/*img {
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
  }*/
`;
