import React, { useEffect, useState } from "react";
import styled from "styled-components";
import KeepModal from "../components/keep/KeepModal";
import AddButton from "../components/commons/AddButton";
import KeepCard from "../components/keep/KeepCard";

type KeepData = {
  id?: string;
  title?: string;
  url?: string;
};

function Keep() {
  const [keeps, setKeeps] = useState(saveKeeps);
  const [isModal, setIsModal] = useState(false);

  const handleAdd = (keep: KeepData) => {
    setKeeps([...keeps, keep]);
  };

  const handleDelete = (deleted: KeepData) => {
    setKeeps(keeps.filter((keep: KeepData) => keep.id !== deleted.id));
  };

  useEffect(() => {
    localStorage.setItem("keep", JSON.stringify(keeps));
  }, [keeps]);

  return (
    <KeepWrap>
      <KeepContainer>
        <ButtonBox onClick={() => setIsModal(true)}>
          <AddButton />
        </ButtonBox>
        {isModal ? (
          <KeepModal
            isModal={isModal}
            setIsModal={setIsModal}
            onAdd={handleAdd}
          />
        ) : (
          false
        )}
        <CardBox>
          {keeps.map((data: object, index: number) => (
            <KeepCard key={index} data={data} onDelete={handleDelete} />
          ))}
        </CardBox>
      </KeepContainer>
    </KeepWrap>
  );
}

export default Keep;

function saveKeeps() {
  const keeps = localStorage.getItem("keep");
  return keeps ? JSON.parse(keeps) : [];
}

const KeepWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
`;

const KeepContainer = styled.div`
  width: 100%;
`;

const ButtonBox = styled.div``;

const CardBox = styled.div`
  width: 100%;
  padding: 0 3rem;
  display: flex;
  flex-wrap: wrap;
`;
