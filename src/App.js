import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import styled from "styled-components";

import logo from "./logo.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
      }}
      onClick={onClick}
    />
  );
}

class App extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      vertical: true,
      verticalSwiping: true,
    };
    return (
      <>
        <StContainer>
          <Slider {...settings}>
            <StImg src={logo}></StImg>
            <StImg src={logo}></StImg>
            <StImg src={logo}></StImg>
          </Slider>
        </StContainer>
      </>
    );
  }
}

const StContainer = styled.div`
  border: 1px solid black;
  margin: auto;
  width: 90%;
`;

const StImg = styled.img`
  margin: 10px;
  width: 250px;
  height: 400px;
`;

export default App;
