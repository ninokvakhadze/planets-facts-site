import styled from "styled-components";
import { useEffect, useState } from "react";
// import image from "../assets/planet-mercury.svg";
import image3 from "../assets/icon-source.svg";

function Planet(props: any) {
  const [activeType, setActiveType] = useState<number>(1);

  const handleTypeClick = (index: number) => {
    setActiveType(index);
    getData(props.planet, index);
  };
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [rotation, setRotation] = useState<string>("");
  const [revolution, setRevolution] = useState<string>("");
  const [radius, setRadius] = useState<string>("");
  const [temp, setTemp] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [imagesurface, setImagesurface] = useState<string>("");
  const [displaySurface, setdisplaySurface] = useState<boolean>(false);
  const [colors, setColor] = useState<string>("");

  const url = "https://planets-api.vercel.app/api/v1/planets";

  async function getData(number: number, type: number) {
    const res = await fetch(url);
    const data = await res.json();
    setName(data[number].name);
    setRotation(data[number].rotation);
    setRevolution(data[number].revolution);
    setRadius(data[number].radius);
    setTemp(data[number].temperature);
    setdisplaySurface(false);
    setColor(data[number].color);

    if (type == 1) {
      setText(data[number].overview.content);
      setLink(data[number].overview.source);
      setImage(data[number].images.planet);
      setdisplaySurface(false);
    }
    if (type == 2) {
      setText(data[number].structure.content);
      setLink(data[number].structure.source);
      setImage(data[number].images.internal);
      setdisplaySurface(false);
    }
    if (type == 3) {
      setText(data[number].geology.content);
      setLink(data[number].geology.source);
      setImage(data[number].images.planet);
      setImagesurface(data[number].images.geology);
      setdisplaySurface(true);
    }
  }

  useEffect(() => {
    getData(props.planet, 1);
    setActiveType(1)
  }, [props.planet]);

  return (
    <Section>
      <ImageType>
        <H2
          color={colors}
          active2={activeType === 1}
          onClick={() => handleTypeClick(1)}
        >
          <Number>01 </Number> OVERVIEW
        </H2>
        <H2
          color={colors}
          active2={activeType === 2}
          onClick={() => handleTypeClick(2)}
        >
          <Number>02 </Number>
          <Textspan>Internal</Textspan> Structure
        </H2>
        <H2
          color={colors}
          active2={activeType === 3}
          onClick={() => handleTypeClick(3)}
        >
          <Number>03 </Number>
          Surface <Textspan> Geology</Textspan>
        </H2>
      </ImageType>
      <ImageDiv>
        <Planetimg src={image} alt="plaent image" />
        <Surfaceimg
          style={displaySurface ? { display: "inline" } : { display: "none" }}
          src={imagesurface}
          alt="surface"
        />
      </ImageDiv>
      <Information>
        <H3>{name}</H3>
        <Text>{text}</Text>
        <Source>
          <Wiki>
            source: <LinkWiki href={link}>Wikipedia</LinkWiki>
          </Wiki>
          <Wikisrc src={image3} alt="" />
        </Source>
      </Information>
      <Facts>
        <Fact>
          <Name2>ROTATION TIME</Name2>
          <Data>{rotation}</Data>
        </Fact>
        <Fact>
          <Name2>REVOLUTION TIME</Name2>
          <Data>{revolution}</Data>
        </Fact>
        <Fact>
          <Name2>radius</Name2>
          <Data>{radius}</Data>
        </Fact>
        <Fact>
          <Name2>AVERAGE TEMP.</Name2>
          <Data>{temp}</Data>
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
  @media only screen and (min-width: 1200px) {
    margin-top: 0px;
    grid-template-areas:
      "planet-image info"
      "planet-image types"
      "facts facts";
    column-gap: 299px;
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
  @media only screen and (min-width: 1200px) {
    margin-top: 39px;
    margin-left: -14px;
  }
`;

const H2 = styled.h2<{ active2: boolean; color: string }>`
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
  border-bottom: ${(props) =>
    props.active2 ? `4px solid ${props.color}` : ""};
  @media only screen and (min-width: 768px) {
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: ${(props) => (props.active2 ? `${props.color}` : "")};
    width: 281px;
    height: 40px;
    line-height: 40px;
    margin-left: 40px;
    text-align: left;
    padding: 0px 20px;
    cursor: pointer;
    &:hover {
      background-color: rgba(216, 216, 216, 0.2);
    }
  }
  @media only screen and (min-width: 1200px) {
    font-size: 12px;
    letter-spacing: 2.571px;
    width: 350px;
    height: 48px;
    line-height: 50px;
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
  @media only screen and (min-width: 1200px) {
    margin-right: 18px;
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
  @media only screen and (min-width: 1200px) {
    margin: unset;
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
  @media only screen and (min-width: 1200px) {
    width: 290px;
    height: 290px;
    margin-top: 242px;
    margin-left: 150px;
    margin-right: unset;
  }
`;
const Surfaceimg = styled.img`
  width: 100px;
  position: absolute;
  top: 170px;
  @media only screen and (min-width: 768px) {
    top: 270px;
    left: 310px;
  }
  @media only screen and (min-width: 1200px) {
    top: 480px;
    left: 225px;
    width: 163px;
    height: 199px;
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
  @media only screen and (min-width: 1200px) {
    margin-top: 154px;
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
  @media only screen and (min-width: 1200px) {
    font-size: 80px;
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
  @media only screen and (min-width: 1200px) {
    width: 350px;
    font-size: 14px;
    line-height: 25px;
  }
`;
const Source = styled.div`
  display: flex;
  gap: 3px;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    justify-content: left;
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const Wiki = styled.p`
  color: #fff;
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 208.333% */
  @media only screen and (min-width: 1200px) {
    font-size: 14px;
  }
`;
const LinkWiki = styled.a`
  color: #808080;
  font-family: Spartan;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  text-decoration-line: underline;
  @media only screen and (min-width: 1200px) {
    font-size: 14px;
  }
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
  @media only screen and (min-width: 1200px) {
    gap: 30px;
    margin-top: 87px;
    margin-bottom: 49px;
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
  @media only screen and (min-width: 1200px) {
    padding: 20px 23px;
    width: 255px;
    height: 128px;
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
  @media only screen and (min-width: 1200px) {
    font-size: 11px;
    line-height: 25px; /* 227.273% */
    letter-spacing: 1px;
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
  @media only screen and (min-width: 1200px) {
    font-size: 40px;
    letter-spacing: -1.5px;
  }
`;
