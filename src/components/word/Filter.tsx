import React from "react";
import styled from "styled-components";

type Filter = {
  filters: string[];
  filter: string;
  setFilter: (state: string) => void;
};

function Filter({ filters, filter, setFilter }: Filter) {
  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value)
  }
  
  return (
    <FilterList value={filter} onChange={handleChangeFilter}>
      {filters.map((filter, index) => (
        <FilterItem key={index} value={filter}>{filter}</FilterItem>
      ))}
    </FilterList>
  );
}

export default Filter;

const FilterList = styled.select`
  width: 120px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
`;
const FilterItem = styled.option`
  text-align: center;
`;
