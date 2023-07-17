import { styled } from "styled-components"
import { BsFillTrash3Fill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
export default function PurchasingProducts(props) {
    const price = parseFloat(props.price).toFixed(2);
    return (
        <MainContainer>
            <ImgContainer>
            <Image src={props.image}/>
            </ImgContainer>

            <InfoContainer>
                <ProductName>{props.name}</ProductName>
                <Price>R$ {price.replace('.', ',')}</Price>
            </InfoContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const ImgContainer = styled.div`
    box-sizing: border-box;
    width: 5vh;
    height: 5vh;
    border-radius: 50%;
    background-color: white;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Image = styled.img`
    width: 80%;
`
const InfoContainer = styled.div`
    width: 90%;
    height: 100%;
    background-color: #318b42;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: relative;
    border-radius: 5px;
`
const ProductName = styled.p`
    width: 65%;
    font-size: 100%;
    overflow: hidden;
    color: white;
    position: absolute;
    margin-left: 1%;
    left: 0;
`
const Price = styled.p`
    position: absolute;
    box-sizing: border-box;
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    left: 68%;
    font-size: 100%;
    border-left: 3px solid black;

    color: white;
`
