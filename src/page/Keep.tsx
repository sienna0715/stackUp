import React, { useState } from "react";
import styled from "styled-components";
import KeepModal from "../commons/KeepModal";
import * as C from "../commons/Styled";

function Keep({ currentTab }: any) {
  const [isModal, setIsModal] = useState(false);

  return (
    <KeepWrap>
      <>
        <C.AddButton onClick={() => setIsModal(true)}>+</C.AddButton>
        {isModal ? <KeepModal isModal={isModal} setIsModal={setIsModal} /> : false}
      </>
    </KeepWrap>
  );
}

export default Keep;

const KeepWrap = styled.div`
  width: 80vw;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
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
