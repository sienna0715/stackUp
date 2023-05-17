import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

function KeepModal({ isModal, setIsModal, onAdd }: any) {
  const [titleText, setTilteText] = useState("");
  const [urlText, setUrlText] = useState("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTilteText(e.target.value);
  };

  const handleChangeURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlText(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd({
      id: uuidv4(),
      title: titleText,
      url: urlText,
    });
    setIsModal(false);
  };

  return (
    <ModalWrap onSubmit={handleSubmit}>
      <Close onClick={() => setIsModal(!isModal)}>
        <AiOutlineClose />
      </Close>
      <ModalContainer>
        <Label>Title</Label>
        <Input type="text" value={titleText} onChange={handleChangeTitle} />
        <Label>URL</Label>
        <Input type="text" value={urlText} onChange={handleChangeURL} />
        <ButtonBox>
          <Button>등록</Button>
        </ButtonBox>
      </ModalContainer>
    </ModalWrap>
  );
}

export default KeepModal;

const ModalWrap = styled.form`
  width: 500px;
  height: 310px;
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
  font-size: 1rem;
  &:nth-child(2) {
    margin-bottom: 2rem;
  }
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
  margin-top: 1.5rem;
`;
