import React from "react";

import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import { theme } from "./theme";
import { information } from "./data.json";
import "./styles.css";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-position: bottom left;
  background-repeat: no-repeat, no-repeat;
  background-image: url("/static/images/pattern-curve.svg");

  @media (min-width: 769px) {
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Carousel>
          {information.map((elem, index) => (
            <Card key={`${elem.id}-${index}`} {...elem} />
          ))}
        </Carousel>
      </Container>
    </ThemeProvider>
  );
}
