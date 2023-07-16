import { styled } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import us from "../assets/about-us.jpg"
import { useNavigate } from "react-router";


export default function AboutUs(props) {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <MenuLateral />
      <ContainerSobreNos>
      <div className="title">Quem somos</div>
      <div className="content">
        <div className="us">
          <img  src={us}/>
          <p>Acreditamos que o esporte é muito mais do que apenas uma atividade física. É um estilo de vida que promove saúde, bem-estar e superação pessoal. Nossa missão é oferecer a você os equipamentos certos para ajudá-lo a atingir seus objetivos e explorar todo o seu potencial esportivo.</p>
        </div>

        <div className="par2">
          <p >Na Sporting Store, valorizamos a satisfação do cliente acima de tudo. Nossa equipe está aqui para oferecer um atendimento personalizado, ajudando você a encontrar o produto perfeito para suas necessidades. Além disso, garantimos uma experiência de compra segura, fácil e rápida.</p>

          <p>Explore nossa loja virtual, descubra os produtos de alta qualidade que temos disponíveis e comece a aprimorar seu desempenho esportivo. Junte-se à comunidade do SportLab e aproveite a emoção de estar bem equipado para alcançar seus objetivos esportivos.</p>
        </div>
      </div>


        <Buttons>
          {localStorage.getItem("token") ? <button onClick={Logout}>Logout</button> : ""}
          <button>Continuar comprando</button>
        </Buttons>
        
      </ContainerSobreNos>
    </>
  );
}
const ContainerSobreNos = styled.div`
  position: fixed;
  top: 0;
  left: 18vw;
  bottom: 0;
  right: 0;
  background: rgb(118,184,130);
  background: linear-gradient(0deg, rgba(118,184,130,1) 7%, rgba(17,55,24,1) 59%, rgba(3,15,5,1) 94%);
  display: flex;
  flex-direction: column;
  
  p {
    padding-left: 70px;
    padding-right: 120px;
    margin-top: 20px;
    font-family: "Roboto";
    font-size: 20px;
    color: white;
    line-height: 30px;
  }
  .content {
    gap: 15px;
    display: flex;
    flex-direction: column;

  .us {
    display: flex;
    padding-top: 40px;
    border-radius: 7px;
    margin-left: 60px;
    img {
      width: 350px;
      margin-left: 30px;
      border-radius: 7px;
    }
  }
  }
  .title {
    padding-top: 40px;
    padding-bottom: 30px;
    font-family: "Roboto";
    font-size: 70px;
    color: white;
    text-align: center;
  }
`;

const Buttons = styled.div`
  margin-top: 50px;
  width: 800px;
  display: flex;
  justify-content: space-around;
  button {
    font-family: "Roboto";
    font-weight: 400;
    background-color: #144d22;
    width: 300px;
  }
`;
