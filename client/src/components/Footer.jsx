import React from 'react'
import styled from 'styled-components'
import { Facebook, Pinterest, Twitter, Instagram, Phone, Room, MailOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { laptop } from '../responsive'

const Container = styled.div`
    display: flex;
    ${laptop({ flexDirection: "column" })}
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px
`
const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px
`

const SocialContainer = styled.div`
    display: flex;
    // align-items: center;
    // justify-content: space-between;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 50%;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`


const Center = styled.div`
    flex:1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.a`
    width: 50%;
    color: black;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex:1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    height: 60px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>TODAY</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum similique officiis eaque explicabo aspernatur nisi quia ea. Rerum fuga quibusdam ab, odit deserunt alias similique laboriosam. Eos, obcaecati tempore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam perferendis alias neque magni enim minima dolor repellendus assumenda, quidem incidunt corporis, praesentium voluptatum!
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999" >
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F" >
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="55ACEE" >
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="E60023" >
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem href='/'>Home</ListItem>
                    <ListItem href='/cart'>My Cart</ListItem>
                    <ListItem href='/products?category=men'>Man Fashion</ListItem>
                    <ListItem href='/products?category=women'>Woman Fashion</ListItem>
                    <ListItem href='/dashboard'>My Account</ListItem>
                    <ListItem href='/orders'>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> Park Rd, Cheltenham VIC 3192
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +1 234 567 890
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> contact@today.com
                </ContactItem>
                <Payment src="https://images.contentstack.io/v3/assets/bltee50a64aa85c8d90/blt1b4b0326d03391c3/615a92367e4c056146cb65fa/payment_methods.jpg" />
            </Right>
        </Container>
    )
}

export default Footer