import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
width: 100%;
height: 78px;
background: linear-gradient(90.21deg, #053ED1 0%, #0F4EAC 100%);
`;

const Headertitle = styled.div`
height: 27px;
margin-left: 130px;
padding-top: 16px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18px;
display: flex;
align-items: center;
letter-spacing: 0.08em;
color: #FFFFFF;
`;

const HeaderEmail = styled.div`
height: 18px;
margin-left: 128px;
paddings-top: 10px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height */
display: flex;
align-items: center;
letter-spacing: 0.08em;
color: #FFFFFF;
`;

const Content = styled.div`
margin: auto;
`;

const Title = styled.div`
margin: 32px 0;
`;

class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <HeaderContainer>
                <Headertitle>Alex Trust</Headertitle>
                <HeaderEmail>alextrust31@gmail.com</HeaderEmail>
            </HeaderContainer>
            <Content>
                <Title>Contacts</Title>
            </Content>
            </div>
        )
    }
}

export default ContactPage;