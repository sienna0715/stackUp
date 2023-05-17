import React from "react";
import styled from "styled-components";
import { BiTrashAlt } from "react-icons/bi";

function KeepCard({ data, onDelete }: any) {
  const { title, url } = data;

  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=))([a-zA-Z0-9]{11})))/;
  const match = url.match(regExp)
  const videoId = match ? match[1] || match[2] : undefined;
  const embed = `https://www.youtube.com/embed/${videoId}`

  return (
    <KeepContainer>
      <Card>
        <KeepTop>
          <Iframe src={embed} />
        </KeepTop>
        <KeepBottom>
          <Title>{title}</Title>
        </KeepBottom>
        <Trash className="delete" onClick={() => onDelete(data)}>
          <BiTrashAlt />
        </Trash>
      </Card>
    </KeepContainer>
  );
}

export default KeepCard;

const KeepContainer = styled.div`
  margin-top: 2rem;
  margin-right: 2rem;
`;

const Card = styled.div`
  width: 360px;
  height: 300px;
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 10px 1px rgba(209, 209, 209, 0.6);
  border-radius: 0.5rem;
  letter-spacing: 1.5px;
  overflow: hidden;
  position: relative;
  &:hover {
    .delete {
      display: block;
    }
  }
`;

const Trash = styled.div`
  width: 70px;
  height: 70px;
  background-color: #242323;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: -20px;
  right: -20px;
  padding: 1.2rem;
  font-size: 1.5rem;
  display: none;
  &:active {
    background-color: red;
  }
`;

const KeepTop = styled.div`
  width: 100%;
  height: 200px;
`;

const KeepBottom = styled.div`
  width: 100%;
  height: 100px;
`;

const Title = styled.div`
  padding: 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  // 말줄임
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  /* word-break: keep-all; */
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;
