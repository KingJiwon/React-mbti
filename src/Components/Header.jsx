import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <React.Fragment>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <Link to="/">홈페이지로 이동</Link>
          </li>
          <li>
            <Link to="/board">게시판 페이지로 이동</Link>
          </li>
          <li>
            <Link to="/profile">프로필 페이지로 이동</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
