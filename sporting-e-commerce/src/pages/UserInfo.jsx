import { styled } from "styled-components";
import cep from 'cep-promise'
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedContext } from "../contexts/UserContext";
import logo from "../assets/logo-simples.png";
import { IconContext } from "react-icons/lib/cjs/iconContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import Visa from '../assets/visa-logo.png'
import DinnersClub from '../assets/dinnersclub-logo.png'
import Mastercard from '../assets/mastercard-logo.png'
import AmericanExpress from '../assets/american-express-logo.png'
export default function UserInfo() {
    const loggedcontexto = useContext(LoggedContext)
    const navigate = useNavigate()
    const [temProduto, setTemProduto] = useState(false)
    const [qtdProduto, setQtdProduto] = useState('')
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [CEP, setCEP] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState("")
    const [divBandeira, setDivBandeira] = useState('')
    const [bandeira, setBandeira] = useState('')
    const [titular, setTitular] = useState('')
    const [vencimento, setVencimento] = useState('')
    const [codSeguranca, setCodSeguranca] = useState('')

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/cadastro`, { headers: { token: localStorage.getItem('token') } })
            .then(res => {
                setEmail(res.data.email)
                setName(res.data.name)
            })
    }, [])
    function cpfMascara(cpf) {
        let cpfFormat = cpf.target.value.replace(/\D/g, "");
        cpfFormat = cpfFormat.replace(/(\d{3})(\d)/, "$1.$2");
        cpfFormat = cpfFormat.replace(/(\d{3})(\d)/, "$1.$2");
        cpfFormat = cpfFormat.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpf.target.value = cpfFormat;
    }

    function cepMascara(cep) {
        let cepFormatado = cep.target.value.replace(/\D/g, "")
        setCEP(cepFormatado)

        cepFormatado = cepFormatado.replace(/^(\d{5})(\d)/, "$1-$2")
        cep.target.value = cepFormatado;
    }
    function checkCEP() {
        cep(CEP)
            .then(res => {
                console.log(res)
                setLogradouro(res.street)
                setBairro(res.neighborhood)
                setCidade(res.city)
                setEstado(res.state)
            })
            .catch(err => {
                setLogradouro('')
                setBairro('')
                setCidade('')
                setEstado('')
            })

        if (!CEP) {
            setLogradouro('')
            setBairro('')
            setCidade('')
            setEstado('')
        }
    }

    function cartaoMascara(cartao) {
        let cartaoFormat = cartao.target.value
        cartaoFormat = cartaoFormat.replace(/\D/g, "");
        cartaoFormat = cartaoFormat.replace(/^(\d{4})(\d)/g, "$1 $2");
        cartaoFormat = cartaoFormat.replace(/^(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3");
        cartaoFormat = cartaoFormat.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3 $4");

        cartao.target.value = cartaoFormat;
        const identificador = cartaoFormat.length >= 2 ? cartaoFormat[0] + cartaoFormat[1] : ''
        console.log(identificador)
        if (identificador.length >= 2){
            setDivBandeira(true)
            if (parseInt(identificador[0]) === 4){
                setBandeira(Visa)
            } else if (parseInt(identificador) === 36 || parseInt(identificador) === 38 ){
                setBandeira(DinnersClub)
            } else if (parseInt(identificador) === 34 || parseInt(identificador) === 37 ){
                setBandeira(AmericanExpress)
            } else if (parseInt(identificador) >= 51 && parseInt(identificador) <= 55){
                setBandeira(Mastercard)
            }
        } else{
            setBandeira('')
            setDivBandeira('')
        }

    }

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

    function celMascara(cel) {
        let celFormat = cel.target.value.replace(/\D/g, "");
        celFormat = celFormat.replace(/^(\d\d)(\d)/g, "($1)$2");
        celFormat = celFormat.replace(/(\d{5})(\d)/, "$1-$2");
        cel.target.value = celFormat;
    }

    return (
        <>
            <D>
                <ContainerDadosUsuario id="dados-do-comprador" onSubmit={(ev) => sendSignUpForm(ev)}>
                <Divisoria><span> </span><p> PESSOAIS </p><span> </span></Divisoria>
                    <LIContainer>
                        <LabelsCadastro htmlFor="email">E-mail:</LabelsCadastro>
                        <InputCadastro
                            onChange={(x) => setEmail(x.target.value)}
                            type="email"
                            id="email"
                            placeholder="e-mail"
                            value={email}
                            disabled
                            readOnly
                        ></InputCadastro>
                    </LIContainer>

                    <LIContainer>
                        <LabelsCadastro htmlFor="name">Nome:</LabelsCadastro>
                        <InputCadastro
                            type="text"
                            id="name"
                            placeholder="nome"
                            value={name}
                            disabled
                            readOnly
                        ></InputCadastro>
                    </LIContainer>

                    <LIContainer>
                        <LabelsCadastro htmlFor="CPF">CPF:</LabelsCadastro>
                        <InputCadastro
                            onKeyUp={cpfMascara}
                            name="CPF"
                            id="CPF"
                            maxLength='14'
                            placeholder="xxx.xxx.xxx-xx"
                            required
                        ></InputCadastro>
                    </LIContainer>

                    <LIContainer>
                        <LabelsCadastro htmlFor="CEL">Celular:</LabelsCadastro>
                        <InputCadastro
                            onKeyUp={celMascara}
                            name="CEL"
                            id="CEL"
                            maxLength='14'
                            placeholder="(xx)xxxxx-xxxx"
                            required
                        ></InputCadastro>
                    </LIContainer>
                    <Divisoria><span> </span><p> ENDEREÇO </p><span> </span></Divisoria>
                    <LIContainer>
                        <LabelsCadastro htmlFor="CEP">CEP:</LabelsCadastro>
                        <InputCadastro
                            onKeyUp={cepMascara}
                            onBlur={checkCEP}
                            name="CEP"
                            id="CEP"
                            maxLength='9'
                            placeholder="xxxxx-xxx"
                            required
                        ></InputCadastro>
                    </LIContainer>

                    <ContainerEndereco>
                        <LIContainer>
                            <LabelsCadastro htmlFor="logradouro">Logradouro:</LabelsCadastro>
                            <InputCadastro
                                value={logradouro}
                                name="logradouro"
                                id="logradouro"
                                disabled
                                readOnly
                            ></InputCadastro>
                        </LIContainer>

                        <LIContainer>
                            <LabelsCadastro htmlFor="numero">Número:</LabelsCadastro>
                            <InputCadastro
                                type="number"
                                onChange={x => setNumero(x.target.value)}
                                value={numero}
                                name="numero"
                                id="numero"
                                required
                            ></InputCadastro>
                        </LIContainer>

                        <LIContainer>
                            <LabelsCadastro htmlFor="complemento">Complemento:</LabelsCadastro>
                            <InputCadastro
                                onChange={x => setComplemento(x.target.value)}
                                value={complemento}
                                name="complemento"
                                id="complemento"
                                required
                            ></InputCadastro>
                        </LIContainer>

                        <LIContainer>
                            <LabelsCadastro htmlFor="bairro">Bairro:</LabelsCadastro>
                            <InputCadastro
                                value={bairro}
                                name="bairro"
                                id="bairro"
                                disabled
                                readOnly
                            ></InputCadastro>
                        </LIContainer>

                        <LIContainer>
                            <LabelsCadastro htmlFor="cidade">Cidade:</LabelsCadastro>
                            <InputCadastro
                                value={cidade}
                                name="cidade"
                                id="cidade"
                                disabled
                                readOnly
                            ></InputCadastro>
                        </LIContainer>
                        <LIContainer name="estadoSigla">
                            <LabelsCadastro htmlFor="estado">Estado:</LabelsCadastro>
                            <InputCadastro
                                value={estado}
                                name="estado"
                                id="estado"
                                disabled
                                readOnly
                            ></InputCadastro>
                        </LIContainer>
                    </ContainerEndereco>
                    <Divisoria><span> </span><p> CARTÃO </p><span> </span></Divisoria>
                    <LIContainer>
                        <LabelsCadastro htmlFor="cartao">Cartão de crédito:</LabelsCadastro>
                        <InputCadastro
                            onKeyUp={cartaoMascara}
                            name="cartao"
                            id="cartao"
                            maxLength='19'
                            placeholder="xxxx xxxx xxxx xxxx"
                            required
                        ></InputCadastro>
                        <DivBandeira able={divBandeira} bandeira={bandeira} >
                            {bandeira ? '' : 'inválido'}
                            <ImgBandeira src={bandeira}/>
                        </DivBandeira>
                    </LIContainer>
                    <LIContainer>
                        <LabelsCadastro htmlFor="titular">Titular do cartão:</LabelsCadastro>
                        <InputCadastro
                            onChange={x => setTitular(x.target.value)}
                            name="titular"
                            id="titular"
                            type="text"
                            required
                        ></InputCadastro>
                    </LIContainer>
                    <ContainerCartao>
                    <LIContainer>
                        <LabelsCadastro htmlFor="vencimento">Vencimento do cartão:</LabelsCadastro>
                        <InputCadastro
                            onChange={x => setVencimento(x.target.value)}
                            name="vencimento"
                            id="vencimento"
                            maxLength='5'
                            required
                        ></InputCadastro>
                    </LIContainer>
                    <LIContainer>
                        <LabelsCadastro htmlFor="codSeguranca">Código de segurança do cartão:</LabelsCadastro>
                        <InputCadastro
                            onChange={x => setCodSeguranca(x.target.value)}
                            name="codSeguranca"
                            id="codSeguranca"
                            type='password'
                            maxLength='5'
                            required
                        ></InputCadastro>
                    </LIContainer>
                    </ContainerCartao>
                </ContainerDadosUsuario>
                <ContainerDadosPedido>
                    <LogoContainer>
                        <LogoSimples src={logo} />
                    </LogoContainer>
                    <BtnsContainer>
                        <SendBtn form="dados-do-comprador" type="submit">Finalizar Compra</SendBtn>
                    </BtnsContainer>
                </ContainerDadosPedido>
            </D>
        </>
    )
}
const Divisoria = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        color: #adff00;
        margin-left: 5px;
        margin-right: 5px;
    }
    span{
        width: 100%;
        height: 0.2px;
        border: 1px dashed #318b42;
        display: flex;
        font-weight: bold;
        align-items: center;
        justify-content: center;

    }

`
const DivBandeira = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${x => !x.bandeira? 'red' : 'white'};
    position: absolute;
    top: 40%;
    left: 8%;
    font-size: 12px;
    border-radius: ${x => !x.bandeira? '10px' : '50%'};
    display: ${x => x.able? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    overflow: hidden;
`
const ImgBandeira = styled.img`
    width: 100%;
`

const ContainerCartao = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    line-height: 15px;
    gap: 30px;
    div{
        height: 100px;
        width:  30%;
    }
`    
const ContainerEndereco = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    line-height: 15px;
    gap: 30px;
    padding-left: -40px;
    div{
        height: 100px;
        width:  30%;
    }
`
const ContainerDadosPedido = styled.div`
  box-sizing: border-box;
  height: auto;
  width: 35vw;
  border: 5px solid #adff00;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10vh;
  align-items: center;
`;
const LogoContainer = styled.div`
    width: 30vw;
    max-width: 200px;
    margin-top: 1vh;
    background-color:white;
    display: flex;
    align-items: center;
    justify-content: center;
`
const LogoSimples = styled.img`
    width: 100%;
`;
const D = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(to bottom, black, black, #318b42);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const ContainerDadosUsuario = styled.form`
    width: 63vw;
    padding-top: 1vh;
    border: 5px solid #318b42;
    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow-y: scroll;
    gap: 20px;
    
`;

const LIContainer = styled.div`
    width: ${x => x.name === "estado" ? "11%" : "100%"};
    min-width: ${x => x.name === "estado" ? "10px" : "90px"};
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    position: relative;
    gap: 5px;
`;

const LabelsCadastro = styled.label`
  font-size: 19px;
  margin-left: 17%;
  color: white;
`;
const SendBtn = styled.button`
  max-width: 250px;
  width: 100%;
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
  width: ${x => x.name === "estado" ? "11%" : "65%"};
  min-width:${x => x.name === "estado" ? "20px" : "75px"};
  height: 20px;
  background-color: #318b42;
  color: #adff00;
  margin-left: 15%;
  margin-right: 20%;
  &::placeholder {
    color: white;
  };
  &:disabled{
    opacity: 30%;
  };
  &:hover {
    background-color: #00000020;
    &:disabled{
    background-color: #318b42;
    opacity: 30%;
  };
  }
  &:focus{
        background-color: black;
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

/*
const CountProdCart = styled.div`
width: 20px;
height: 20px;
background-color: #adff00;
color: black;
font-weight: bold;
display: ${x => true ? 'flex' : 'none'};
align-items: center;
justify-content: center;
border-radius: 50%;
position: absolute;
top:0px;
right:-8px;

`;

const IconBox = styled.div`
width: 40px;
height: 40px;
background-color:${x =>true ? 'white' : ''};
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
position: relative;
&:hover{
  cursor: pointer;
  background-color: #adff00;
  div {
    background-color: #318b42;
  }
}
`;
const Header = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 18vw;
  height: 40px;
  width: 82vw;
  background-image: linear-gradient(to bottom, black, #318b42);
  font-family: "Roboto";
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    color: white;
    &:hover {
      cursor: pointer;
      color: #adff00;
      &:active {
        color: #318b42;
      }
    }
  }
`;
*/