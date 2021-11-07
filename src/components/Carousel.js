import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  overflow: hidden;
  max-width: 100%;
`;

const Button = styled.button`
  background: transparent;
  border-style: solid;
  border: 0px;
`;

const ButtonContainer = styled.section`
  background: #ffffff;
  box-shadow: 0px 15px 20px -10px rgba(36, 36, 113, 0.0991313);
  border-radius: 28px;
  width: 80px;
  height: 40px;
  padding: 0px 8px;

  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 320px;
  left: calc(50%);

  @media (min-width: 769px) {
    width: 112px;
    height: 56px;
    padding: 0px 16px;
    bottom: 80px;
    left: calc(50% + 64px);
  }
`;

const Content = styled.section`
  max-width: 1440px;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const Carousel = (props) => {
  const { children } = props;

  const [show, setShow] = useState(0);

  const showElement = useCallback(
    (show) => {
      let value = show % children.length;
      value = value >= 0 ? value : children.length + value;
      return children[value];
    },
    [children]
  );

  return (
    <Container>
      <Content>
        {showElement(show)}
        <ButtonContainer>
          <Button onClick={() => setShow(show - 1)}>
            <img src="/static/images/icon-prev.svg" alt="icon-left" />
          </Button>
          <Button onClick={() => setShow(show + 1)}>
            <img src="/static/images/icon-next.svg" alt="icon-next" />
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Carousel;
