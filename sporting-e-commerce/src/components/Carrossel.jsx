import { useEffect, useState } from "react";
import { styled } from "styled-components";
import partidaBasquete from "../assets/basket-partida.jpg";
import partidaFutebol from "../assets/partida-futebol.jpg";
import natacao from "../assets/natacao.jpeg";
import futebolAmericano from "../assets/partida-futebol-americano.jpg"
import dayjs from 'dayjs'
const arrayDeImagens = [partidaBasquete, partidaFutebol, natacao, futebolAmericano]

const arrayDeInfos = [{
    titulo: 'Mês do Basquete!',
    subtitulo: 'Camiseta do seu time! \n Além de bermuda, tênis, bolas e acessórios!'
}, {
    titulo: 'Futebol em promoção!',
    subtitulo: 'Camisas de Ronaldinho Gaúcho a Juninho Pernambucano!'
}, {
    titulo: 'Ti BOOM!',
    subtitulo: 'Toucas, óculos de natação, roupas de mergulho e mais!'
}, {
    titulo: 'TOUCHDOWN!!',
    subtitulo: 'Adquira já sua jersey dos Chiefs!'
}]


export default function Carrossel(props){
  const [rodarCarrossel, setRodarCarrossel] = useState(false)
  const [image, setImage] = useState(0);
  const [contador, setContador] = useState(false)
  let start=0;
  const temporizador = 8000;
  
  function mudarImagem(){ 
    if(contador) return ''

    const meuIntervalo = setInterval(()=> {
      const now = Date.now()
      rodarCarrossel ? setRodarCarrossel(false) : setRodarCarrossel(true)
      const n = now - start
      switch (Math.ceil(n/temporizador)%4){
      case 0:
        setImage(0)
        setRodarCarrossel(true)
        break;  
      case 1:
        setImage(1)
        setRodarCarrossel(true)
        break;
      case 2:
        setImage(2)
        setRodarCarrossel(true)
        break;
      case 3:
        setImage(3)
        setRodarCarrossel(true)
        break;
      default:
        break;
      }
      setRodarCarrossel(false)
      setContador(true)
    }, temporizador)
  }

  useEffect(()=> {
      start = dayjs(new Date)
      mudarImagem()

  }, [])
      


  return(
    <>
    <Image src={arrayDeImagens[image]} />
    <DestaqueInfo>
      <DestaqueTitulo>{arrayDeInfos[image].titulo}</DestaqueTitulo>
      <DestaqueSubtitulo>{arrayDeInfos[image].subtitulo}</DestaqueSubtitulo>
      <DestaqueBtn>Venha conferir!</DestaqueBtn>
    </DestaqueInfo>
    </>
  )
}
const Image = styled.img`  
    height: 100%;
    width: 100%;
    opacity: 25%;
    position: relative;
`
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
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  &:hover{
    background-image: linear-gradient( to top, black, #adff00, #adff00 );
    &:active {
      background-image: linear-gradient( to bottom, black, #adff00, #adff00 );
    }
  }
`
