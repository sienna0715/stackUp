import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import AddButton from "../components/commons/AddButton";
import WordModal from "../components/word/WordModal";
import Filter from "../components/word/Filter";
import WordCard from "../components/word/WordCard";

const filters = ["Newest", "Oldest", "Bookmark"];

type WordData = {
  id?: string;
  word?: string;
  mean?: string;
  description?: string;
  bookmark?: boolean;
};

function Word() {
  const [words, setWords] = useState(saveWords);
  const [isModal, setIsModal] = useState(false);
  const [filter, setFilter] = useState(filters[0]);

  const handleUpdate = (updated: WordData) => {
    setWords(
      words.map((word: WordData) => (word.id === updated.id ? updated : word))
    );
  };

  const handleAdd = (word: WordData) => {
    setWords([...words, word]);
  };

  const handleDelete = (deleted: WordData) => {
    setWords(words.filter((word: WordData) => word.id !== deleted.id));
  };

  const filered: object[] | undefined = getFiltered(words, filter);

  useEffect(() => {
    localStorage.setItem("word", JSON.stringify(words));
  }, [words]);

  return (
    <WordWrap>
      <WordContainer>
        <ButtonBox onClick={() => setIsModal(true)}>
          <AddButton />
        </ButtonBox>
        {isModal ? (
          <WordModal
            isModal={isModal}
            setIsModal={setIsModal}
            onAdd={handleAdd}
          />
        ) : (
          false
        )}
        <FilterBox>
          <Filter filters={filters} filter={filter} setFilter={setFilter} />
        </FilterBox>
        <CardBox>
          {filered?.map((data: object, key: number) => {
            return (
              <WordCard
                key={key}
                data={data}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            );
          })}
        </CardBox>
      </WordContainer>
    </WordWrap>
  );
}

export default Word;

function getFiltered(words: object[], filter: string) {
  if (filter === "Newest") return words;
  else if (filter === "Oldest") return words.reverse();
  return words.filter((word: WordData) => word.bookmark === true);
}

function saveWords() {
  const words = localStorage.getItem("word");
  return words ? JSON.parse(words) : [];
}

const WordWrap = styled.div`
  width: 82vw;
  min-height: 100vh;
  display: flex;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;
const WordContainer = styled.div`
  width: 100%;
`;

const FilterBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
`;

const CardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonBox = styled.div``;

// export const initial = [
//   {
//     id: 1,
//     word: "progress",
//     mean: "진보하다, 나아가다",
//     description: "The course allows students to progress at their own speed.",
//     bookmark: true,
//   },
//   {
//     id: 2,
//     word: "progress",
//     mean: "나아가다",
//     description: "The course allows students to progress at their own speed.",
//     bookmark: true,
//   },
//   {
//     id: 3,
//     word: "progress",
//     mean: "나아가다",
//     description: "The course allows students to progress at their own speed.",
//     bookmark: false,
//   },
//   {
//     id: 4,
//     word: "progress",
//     mean: "나아가다",
//     description: "The course allows students to progress at their own speed.",
//     bookmark: true,
//   },
//   {
//     id: 5,
//     word: "progress",
//     mean: "나아가다",
//     description: "The course allows students to progress at their own speed.",
//     bookmark: false,
//   },
// ];
