import { styled } from "styled-components"
import { BsFillTrash3Fill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
export default function ProductContainer(props) {
    const price = parseFloat(props.price).toFixed(2);
    return (
        <MainContainer>
            <ImgContainer>
            <Image src={props.image}/>
            </ImgContainer>

            <InfoContainer>
                <ProductName>{props.name}</ProductName>
                <Price>R$ {price.replace('.', ',')}</Price>
                <RemoveBtn>
                <IconContext.Provider
            value={{
              style: { cursor: "pointer" },
              size: "50px"
            }}
          >
                <BsFillTrash3Fill />
                </IconContext.Provider>
                </RemoveBtn>
            </InfoContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    margin-bottom: 2vh;
    align-items: center;
    justify-content: space-between;
`
const ImgContainer = styled.div`
    box-sizing: border-box;
    width: 70px;
    height: 70px;
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
    font-size: 85%;
    overflow: hidden;
    color: white;
    position: absolute;
    margin-left: 1%;
    left: 0;
`
const Price = styled.p`
    position: absolute;
    box-sizing: border-box;
    width: 22%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 2%;
    left: 68%;
    font-size: 85%;
    border-left: 3px solid black;
    border-right: 3px solid black;
    color: white;
`
const RemoveBtn = styled.div`
    position: absolute;
    left: 93%;
    width:30px;
    height:30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    color: black;
    justify-content: center;
    font-size: 15px;

    &:hover{
     color: red;
    }
`