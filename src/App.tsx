// import {Link, Outlet} from 'react-router-dom';
import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import hamburger from "./assets/icon-hamburger.svg";
import arrow from "./assets/icon-chevron.svg";
import backgroundColor from "./assets/background-stars.svg";
import "./styles.css";
import Planet from "./components/component";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const togglePrimary = () => {
    setOpen(!open);
  };

  return (
    <>
      <GlobalStyles />
      <HeaderStyle imageurl={backgroundColor}>
        <H1>the planets</H1>
        <Burger src={hamburger} alt="hamburger" onClick={togglePrimary} />
        <Nav primary={open.toString()}>
          <Ul>
            <Li>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#DEF4FC"></Circle>
                <Name>mercury</Name>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#F7CC7F"></Circle>
                <Name>venus</Name>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#545BFE"></Circle>
                <Name>earth</Name>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#FF6A45"></Circle>
                <Name>mars</Name>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#ECAD7A"></Circle>
                <Name>jupiter</Name>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#FCCB6B"></Circle>
                <Name>saturn</Name>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#65F0D5"></Circle>
                <Name>uranus</Name>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#497EFA"></Circle>
                <Name>neptune</Name>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
          </Ul>
        </Nav>
      </HeaderStyle>
      <Planet/>
    </>
  );
}

const moveBackground = keyframes`
    0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
`;
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #070724;
    animation: ${moveBackground} 10s Linear infinite;
  }
`;
const HeaderStyle = styled.header<{ imageurl: string }>`
  padding: 16px 24px;
  background-color: #070724;
  display: flex;
  justify-content: space-between;
  background-image: url(${(props) => props.imageurl});
  animation: ${moveBackground} 10s Linear infinite;
  position: fixed;
  width: 100%;
  border-bottom: 1px soLid rgba(255, 255, 255, 0.2);
  top: 0px;
  @media only screen and (min-width: 768px) {
  }
`;

const H1 = styled.h1`
  color: #fff;
  font-family: "Antonio", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.05px;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
  }
`;

const Burger = styled.img`
  width: 24px;
  height: 17px;
  margin-top: 10px;
`;

const fallDown = keyframes`
   0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;
const Nav = styled.nav<{ primary: string }>`
  position: absolute;
  top: 88px;
  border-top: 1px soLid rgba(255, 255, 255, 0.2);
  background-color: #070724;
  width: 100%;
  margin: -20px;
  padding: 34px 24px;
  animation: ${fallDown} 1s ease-in-out forwards;
  display: ${(props) => (props.primary === "true" ? "inLine" : "none")};
  @media only screen and (min-width: 768px) {
  }
`;
const Ul = styled.ul`
  list-style: none;
  @media only screen and (min-width: 768px) {
  }
`;
const Li = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px soLid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  padding-bottom: 20px;
  @media only screen and (min-width: 768px) {
  }
`;

const Hoverline = styled.div`
  display: none;
`;
const LiDiv = styled.div`
  display: flex;
  gap: 25px;
`;
const Arrow = styled.img`
  width: 4px;
  height: 8px;
`;
const Circle = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Name = styled.p`
  color: #fff;
  text-align: center;
  font-family: "League Spartan", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 166.667% */
  letter-spacing: 1.364px;
  text-transform: uppercase;
`;
export default App;
