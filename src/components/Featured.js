import React from "react";
import styled from "styled-components";

function Featured() {
  const description =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.";
  return (
    <Container>
      <SectionTitle>Featured Work</SectionTitle>
      <Post>
        <Thumbnail>
          <img alt="dashboard" src="/images/featured-work-1.png" />
        </Thumbnail>

        <PostData>
          <PostTitle>Designing Dashboards</PostTitle>
          <PostSubtitle>
            <PostYear>2020</PostYear>
            <PostCategory>Dashboard</PostCategory>
          </PostSubtitle>

          <PostDescription>{description}</PostDescription>
        </PostData>
      </Post>

      <Divider />

      <Post>
        <Thumbnail>
          <img alt="dashboard" src="/images/featured-work-2.png" />
        </Thumbnail>

        <PostData>
          <PostTitle>Vibrant Portraits of 2020</PostTitle>
          <PostSubtitle>
            <PostYear>2019</PostYear>
            <PostCategory>Illustration</PostCategory>
          </PostSubtitle>

          <PostDescription>{description}</PostDescription>
        </PostData>
      </Post>

<Divider/>
      <Post>
        <Thumbnail>
          <img alt="dashboard" src="/images/featured-work-3.png" />
        </Thumbnail>

        <PostData>
          <PostTitle>36 Days of Malayalam type</PostTitle>
          <PostSubtitle>
            <PostYear>2018</PostYear>
            <PostCategory>Typography</PostCategory>
          </PostSubtitle>

          <PostDescription>{description + description}</PostDescription>
        </PostData>
      </Post>
      <Divider/>
    </Container>
  );
}

export default Featured;

const Container = styled.div`
  margin: 0 4%;
`;

const Divider = styled.div`
  width: 100%;
  margin: 15px 0;
  border: 1px solid #E0E0E0;
`;

const SectionTitle = styled.div`
font-weight: 400;
font-size: 22px;
margin: 10px 0 22px

`;

const Post = styled.div`
  display: flex;

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;

const Thumbnail = styled.div`
  

  img {
    max-width: 246px;
    max-height: 180px;
    @media (max-width: 630px) {
      max-width: 100%;
      max-height: 100%;
  }
   
  }
`;

const PostData = styled.div`
  margin-left: 20px;
  @media (max-width: 630px) {
    margin-left: 0px;
    margin-top: 10px;
  }
`;

const PostTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
`;
const PostSubtitle = styled.div`
  display: flex;
  margin-top: 16px;
`;
const PostYear = styled.div`
  background-color: #142850;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  color: white;
  height: 25px;
  line-height: 25px;
  font-weight: 900;
  border-radius: 20px;
  font-size: 18px;
`;
const PostCategory = styled.div`
  margin-left: 26px;
  color: #8695a4;
  font-size: 20px; ;
`;
const PostDescription = styled.div`
  margin-top: 18px;
`;
