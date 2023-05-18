import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

type Type = {
  menus: string[];
  currentTab: string;
  setCurrentTab: (state: string) => void;
};

function Menu({ menus, currentTab, setCurrentTab }: Type) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent === menus[0]) {
      setCurrentTab(menus[0]);
      navigate("/");
    } else if (e.currentTarget.textContent === menus[1]) {
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
        <img src={require("../../assets/logo.png")} alt="" />
      </Logo>
      <MenuList>
        {currentTab === menus[0] ? (
          <>
            <Select onClick={handleClick}>{menus[0]}</Select>
            <MenuItem onClick={handleClick}>{menus[1]}</MenuItem>
            <MenuItem onClick={handleClick}>{menus[2]}</MenuItem>
          </>
        ) : currentTab === menus[1] ? (
          <>
            <MenuItem onClick={handleClick}>{menus[0]}</MenuItem>
            <Select onClick={handleClick}>{menus[1]}</Select>
            <MenuItem onClick={handleClick}>{menus[2]}</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleClick}>{menus[0]}</MenuItem>
            <MenuItem onClick={handleClick}>{menus[1]}</MenuItem>
            <Select onClick={handleClick}>{menus[2]}</Select>
          </>
        )}
        <Bar />
      </MenuList>
    </MenuWrap>
  );
}

export default Menu;

const MenuWrap = styled.div`
  min-width: 360px;
  min-height: 100vh;
  padding: 0 2rem;
  background-color: #fff;
  box-shadow: 15px 0px 20px -15px rgba(118, 118, 118, 0.6);
  -webkit-box-shadow: 15px 0px 20px -15px rgba(118, 118, 118, 0.6);
  -moz-box-shadow: 15px 0px 20px -15px rgba(118, 118, 118, 0.6);
  z-index: 999;
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
  height: 2.5rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    padding: 0 1rem;
    border-radius: 5rem;
    background-color: #242323;
    color: #fff;
  }
`;

const Select = styled.li`
  width: max-content;
  height: 2.5rem;
  margin-bottom: 3rem;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  background-color: #242323;
  color: #fff;
  border-radius: 5rem;
  cursor: pointer;
`;

const Bar = styled.div`
  margin-top: 5rem;
  border-bottom: 1px solid #ddd;
`;

{
  /* <>
      {menus.map((menu) => {
        <MenuItem
          className={menu === currentTab ? "select" : ""}
          onClick={handleClick}
        >
          {menu}
        </MenuItem>
      })}
      <Bar />
    </> */
}
