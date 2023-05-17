import React from 'react'
import styled from "styled-components";

function AddButton() {
  return (
    <Button>+</Button>
  )
}

export default AddButton

const Button = styled.button`
  width: 80px;
  height: 80px;
  font-size: 4rem;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 99;
  background-color: #242323;
  color: #fff;
  border: none;
  border-radius: 50%;
  &:hover {
    background-color: #151515;
  }
  &:active {
    background-color: #2d2c2c;
  }
`;
