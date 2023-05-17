import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

type Type = {
  isModal: boolean;
  setIsModal: (state: boolean) => void;
  onAdd: any;
};

function WordModal({ isModal, setIsModal, onAdd }: Type) {
  const [wordText, setWordText] = useState("");
  const [meanText, setMeanText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  const handleChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWordText(e.target.value);
  };

  const handleChangeMean = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeanText(e.target.value);
  };

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescriptionText(e.target.value);
  };

  const handleSunmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd({
      id: uuidv4(),
      word: wordText,
      mean: meanText,
      description: descriptionText,
      bookmark: false,
    });
    setIsModal(false)
  };

  return (
    <ModalWrap onSubmit={handleSunmit}>
      <Close onClick={() => setIsModal(!isModal)}>
        <AiOutlineClose />
      </Close>
      <ModalContainer>
        <Label>Word</Label>
        <Input type="text" value={wordText} onChange={handleChangeWord} />
        <Label>Meaning</Label>
        <Input type="text" value={meanText} onChange={handleChangeMean} />
        <Label>Description</Label>
        <Textarea value={descriptionText} onChange={handleChangeDescription} />
        <ButtonBox>
          <Button>등록</Button>
        </ButtonBox>
      </ModalContainer>
    </ModalWrap>
  );
}

export default WordModal;

const ModalWrap = styled.form`
  width: 500px;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(209, 209, 209, 0.6);
`;

const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
`;

const Close = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.3rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 1rem;
`;
const Input = styled.input`
  border-radius: 5px;
  padding: 0.5rem 1rem;
  border: 1px solid #aaa;
  margin-bottom: 2rem;
  font-size: 1rem;
`;
const Textarea = styled.textarea`
  height: 90px;
  padding: 1rem;
  border-radius: 5px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  background: #242323;
  color: #fff;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: 1rem;
`;
