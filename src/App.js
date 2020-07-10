import React from "react";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { ThemeProvider } from "emotion-theming";
import Card from "./components/Card";
import { theme } from "./theme";
import "swiper/swiper.scss";
import "./styles.css";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export default function App() {
  const props = {
    srcImg: "",
    description: "",
    name: "",
    job: ""
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card {...props} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </ThemeProvider>
  );
}
