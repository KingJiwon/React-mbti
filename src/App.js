import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GlobalStyle from './Components/GlobalStyle';
import Start from './pages/Start';
import Mbti from './pages/Mbti';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  return (
    <React.Fragment>
      <GlobalStyle />
      <Main>{page === 0 ? <Start /> : <Mbti />}</Main>
    </React.Fragment>
  );
}

export default App;
