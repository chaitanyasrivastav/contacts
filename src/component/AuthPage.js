import React from 'react';
import styled from 'styled-components';
import googleimg from "../assets/images/image12.png";


const Container = styled.div`
background-color: #E5E5E5;
height: 100vh;
width: 100%;
`;

const Section = styled.section`
position: relative;
top: 10%;
margin: auto;
width: fit-content;
height: fit-content;
background-color: #FFFFFF;
padding: 40px;
`;

const Input = styled.input`
width: 94%;
height: 60px;
border-radius: 4px;
border: 1px solid #0A45C2;
margin: 12px 0;
padding-left: 20px;
`;

const Button = styled.button`
width: 100%;
height: 60px;
background: #0A45C2;
color: #FFFFFF;
font-size: 20px;
font-weight: 600;
border-radius: 4px;
border: 0;
margin-top: 32px;
cursor: pointer;
`;

const P = styled.div`
text-align: center;
font-family: Poppins;
font-size: 20px;
font-weight: 600;
margin-bottom: 36px;
`;

const Img = styled.div`
text-align: center;
margin-bottom: 12px;
`;

class AuthPage extends React.Component {
    render() {
        return (<Container>
            <Section>
                <Img><img src={googleimg} /></Img>
                <P>Sign in with Google</P>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Button>Sign In</Button>
            </Section>
        </Container>)
    }
}

export default AuthPage;