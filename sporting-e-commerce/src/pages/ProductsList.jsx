import { styled } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { LoggedContext } from "../contexts/UserContext";

export default function ProductsList(props) {
  const {setProduto, produto} = useContext(LoggedContext)
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/produtos`)
    .then((res) => {
      setProduto(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  return (
    <>
      <MenuLateral />
      <Header />
      <ListaProdutos>
        {produto.map((item) => {
          console.log(item._id.slice(-4))
          return(
          <div data-type={item.type} id= {item._id.slice(-4)} key={item._id.slice(-4)}>
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <Carrinho><ion-icon name="cart-outline"></ion-icon> Adicionar ao carrinho</Carrinho>
          </div>
        )})}
      </ListaProdutos>
    </>
  );
}
const Carrinho = styled.button`
  width: 16vw;
  height: 30px;
  font-size: 18px;
  background-color: #FFF;
  color: black;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(to bottom, black, ${x => x.color ? 'red, red' : '#318b42'});
    color: #adff00;
    &:active {
      color: #318b42;
    }
  }
`;
const ListaProdutos = styled.div`
  background-color: #467449;
  position: fixed;
  top: 0;
  left: 18vw;
  right: 0;
  bottom: 0;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 35px;
  overflow-y: auto;
  img {
    width: 200px;
    border-radius: 5px;
  }
  h2 {
    max-width: 225px;
    text-align: center;
  }
  
  div {
    padding: 20px 20px 50px 20px;
    width: 275px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    font-family: "Roboto";
    color: white;
    background-color: #8fc292;
    gap: 10px;
  }
`;
