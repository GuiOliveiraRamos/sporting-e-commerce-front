import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../assets/logo-simples.png";
import axios from "axios";
export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState("");

  async function sendSignUpForm(ev) {
    ev.preventDefault();
    if (checkPass !== password)
      return alert(
        `A senha digitada no campo "confirme sua senha" deve ser igual à digitada em "senha" `
      );
    const signUpInfo = { name, email, password };
    console.log(signUpInfo);
    console.log(import.meta.env.VITE_API_URL);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/cadastro`, signUpInfo);
      alert(
        `Cadastro feito com sucesso! \n Agora você será direcionado ao login!`
      );
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(`${err.status} - ${err.message}`);
    }
  }

  return (
    <PageArea>
      <LogoSimples src={logo} />
      <form onSubmit={(ev) => sendSignUpForm(ev)}>
        <LIContainer>
          <LabelsCadastro htmlFor="username">Nome:</LabelsCadastro>
          <InputCadastro
            onChange={(x) => setName(x.target.value)}
            id="username"
            type="text"
            placeholder="nome"
            required
          ></InputCadastro>
        </LIContainer>

        <LIContainer>
          <LabelsCadastro htmlFor="email">E-mail:</LabelsCadastro>
          <InputCadastro
            onChange={(x) => setEmail(x.target.value)}
            type="email"
            id="email"
            placeholder="e-mail"
            required
          ></InputCadastro>
        </LIContainer>

        <LIContainer>
          <LabelsCadastro htmlFor="password">Senha:</LabelsCadastro>
          <InputCadastro
            onChange={(x) => setPassword(x.target.value)}
            type="password"
            id="password"
            placeholder="senha"
            required
          ></InputCadastro>
        </LIContainer>

        <LIContainer>
          <LabelsCadastro htmlFor="checkPassword">
            Confirme sua senha:
          </LabelsCadastro>
          <InputCadastro
            onChange={(x) => setCheckPass(x.target.value)}
            type="password"
            id="checkPassword"
            placeholder="confirme sua senha"
            required
          ></InputCadastro>
        </LIContainer>

        <BtnsContainer>
          <RedLink
            color="#154e20"
            type="reset"
            onClick={(ev) => {
              ev.preventDefault();
              confirm("Você deseja cancelar o seu cadastro?")
                ? navigate("/home")
                : "";
            }}
          >
            cancelar
          </RedLink>
          <SendBtn type="submit">Cadastrar</SendBtn>
        </BtnsContainer>
        <RedLink
          color="#318b42"
          type="reset"
          onClick={(ev) => {
            ev.preventDefault();
            navigate("/");
          }}
        >
          Já tem um conta? <br /> Faça o login
        </RedLink>
      </form>
    </PageArea>
  );
}

const LogoSimples = styled.img`
  max-width: 300px;
  width: 80%;
  background-color: black;
`;

const LIContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
`;

const LabelsCadastro = styled.label`
  font-size: 20px;
  margin-left: 17%;
  color: white;
`;
const SendBtn = styled.button`
  max-width: 250px;
  width: 50%;
  background-color: #adff00;
  color: black;
`;
const RedLink = styled.a`
  font-size: 18px;
  margin-top: -10px;
  color: ${(x) => x.color};
  text-align: center;
  text-decoration-line: underline;
  font-style: italic;
  &:hover {
    cursor: pointer;
    color: #adff00;
    &:active {
      color: #318b42;
    }
  }
`;
const InputCadastro = styled.input`
  width: 65%;
  height: 20px;
  background-color: #318b42;
  color: #adff00;
  margin-left: 15%;
  margin-right: 20%;
  &::placeholder {
    color: white;
  }
`;
const BtnsContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  gap: 13%;
  justify-content: center;
`;
const PageArea = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: black;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Roboto";
`;
