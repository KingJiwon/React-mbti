import React from 'react';
import { Link } from 'react-router-dom';

export default function Board() {
  return (
    <React.Fragment>
      <h1>게시판 페이지 입니다.</h1>
      <Link to="1">게시글 1번 보여주기</Link>
      <Link to="2">게시글 2번 보여주기</Link>
      <Link to="3">게시글 3번 보여주기</Link>
    </React.Fragment>
  );
}
