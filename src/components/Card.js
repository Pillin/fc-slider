import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p``;

const Title = styled.span``;

const Img = styled.img``;

const Card = (props) => {
  const { srcImg, description, name, job } = props;
  return (
    <Container>
      <Img src={srcImg} />
      <Paragraph>{description}</Paragraph>
      <Title>{name}</Title>
      <Title>{job}</Title>
    </Container>
  );
};

export default Card;
