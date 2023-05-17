import React from "react";
import styled from "styled-components";
import Calendar from "../components/challenge/Calendar";
import ChallengeCard from "../components/challenge/ChallengeCard";

function Challenge() {
  return (
    <ChallengeWrap>
      <ChallengeContainer>
        <ChallengeTop>
          <Calendar />
        </ChallengeTop>
        <ChallengeBottom>
          <ChallengeCard />
        </ChallengeBottom>
      </ChallengeContainer>
    </ChallengeWrap>
  );
}

export default Challenge;

const ChallengeWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 5rem;
`;

const ChallengeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ChallengeTop = styled.div`
  width: 100%;
`;

const ChallengeBottom = styled.div`
  width: 100%;
`;
