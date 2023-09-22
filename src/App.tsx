import { Link, Outlet } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import hamburger from "./assets/icon-hamburger.svg";
import arrow from "./assets/icon-chevron.svg";
import backgroundColor from "./assets/background-stars.svg";
import "./styles.css";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
    getcolor(index);
    setOpen(false);
  };

  const togglePrimary = () => {
    setOpen(!open);
  };
  const url = "https://planets-api.vercel.app/api/v1/planets";

  const [hoverColor, setHoverColor] = useState<string>("");
  async function getcolor(num: number) {
    const res = await fetch(url);
    const data = await res.json();
    setHoverColor(data[num].color);
  }

  useEffect(() => {
    getcolor(0);
  }, []);
  return (
    <>
      <GlobalStyles scroll={hoverColor} />
      <HeaderStyle imageurl={backgroundColor}>
        <H1>the planets</H1>
        <Burger src={hamburger} alt="hamburger" onClick={togglePrimary} />
        <Nav primary={open.toString()}>
          <Ul>
            <Li color={hoverColor}>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#DEF4FC"></Circle>
                <Link style={{ textDecoration: "none" }} to="/mercury">
                  <Name
                    active={activeButton === 0}
                    onClick={() => handleButtonClick(0)}
                  >
                    mercury
                  </Name>
                </Link>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li color={hoverColor}>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#F7CC7F"></Circle>
                <Link style={{ textDecoration: "none" }} to="/venus">
                  <Name
                    active={activeButton === 1}
                    onClick={() => handleButtonClick(1)}
                  >
                    venus
                  </Name>
                </Link>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li color={hoverColor}>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#545BFE"></Circle>
                <Link style={{ textDecoration: "none" }} to="/earth">
                  <Name
                    active={activeButton === 2}
                    onClick={() => handleButtonClick(2)}
                  >
                    earth
                  </Name>
                </Link>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li color={hoverColor}>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#FF6A45"></Circle>
                <Link style={{ textDecoration: "none" }} to="/mars">
                  <Name
                    active={activeButton === 3}
                    onClick={() => handleButtonClick(3)}
                  >
                    mars
                  </Name>
                </Link>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li color={hoverColor}>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#ECAD7A"></Circle>
                <Link style={{ textDecoration: "none" }} to="/jupiter">
                  <Name
                    active={activeButton === 4}
                    onClick={() => handleButtonClick(4)}
                  >
                    jupiter
                  </Name>
                </Link>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li color={hoverColor}>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#FCCB6B"></Circle>
                <Link style={{ textDecoration: "none" }} to="/saturn">
                  <Name
                    active={activeButton === 5}
                    onClick={() => handleButtonClick(5)}
                  >
                    saturn
                  </Name>
                </Link>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li color={hoverColor}>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#65F0D5"></Circle>
                <Link style={{ textDecoration: "none" }} to="uranus">
                  <Name
                    active={activeButton === 6}
                    onClick={() => handleButtonClick(6)}
                  >
                    uranus
                  </Name>
                </Link>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
            <Li color={hoverColor}>
              <Hoverline></Hoverline>
              <LiDiv>
                <Circle color="#497EFA"></Circle>
                <Link style={{ textDecoration: "none" }} to="/neptune">
                  <Name
                    active={activeButton === 7}
                    onClick={() => handleButtonClick(7)}
                  >
                    neptune
                  </Name>
                </Link>
              </LiDiv>
              <Arrow src={arrow} alt="arrow" />
            </Li>
          </Ul>
        </Nav>
      </HeaderStyle>
      <Outlet />
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
const GlobalStyles = createGlobalStyle<{ scroll: string }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #070724;
    animation: ${moveBackground} 10s Linear infinite;
  }
  @media only screen and (min-width: 1200px) {
  &::-webkit-scrollbar {
    width: 5px; /* Scrollbar width */
  }

  &::-webkit-scrollbar-track {
    background-color: #070724 /* Track background color */
  }

  &::-webkit-scrollbar-thumb {
    background-color:  ${(props) => props.scroll};
    border-radius: 5px; /* Thumb border radius */
  }
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
    flex-direction: column;
    align-items: center;
    padding: 32px 51px;
  }
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    padding: 22px 48px;
    justify-content: space-between;
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
`;

const Burger = styled.img`
  width: 24px;
  height: 17px;
  margin-top: 10px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
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
    position: unset;
    border-top: unset;
    background-color: unset;
    margin: 39px -20px 0px -20px;
    padding: unset;
    animation: unset;
    display: inline;
  }
  @media only screen and (min-width: 1200px) {
    margin: unset;
    display: inline;
    width: unset;
  }
`;
const Ul = styled.ul`
  list-style: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1200px) {
    gap: 33px;
  }
`;

const Hoverline = styled.div`
  display: none;
  @media only screen and (min-width: 1200px) {
    display: inline;
    width: 100%;
    height: 4px;
  }
`;

const Li = styled.li<{ color: string }>`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px soLid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  padding-bottom: 20px;
  @media only screen and (min-width: 768px) {
    border-bottom: unset;
    padding-top: unset;
    padding-bottom: unset;
  }
  @media only screen and (min-width: 1200px) {
    position: relative;
    cursor: pointer;
    &:hover ${Hoverline} {
      width: 100%;
      height: 4px;
      position: absolute;
      margin-top: -27.5px;
      background-color: ${(props) => props.color};
    }
  }
`;

const LiDiv = styled.div`
  display: flex;
  gap: 25px;
`;
const Arrow = styled.img`
  width: 4px;
  height: 8px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const Circle = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Name = styled.p<{ active: boolean }>`
  color: #fff;
  text-align: center;
  font-family: "League Spartan", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 166.667% */
  letter-spacing: 1.364px;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
    font-size: 11px;
    letter-spacing: 1px;
    opacity: ${(props) => (props.active ? "1" : "0.75")};
  }
`;
export default App;
