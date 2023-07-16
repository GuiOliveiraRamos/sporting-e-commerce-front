import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";
import logo from "../assets/logo-simples.png";
import { LoggedContext } from "../contexts/UserContext";

export default function Login() {
  const loggedcontexto = useContext(LoggedContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function sendSignUpForm(ev) {
    ev.preventDefault();
    const loginInfo = { email, password };
    console.log(loginInfo);
    try {
      let res = await axios.post(`${import.meta.env.VITE_API_URL}/`, loginInfo);
      alert(`Login feito com sucesso!`);
      console.log(res.data);
      localStorage.setItem("token", res.data);
      loggedcontexto.setLogged(true)
      navigate("/home");
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

        <BtnsContainer>
          <SendBtn type="submit">Login</SendBtn>
        </BtnsContainer>
        <RedLink
          color="#318b42"
          type="reset"
          onClick={(ev) => {
            ev.preventDefault();
            navigate("/cadastro");
          }}
        >
          Ainda não tem um conta? <br /> Faça o cadastro
        </RedLink>
      </form>
      <SendBtn onClick={() => navigate("/produtos")}>Realizar login depois</SendBtn>
    </PageArea>
  );
}

const LogoSimples = styled.img`
  max-width: 500px;
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
  margin-top: -8px;
  color: #318b42;
  text-align: center;
  text-decoration-line: underline;
  font-style: italic;
  &:hover {
    cursor: pointer;
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
