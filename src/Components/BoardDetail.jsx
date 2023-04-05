import React from 'react';
import { useParams } from 'react-router-dom';

export default function BoardDetail() {
  const { boardID } = useParams();
  console.log(boardID);

  return (
    <React.Fragment>
      <h2>{boardID}번 게시글 내용입니다!</h2>
    </React.Fragment>
  );
}
