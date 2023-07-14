import { styled } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <ListaProdutos>
        {produto.map((item) => (
          <div>
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <h3>R${item.price}</h3>
          </div>
        ))}
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
    color: white;
  }
`;
