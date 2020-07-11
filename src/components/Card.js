import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.typography.terceryBold};
`;

const Title = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.typography.primaryBold};
`;

const Subtitle = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.typography.secondaryBold};
`;
const ImgContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 320px;
  background-size: cover;
  background-repeat: no-repeat, repeat;
  background-image: url("/static/images/pattern-bg.svg");
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
`;

const Card = (props) => {
  const { srcImg, description, name, job } = props;
  return (
    <Container>
      <ImgContainer>
        {" "}
        <Img src={srcImg} />
      </ImgContainer>

      <Paragraph>{description}</Paragraph>
      <Title>{name}</Title>
      <Subtitle>{job}</Subtitle>
    </Container>
  );
};

export default Card;
