import React from "react";
import styled from "styled-components";

function Hero() {
  const title = "Hi, I am John, Creative Technologist";
  const subTitle =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.";
  return (
    <Container>
      <Data>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <CtaButton> Download Resume </CtaButton>
      </Data>
      <Spacer />
      <ProfilePicture>
        <img alt="profile" src="/images/profile-picture.png" />
      </ProfilePicture>
    </Container>
  );
}

export default Hero;

const Container = styled.main`
  margin: 0 4%; /*add breakpoint later instead of 10% */
  display: flex;
  margin-top: 120px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 60px;
  }
`;

const Spacer = styled.div`
  flex: 1;
  height: 40px;
  @media (max-width: 768px) {
    flex: none;
  }
`;

const Data = styled.div`
  flex: 7;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 44px;
  line-height: 60px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SubTitle = styled.div`
  margin-top: 40px;
  font-weight: 400;
  font-size: 16px;
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
  }
`;

const CtaButton = styled.button`
  margin: auto;
  margin-top: 38px;
  border-radius: 2px;
  background-color: #ff6464;
  border: none;
  padding: 17px 21px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const ProfilePicture = styled.div`
  height: 250px;
  width: 250px;
  flex: 3;
  position: relative;
  margin: 0 auto;

  &:before {
    content: "";
    position: absolute;
    height: 250px;
    width: 250px;
    background-color: #edf7fa;
    border-radius: 50%;
    left: -5px;
    right: 5px;
    bottom: -13px;
    top: 13px;
    z-index: -1;
  }

  img {
    aspect-ratio: initial;
    width: 250px;
    height: 250px;
  }
`;
