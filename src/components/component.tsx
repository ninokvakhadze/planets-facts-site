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
`;
const ImageType = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  padding-bottom: 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
`;
const Textspan = styled.span`
  display: none;
`;
const Number = styled.span`
  display: none;
`;

const ImageDiv = styled.div`
  z-index: -1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Planetimg = styled.img`
  width: 111px;
  height: 111px;
  align-self: center;
  margin-top: 95px;
`;
const Surfaceimg = styled.img`
  width: 100px;
  position: absolute;
  top: 170px;
  display: none;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px 24px;
  margin-top: 98px;
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
`;
const Text = styled.p`
  color: #fff;
  text-align: center;
  font-family: "League Spartan", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 200% */
`;
const Source = styled.div`
  display: flex;
  gap: 3px;
  justify-content: center;
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
`;
const Fact = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.2);
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
`;
