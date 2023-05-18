import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { BiBrain, BiPencil, BiTrashAlt } from "react-icons/bi";

function WordCard({ data, onUpdate, onDelete }: any) {
  const { word, mean, description, bookmark } = data;
  const [isBookmark, setIsBookmark] = useState(false);
  const [isDot, setIsDot] = useState(false);

  const handleClick = () => {
    setIsBookmark(!isBookmark)
    const bookmark = !isBookmark
    onUpdate({...data, bookmark})
  }

  return (
    <CardContainer>
      <Bookmark onClick={handleClick}>
        {bookmark ? <AiFillStar className="fill" /> : <AiOutlineStar />}
      </Bookmark>
      <Card>
        {isDot ? (
          <DotMenu>
            <DotItem>
              <BiBrain className="icon" />
              Done
            </DotItem>
            <DotItem>
              <BiPencil className="icon" />
              Edit
            </DotItem>
            <DotItem onClick={() => onDelete(data)}>
              <BiTrashAlt className="icon" />
              Delete
            </DotItem>
          </DotMenu>
        ) : (
          <></>
        )}
        <CardWord>
          {word}
          <BsThreeDots className="sideMenu" onClick={() => setIsDot(!isDot)} />
        </CardWord>
        <Bar />
        <CardMean>{mean}</CardMean>
        <CardDescription>{description}</CardDescription>
      </Card>
    </CardContainer>
  );
}

export default WordCard;

const CardContainer = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
`;

const Bookmark = styled.div`
  width: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  .fill {
    color: #fcda32;
  }
`;

const Card = styled.div`
  width: 100%;
  height: max-content;
  background-color: #fff;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 2rem;
  box-shadow: 0px 0px 10px 1px rgba(209, 209, 209, 0.6);
  position: relative;
  letter-spacing: 1.5px;
  .sideMenu {
    color: #ddd;
    cursor: pointer;
  }
`;

const CardWord = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

const CardMean = styled.div`
  padding-bottom: 2rem;
`;

const CardDescription = styled.div``;

const Bar = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 1.5rem;
`;

const DotMenu = styled.ul`
  width: 130px;
  height: 110px;
  background-color: #fff;
  color: #aaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1rem;
  padding-left: 0.5rem;
  position: absolute;
  top: 4rem;
  right: 25px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(209, 209, 209, 0.6);
  user-select: none;
  cursor: pointer;
`;

const DotItem = styled.li`
  line-height: 2;
  display: flex;
  align-items: center;
  .icon {
    width: 40px;
  }
  &:hover {
    font-weight: bold;
    color: #242323;
  }
`;
