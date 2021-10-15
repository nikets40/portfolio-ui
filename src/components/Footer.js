import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Socials>
        <a href="https://www.fb.com">
          <img alt="facebook-button" src="/images/fb.svg" />
        </a>
        <a href="https://www.ig.com">
          <img alt="insta-button" src="/images/insta.svg" />
        </a>
        <a href="https://www.linkedIn.com">
          <img alt="linkedin-button" src="/images/Linkedin.svg" />
        </a>
        <a href="https://www.twitter.com">
          <img alt="twitter-button" src="/images/twitter.svg" />
        </a>
      </Socials>

      Copyright ©2021 All rights reserved
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  height: 182px;
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #21243D;
`;

const Socials = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom:26px;
`;
