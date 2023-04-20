import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './Components/GlobalStyle';
import Main from './Components/Main';
import Login from './pages/Login';

function App() {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={isLogin ? <Main /> : <Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
