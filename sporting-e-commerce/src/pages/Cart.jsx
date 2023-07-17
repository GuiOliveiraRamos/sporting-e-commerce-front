import { styled } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { LoggedContext } from "../contexts/UserContext";
import axios from "axios";
import ProductContainer from "../components/ProductContainer";
export default function Cart() {
  const loggedcontexto = useContext(LoggedContext)
  const navigate = useNavigate();
  const [addedProducts, setAddedProducts] = useState([])

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/meu-carrinho`, {headers: {token: localStorage.getItem('token')}})
    .then(res=>{console.log(res); setAddedProducts(res.data)})
    .catch(err => {console.log(err); setAddedProducts([])})
  },[loggedcontexto.logged])
    let saldo = 0;
    addedProducts.map(x => {saldo += parseFloat(x.price)})
  return (
    <>
      <MenuLateral />
      <ContainerCarrinho>
        <Topper>
          <TituloI>Meu Carrinho </TituloI>
          <InfoCarrinho>
            <Quantidade>
            Itens: <br/> <strong>{addedProducts.length}</strong>  
            </Quantidade>
            <Saldo>
            Valor Total:<br/> <strong>R$ {saldo.toFixed(2).replace('.', ',')} </strong>
            </Saldo>
          </InfoCarrinho> 
        </Topper>
        {addedProducts.map(x => {
          return <ProductContainer key={x.name} name={x.name} price={x.price} image={x.image} />
          })}
        <PlaceHolderCart>{loggedcontexto.logged ? (addedProducts.length === 0 ? 'Que pena, parece que seu carrinho está vazio!' : '' ) : 'Você precisa fazer o login para acessar essa parte!'}</PlaceHolderCart>
        <button onClick={() => loggedcontexto.logged ? navigate("/produtos") : navigate("/")}>{loggedcontexto.logged ? 'Continuar comprando' : 'Fazer Login'}</button>
        {loggedcontexto.logged && addedProducts.length !== 0 ?  <button onClick={() => navigate('/comprador')}>Finalizar Compra</button> : ''}
      </ContainerCarrinho>
    </>
  );
}
const InfoCarrinho = styled.div`
width: 70%;
height: 100%;
display: flex;
flex-direction: row;
`
const Quantidade =styled.h2`
  width: 30%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid #adff00;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  strong{
    color: #318b42
  }
`
const Saldo = styled.h2`
  box-sizing: border-box;
  width: 70%;
  height: 100%;
  border: 2px solid #adff00;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  strong{
    color: #318b42
  }
  margin-right: 5vw;
`
const TituloI = styled.h1`
  width: 30%;
  display: flex;
  color: #adff00;
  align-items:center;
  justify-content: center;
`
const Topper = styled.div`
  width: 82vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 18vw;

`
const PlaceHolderCart = styled.div`
    text-align: center;
    width: 500px;
    line-height: 40px;
`
const ContainerCarrinho = styled.div`
  position: fixed;
  top: 0;
  left: 18vw;
  bottom: 0;
  right: 0;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: "Roboto";
  font-size: 30px;
  font-weight: 500;
  padding-top: 12vh;
  padding-right: 5vw;
  overflow-y: scroll;
  overflow-x: hidden;
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
