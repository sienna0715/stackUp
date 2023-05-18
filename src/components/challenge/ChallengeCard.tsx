import React from "react";
import styled from "styled-components";

function ChallengeCard() {
  const getData: any = localStorage.getItem("word");
  const words = JSON.parse(getData);
  const bookmark = words.filter((word: any) => word.bookmark).length;

  return (
    <CardContainer>
      <Card>
        <Title>등록한 단어 수</Title>
        <Img src={require("../../assets/notes.png")} alt="" />
        <Text>{words.length}개</Text>
      </Card>
      <Card>
        <Title>외운 단어 수</Title>
        <Img src={require("../../assets/brainstorm.png")} alt="" />
        <Text>X개</Text>
      </Card>
      <Card>
        <Title>북마크</Title>
        <Img src={require("../../assets/star.png")} alt="" />
        <Text>{bookmark}개</Text>
      </Card>
    </CardContainer>
  );
}

export default ChallengeCard;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Card = styled.div`
  width: 33%;
  min-width: 300px;
  height: 400px;
  margin-right: 1.5rem;
  padding: 3rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 1px rgba(209, 209, 209, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-last-child(1) {
    margin-right: 0;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Text = styled.div`
  font-size: 1.5rem;
`;

const Img = styled.img`
  width: 200px;
  margin-bottom: 2rem;
`;
