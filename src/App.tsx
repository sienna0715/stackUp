import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Word from "./page/Word";
import Keep from "./page/Keep";
import Challenge from "./page/Challenge";
import Menu from "./commons/Menu";
import styled from "styled-components";
import Footer from "./commons/Footer";
import { useState } from "react";

export type MenuType = string;

function App() {
  const menus: string[] = ["word", "keep", "challenge"];
  const [currentTab, setCurrentTab] = useState(menus[0]);

  return (
    <BrowserRouter>
      <Wrap>
        <Menu
          menus={menus}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <Container>
          <Routes>
            <Route path="/" element={<Word currentTab={currentTab} />} />
            <Route path="/keep" element={<Keep currentTab={currentTab} />} />
            <Route
              path="/challenge"
              element={<Challenge currentTab={currentTab} />}
            />
          </Routes>
          <Footer />
        </Container>
      </Wrap>
    </BrowserRouter>
  );
}

export default App;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  background-color: #f5f5f5;
`;

const Container = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
