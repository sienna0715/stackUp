import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Menu({ menus, currentTab, setCurrentTab }: any) {
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    if (e.target.textContent === menus[0]) {
      setCurrentTab(menus[0]);
      navigate("/");
    } else if (e.target.textContent === menus[1]) {
      setCurrentTab(menus[1]);
      navigate("/keep");
    } else {
      setCurrentTab(menus[2]);
      navigate("/challenge");
    }
  };

  return (
    <MenuWrap>
      <Logo>
        <img src={require("../assets/logo.png")} />
      </Logo>
      <MenuList onClick={handleClick}>
        {currentTab === menus[0] ? (
          <>
            <Select>{menus[0]}</Select>
            <MenuItem>{menus[1]}</MenuItem>
            <MenuItem>{menus[2]}</MenuItem>
          </>
        ) : currentTab === menus[1] ? (
          <>
            <MenuItem>{menus[0]}</MenuItem>
            <Select>{menus[1]}</Select>
            <MenuItem>{menus[2]}</MenuItem>
          </>
        ) : (
          <>
            <MenuItem>{menus[0]}</MenuItem>
            <MenuItem>{menus[1]}</MenuItem>
            <Select>{menus[2]}</Select>
          </>
        )}
        <Bar />
      </MenuList>
    </MenuWrap>
  );
}

export default Menu;

const MenuWrap = styled.div`
  background-color: #fff;
  width: 600px;
  height: 100vh;
  padding: 0 2rem;
  box-shadow: 15px 0px 20px -15px rgba(118, 118, 118, 0.6);
  /* -webkit-box-shadow: 15px 0px 20px -15px rgba(118, 118, 118, 0.6);
  -moz-box-shadow: 15px 0px 20px -15px rgba(118, 118, 118, 0.6); */
  user-select: none;
  /* text-transform: uppercase; */
`;

const Logo = styled.div`
  width: 12rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
  img {
    width: 100%;
  }
`;

const MenuList = styled.ul``;

const MenuItem = styled.li`
  width: max-content;
  height: 2rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #242323;
    color: #fff;
    padding: 0 1rem;
    border-radius: 5rem;
  }
`;

const Select = styled.li`
  width: max-content;
  height: 2rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  background-color: #242323;
  color: #fff;
  padding: 0 1rem;
  border-radius: 5rem;
`;

const Bar = styled.div`
  border-bottom: 1px solid #ddd;
  margin-top: 5rem;
`;
