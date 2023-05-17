import React, { useState } from "react";
import styled from "styled-components";
import KeepModal from "../components/keep/KeepModal";
import AddButton from "../components/commons/AddButton";

function Keep() {
  const [isModal, setIsModal] = useState(false);

  return (
    <KeepWrap>
      <>
      <ButtonBox onClick={() => setIsModal(true)}>
          <AddButton />
        </ButtonBox>
        {isModal ? <KeepModal isModal={isModal} setIsModal={setIsModal} /> : false}
      </>
    </KeepWrap>
  );
}

export default Keep;

const KeepWrap = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Card = styled.div`
  width: 70vw;
  height: 8rem;
  background-color: #fff;
  border-radius: 0.5rem;
  margin-top: 1rem;
  box-shadow: 0px 0px 10px 1px rgba(209, 209, 209, 0.6);
`;
const CardWord = styled.span`
  font-size: 1.5rem;
`;
const CardMean = styled.span``;
const CardDescription = styled.span``;
const ButtonBox = styled.div``;