import './App.css';
import React from 'react';
import Profile from './Components/Profile';
import Board from './Components/Board';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import BoardDetail from './Components/BoardDetail';
import TestRedux from './Components/TestRedux';
import ListContainer from './Components/ListContainer';
function App() {
  return (
    <div className="App">
      <ListContainer />
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<TestRedux />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
}

export default App;
