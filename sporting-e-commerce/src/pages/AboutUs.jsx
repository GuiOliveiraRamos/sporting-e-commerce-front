import { styled } from "styled-components";
export default function AboutUs(props){

  return (
    <>
      <MenuLateral />
      <ContainerSobreNos>
        <h3>Quem somos</h3>
        
        <p>Acreditamos que o esporte é muito mais do que apenas uma atividade física. É um estilo de vida que promove saúde, bem-estar e superação pessoal. Nossa missão é oferecer a você os equipamentos certos para ajudá-lo a atingir seus objetivos e explorar todo o seu potencial esportivo.</p>
        <p>Na SportLab, valorizamos a satisfação do cliente acima de tudo. Nossa equipe está aqui para oferecer um atendimento personalizado, ajudando você a encontrar o produto perfeito para suas necessidades. Além disso, garantimos uma experiência de compra segura, fácil e rápida.</p>
        <p>Explore nossa loja virtual, descubra os produtos de alta qualidade que temos disponíveis e comece a aprimorar seu desempenho esportivo. Junte-se à comunidade do SportLab e aproveite a emoção de estar bem equipado para alcançar seus objetivos esportivos.</p>
        <Buttons>
          <button onClick={Logout}>Logout</button>
          <button>Continuar comprando</button>
        </Buttons>
      </ContainerSobreNos>
    </>
  );
}