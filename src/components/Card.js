import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  min-width: 250px;
  width: 100%;
  max-width: 100vw;
  padding: 0px 32px;
  @media (min-width: 769px) {
    flex-direction: row;

    min-width: 768px;
    max-width: 1440px;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.typography.terceryBold};
  @media (min-width: 769px) {
    font-size: 32px;
    line-height: 44px;
    text-align: left;
  }
`;

const Title = styled.span`
  font-size: 15px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.typography.primaryBold};
  width: 100%;
  text-align: center;
  @media (min-width: 769px) {
    font-size: 20px;
    line-height: 38px;
    width: fit-content;
    text-align: left;
  }
`;

const Subtitle = styled.span`
  font-size: 15px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.typography.secondaryBold};
  width: 100%;
  text-align: center;
  @media (min-width: 769px) {
    font-size: 20px;
    line-height: 38px;
    width: fit-content;
    text-align: left;
  }
`;

const ImgContainer = styled.section`
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 330px;
  background-size: cover;
  background-repeat: no-repeat, repeat;
  background-image: url("/static/images/pattern-bg.svg");
  @media (min-width: 769px) {
    width: 630px;
    height: 630px;
  }
`;
const Img = styled.img`
  width: 254px;
  height: 254px;
  @media (min-width: 769px) {
    width: 540px;
    height: 540px;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px;
  flex-wrap: wrap;
  gap: 0px 8px;
  background-position: 128px 0px;
  background-repeat: no-repeat, no-repeat;
  background-image: url("/static/images/pattern-quotes.svg");
  background-size: 120px 100px;
  @media (min-width: 769px) {
    padding: 32px;
    width: 100%;
    max-width: 635px;
  }
`;

const Card = (props) => {
  const { srcImg, description, name, job } = props;
  return (
    <Container>
      <Content>
        <Paragraph>{description}</Paragraph>
        <Title>{name}</Title>
        <Subtitle>{job}</Subtitle>
      </Content>
      <ImgContainer>
        <Img src={srcImg} />
      </ImgContainer>
    </Container>
  );
};

export default Card;
