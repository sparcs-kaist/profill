import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./common/style";
import Header from "./component/Header/Header";
import styled from "styled-components";
import Main from "./pages/Main/Main";


function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  )
}

export default App;

const AppContainer = styled.div`
  height: calc(
    100% - var(--header-size) - var(--main-margin-top) -
      var(--main-margin-bottom)
  );
  max-width: var(--screen-max-width);
  margin: 0 auto;
  margin-top: var(--main-margin-top);
  margin-bottom: var(--main-margin-bottom);
`;