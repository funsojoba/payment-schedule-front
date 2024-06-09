import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";


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
                    <h2>Sign Up</h2>
                    <form>
                        <Input type="text" name="first_nname" topLabel="First Name"/>
                        <Input type="text" name="last_name" topLabel="Last Name"/>
                        <Input type="text" name="email" topLabel="Email"/>
                        <Input type="password" name="password"  topLabel="Password"/>
                        <Button title="Submit" />

                        <br></br>
                        <small>Already have an account? <Link to="/">Log in</Link> </small>
                    </form>
                </div>
            </ContainerSectionForm>
        </Container>
)
}

export default SignUp