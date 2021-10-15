import React from "react";
import styled from "styled-components";

function RecentPost() {
  const postTitle = "Making a design system from scratch";
  const postDate = "12 Feb 2020";
  const postTags = "Design, Pattern";
  const postDescription =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.";

  return (
    <Container>
      <p>Recent Posts</p>
      <RecentPosts>
        <Post>
          <Title>{postTitle}</Title>

          <SubTitle>{postDate + " | " + postTags}</SubTitle>

          <Description>{postDescription}</Description>
        </Post>

        <Divider />

        <Post>
          <Title>{postTitle}</Title>

          <SubTitle>{postDate + " | " + postTags}</SubTitle>

          <Description>{postDescription}</Description>
        </Post>
      </RecentPosts>
    </Container>
  );
}

export default RecentPost;

const Container = styled.div`
  background-color: #edf7fa;
  margin-top: 80px;
  padding: 1px 4% 32px;
  p {
    color: #21243d;
    font-size: 22px;
    line-height: 10px;
  }
`;

const RecentPosts = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Divider = styled.div`
  height: 40px;
  width: 40px;
`;

const Post = styled.div`
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  background-color: white;
  padding: 24px;
`;
const Title = styled.span`
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
`;
const SubTitle = styled.span`
  margin: 18px 0 11px;
  font-weight: 400;
  font-size: 18px;
`;
const Description = styled.span`
  font-weight: 400;
  font-size: 16px;
`;
