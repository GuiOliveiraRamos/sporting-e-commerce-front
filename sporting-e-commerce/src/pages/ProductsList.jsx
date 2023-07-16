import { styled } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

export default function ProductsList(props) {
  const [produto, setProduto] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/produtos`)
    .then((res) => {
      setProduto(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
    ;
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
          </div>
        
        )})}
      </ListaProdutos>
    </>
  );
}

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
    padding: 20px 20px 40px 20px;
    width: 275px;
    height: 250px;
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
