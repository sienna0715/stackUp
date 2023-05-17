import React from "react";
import styled from "styled-components";

function Challenge() {
  return <ChallengeWrap></ChallengeWrap>;
}

export default Challenge;

const ChallengeWrap = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
