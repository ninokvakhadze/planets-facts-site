import styled from "styled-components";
import image from "../assets/planet-mercury.svg";
import image2 from "../assets/geology-mercury.png";
import image3 from "../assets/icon-source.svg";

function Planet() {
  return (
    <Section>
      <ImageType>
        <H2>
          <Number>01</Number> OVERVIEW
        </H2>
        <H2>
          <Number>02</Number> <Textspan>Internal</Textspan> Structure
        </H2>
        <H2>
          <Number>03</Number> Surface <Textspan>Geology</Textspan>
        </H2>
      </ImageType>
      <ImageDiv>
        <Planetimg src={image} alt="" />
        <Surfaceimg src={image2} alt="" />
      </ImageDiv>
      <Information>
        <H3>mercury</H3>
        <Text>
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets
          in the Solar System, and is a rocky body like Earth.
        </Text>
        <Source>
          <Wiki>
            source: <LinkWiki href="#">Wikipedia</LinkWiki>
          </Wiki>
          <Wikisrc src={image3} alt="" />
        </Source>
      </Information>
      <Facts>
        <Fact>
          <Name2>ROTATION TIME</Name2>
          <Data>58.6 days</Data>
        </Fact>
        <Fact>
          <Name2>ROTATION TIME</Name2>
          <Data>58.6 days</Data>
        </Fact>
        <Fact>
          <Name2>ROTATION TIME</Name2>
          <Data>58.6 days</Data>
        </Fact>
        <Fact>
          <Name2>ROTATION TIME</Name2>
          <Data>58.6 days</Data>
        </Fact>
      </Facts>
    </Section>
  );
}

export default Planet;

const Section = styled.section`
  margin-top: 68px;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    margin-top: 169px;
    padding: 0px 39px;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-areas:
      "planet-image planet-image"
      "info types"
      "facts facts";
  }
`;
const ImageType = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  padding-bottom: 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: unset;
    gap: 16px;
    border-bottom: unset;
    margin-top: 186px;
    padding: unset;
    grid-area: types;
  }
`;

const H2 = styled.h2`
  color: #fff;
  text-align: center;
  font-family: "League Spartan", sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.929px;
  text-transform: uppercase;
  padding-bottom: 16px;
  @media only screen and (min-width: 768px) {
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 281px;
    height: 40px;
    line-height: 40px;
    margin-left: 40px;
    text-align: left;
    padding: 0px 20px;
  }
`;
const Textspan = styled.span`
  display: none;
  @media only screen and (min-width: 768px) {
    display: inline;
  }
`;
const Number = styled.span`
  display: none;
  @media only screen and (min-width: 768px) {
    display: inline;
    opacity: 0.5;
  }
`;

const ImageDiv = styled.div`
  z-index: -1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    margin-right: 160px;
  }
`;

const Planetimg = styled.img`
  width: 111px;
  height: 111px;
  align-self: center;
  margin-top: 95px;
  @media only screen and (min-width: 768px) {
    width: 184px;
    height: 184px;
    margin: auto;
    margin-top: 146px;
    margin-right: -220px;
    grid-area: planet-image;
  }
`;
const Surfaceimg = styled.img`
  width: 100px;
  position: absolute;
  top: 170px;
  display: none;
  @media only screen and (min-width: 768px) {
    top: 270px;
    left: 310px;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px 24px;
  margin-top: 98px;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0px 24px;
    margin: auto;
    margin-top: 130px;
    padding: unset;
    grid-area: info;
    margin-left: 26px;
  }
`;
const H3 = styled.h3`
  color: #fff;
  text-align: center;
  font-family: Antonio;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
    font-size: 48px;
    text-align: left;
  }
`;
const Text = styled.p`
  color: #fff;
  text-align: center;
  font-family: "League Spartan", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 200% */
  @media only screen and (min-width: 768px) {
    width: 339px;
    text-align: left;
  }
`;
const Source = styled.div`
  display: flex;
  gap: 3px;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    justify-content: left;
  }
`;

const Wiki = styled.p`
  color: #fff;
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 208.333% */
`;
const LinkWiki = styled.a`
  color: #808080;
  font-family: Spartan;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  text-decoration-line: underline;
`;

const Wikisrc = styled.img`
  width: 12px;
  height: 12px;
  margin-top: 7px;
`;
const Facts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 24px;
  margin-bottom: 47px;
  margin-top: 28px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 11px;
    margin: auto;
    margin-top: 27px;
    margin-bottom: 36px;
    grid-area: facts;
  }
`;
const Fact = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.2);
  @media only screen and (min-width: 768px) {
    padding: 16px 24px;
    width: 164px;
    height: 88px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const Name2 = styled.p`
  color: #808080;
  font-family: "League Spartan", sans-serif;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 200% */
  letter-spacing: 0.727px;
  text-transform: uppercase;
  margin-top: 4px;
  @media only screen and (min-width: 768px) {
  }
`;
const Data = styled.p`
  color: #fff;
  text-align: right;
  font-family: Antonio;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.75px;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    letter-spacing: -0.9px;
    text-align: left;
  }
`;
