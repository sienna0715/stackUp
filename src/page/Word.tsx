import React from "react";
import styled from "styled-components";
import * as C from "../commons/Styled";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { BiBrain, BiPencil, BiTrashAlt } from "react-icons/bi";
import { useState } from "react";
import Modal from "../commons/Modal";

function Word({ currentTab }: any) {
  const [isBookmark, setIsBookmark] = useState(false);
  const [isDot, setIsDot] = useState(false);
  const [isModal, setIsModal] = useState(false);

  return (
    <WordWrap>
      <WordContainer>
        <C.AddButton onClick={() => setIsModal(true)}>+</C.AddButton>
        {isModal ? <Modal isModal={isModal} setIsModal={setIsModal} /> : false}
        <FilterBox>
          <Filter>
            <FilterItem>A - Z</FilterItem>
            <FilterItem>Z - A</FilterItem>
            <FilterItem>Bookmark</FilterItem>
          </Filter>
        </FilterBox>
        <CardBox>
          <Bookmark onClick={() => setIsBookmark(!isBookmark)}>
            {isBookmark ? <AiFillStar className="fill" /> : <AiOutlineStar />}
          </Bookmark>
          <Card>
            <CardWord>
              progress
              <BsThreeDots
                className="sideMenu"
                onClick={() => setIsDot(!isDot)}
              />
            </CardWord>
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
                <DotItem>
                  <BiTrashAlt className="icon" />
                  Delete
                </DotItem>
              </DotMenu>
            ) : (
              <></>
            )}
            <Bar />
            <CardMean>진보하다, 나아가다</CardMean>
            <CardDescription>
              The course allows students to progress at their own speed.
            </CardDescription>
          </Card>
        </CardBox>
      </WordContainer>
    </WordWrap>
  );
}

export default Word;

const WordWrap = styled.div`
  width: 85.5vw;
  height: 100vh;
  display: flex;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WordContainer = styled.div``;

const FilterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Filter = styled.select`
  width: 120px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
`;
const FilterItem = styled.option`
  text-align: center;
`;

const CardBox = styled.div`
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
