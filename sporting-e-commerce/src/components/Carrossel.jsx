import { useState } from "react";
import { styled } from "styled-components";
export default function Carrossel(props){
    



    return(
        <Image src={props.image} />
    )
}
const Image = styled.img`  
    height: 100%;
    width: 100%;
    opacity: 25%;
    position: relative;
`
