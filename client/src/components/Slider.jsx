import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { sliderItems } from '../data'
import { laptop, tablet, mobile } from '../responsive'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    // overflow-wrap: break-word;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:50%;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index:2
`

const Wrapper = styled.div`
    // height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    ${laptop({ display: "none" })}
`

const Image = styled.img`
    height: 80vh;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${tablet({ padding: "1em" })};
`

const Title = styled.h1`
    font-size: 70px;
    ${tablet({ fontSize: "3em" })};
    ${mobile({ fontSize: "2em" })};
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        // console.log("click")
        if (direction === "left") {
            // console.log("left")
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
            // console.log(slideIndex)
        } else {
            // console.log("right")
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 2);
            // console.log(slideIndex)
        }
    };

    return (
        <div>
            <Container>
                <Arrow direction="left" onClick={() => handleClick('left')}>
                    <ArrowLeftOutlined />
                </Arrow>
                <Wrapper slideIndex={slideIndex} >
                    {sliderItems.map((item) =>
                        <Slide bg={item.bg} key={item.id}>
                            <ImageContainer>
                                <Image src={item.img} />
                            </ImageContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Link to={`/products?category=${item.category}`}>
                                    <Button>SHOW NOW</Button>
                                </Link>
                            </InfoContainer>
                        </Slide>
                    )}
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick('right')} >
                    <ArrowRightOutlined />
                </Arrow>
            </Container>
        </div >
    )
}

export default Slider;