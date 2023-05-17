import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Word from "./pages/Word";
import Keep from "./pages/Keep";
import Challenge from "./pages/Challenge";
import Menu from "./components/commons/Menu";
import styled from "styled-components";
import Footer from "./components/commons/Footer";
import { useState } from "react";

export type MenuType = string;

function App() {
  const menus: string[] = ["word", "keep", "challenge"];
  const [currentTab, setCurrentTab] = useState(menus[0]);

  return (
    <BrowserRouter>
      <BodyWrap>
        <Menu
          menus={menus}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <BodyContainer>
          <Routes>
            <Route path="/" element={<Word />} />
            <Route path="/keep" element={<Keep />} />
            <Route path="/challenge" element={<Challenge />} />
          </Routes>
          <Footer />
        </BodyContainer>
      </BodyWrap>
    </BrowserRouter>
  );
}

export default App;

const BodyWrap = styled.div`
  width: 100%;
  display: flex;
`;

const BodyContainer = styled.div`
  width: 100%;
  height: max-content;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  position: relative;
`;
