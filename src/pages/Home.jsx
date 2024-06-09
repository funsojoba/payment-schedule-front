import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../store/feature/auth/login";

import { ClipLoader } from "react-spinners";


import { Link } from "react-router-dom";


const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;

    @media only screen and (max-width:750px){
        height: auto;
    }
`

const ContainerSectionText = styled.div`
    background: url('/background.jpg?url');
    background-size: cover;
    background-position: center;
    flex: 1;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media only screen and (max-width:750px){
        display: none;
    }
`
const ContainerSectionForm = styled.div`
    
    flex: 1;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Title = styled.h1`
  font-size: 2em;
  text-align: left;
  color: #03fff2;
`;

const Paragraph = styled.p`
    color: #fff;
    text-align: left;
`



const Home = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state)=>state.logIn)

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(logIn({
            email: email,
            password: password
        }))
    }


    console.log(data)


    return (
        <Container>
            <ContainerSectionText>
                <div>
                    <Title>
                        Payment Scheduler!!
                    </Title>
                    <Paragraph>
                        Get things done at your convinience. Relax, we'll take care of it
                    </Paragraph>

                </div>
            </ContainerSectionText>

            <ContainerSectionForm>
                <div>
                    <h2>Log In</h2>
                    <form>
                        <Input 
                            type="text"
                            name="email" 
                            topLabel="Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}/>
                        <Input 
                            type="password" 
                            name="password"  
                            topLabel="Password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}/>
                        <Button title={loading ? <ClipLoader
                              size={10}
                              color="#ffffff"
                            /> : "Log in"} onClick={handleLogin} />
                        <br></br>
                        <small>Don't have an account? <Link to="/signup">Sign Up</Link> </small>
                    </form>
                </div>
            </ContainerSectionForm>
        </Container>
)
}

export default Home