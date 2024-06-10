import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../store/feature/auth/signup";
import { ToastContainer, toast } from 'react-toastify';



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



const SignUp = ()=>{

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const signUpState = useSelector((store)=> store.signUp)

    const {data, loading, error} = signUpState


    console.log("SIGN UP DATA: ", signUpState)

    const dispatch = useDispatch()

    const handleSignUp = (e)=>{
        e.preventDefault()
        dispatch(signUp({
            first_name:firstName,
            last_name: lastName,
            email:email,
            password: password
        }))
    }
    return (
        <Container>
            <ToastContainer />
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
                    <h2>Sign Up</h2>
                    <form>
                        <Input 
                            type="text" 
                            name="first_name" 
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                            topLabel="First Name"/>
                        <Input 
                            type="text" 
                            name="last_name" 
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                            topLabel="Last Name"/>
                        <Input 
                            type="text" 
                            name="email" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            topLabel="Email"/>
                        <Input 
                            type="password" 
                            name="password"  
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            topLabel="Password"/>
                        <Button 
                            onClick={handleSignUp}
                            title={loading ? <ClipLoader
                                size={10}
                                color="#ffffff"
                              /> : "Sign Up"}/>

                        <br></br>
                        <small>Already have an account? <Link to="/">Log in</Link> </small>
                    </form>
                </div>
            </ContainerSectionForm>
        </Container>
)
}

export default SignUp