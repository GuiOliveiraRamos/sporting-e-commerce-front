import { styled } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import background from "../assets/background-about.png"
import us from "../assets/about-us.jpg"

export default function AboutUs(props){

  return(
    <Background >
      <MenuLateral />
      

      <div><img className="us" src={us}/></div>
      <div><h1> Conheça um pouco mais sobre nós</h1>

    <div className="par1">
      <p>Acreditamos que o esporte é muito mais do que apenas uma atividade física. É um estilo de vida que promove saúde, bem-estar e superação pessoal. Nossa missão é oferecer a você os equipamentos certos para ajudá-lo a atingir seus objetivos e explorar todo o seu potencial esportivo.</p></div>

      <div className="par2">
        <p>Na SportLab, valorizamos a satisfação do cliente acima de tudo. Nossa equipe está aqui para oferecer um atendimento personalizado, ajudando você a encontrar o produto perfeito para suas necessidades. Além disso, garantimos uma experiência de compra segura, fácil e rápida.</p>

        <p>Explore nossa loja virtual, descubra os produtos de alta qualidade que temos disponíveis e comece a aprimorar seu desempenho esportivo. Junte-se à comunidade do SportLab e aproveite a emoção de estar bem equipado para alcançar seus objetivos esportivos.</p>
      </div>

</div>
      
      
    </Background>
    

    
  )

}

const Background = styled.div `
display: flex;
height: 100vh;
width: 100%;
gap: 25px;
background: rgb(118,184,130);
background: linear-gradient(0deg, rgba(118,184,130,1) 7%, rgba(17,55,24,1) 59%, rgba(3,15,5,1) 94%);
  .us {
    width: 100%;
    margin: 110px 35px 0px 280px;
    border-radius: 5px;
  }
  h1 {
    margin-top: 50px;
  }
  .par1 {
    margin-left: 280px;
    margin-right: 20px;
  }
  .par2 {
    margin-left: -60px;
    margin-right: 20px;
  }
  p {
    color: #fff;
    padding-top: 30px;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
  }
`
