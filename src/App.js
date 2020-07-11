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

  .swiper-slide {
    min-width: 320px;
  }
`;

export default function App() {
  const props = {
    srcImg: "/static/images/image-tanya.jpg",
    description:
      "I've been interested in coding for a while but neveer taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future",
    name: "Tanya Sinclair",
    job: "UX Engineer"
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
