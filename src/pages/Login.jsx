import React, { useRef } from 'react';

export default function Login() {
  const loginIdInput = useRef();
  const loginPwInput = useRef();
  const registerIdInput = useRef();
  const registerPwInput = useRef();
  return (
    <React.Fragment>
      {/* 로그인 파트 */}
      <h1>로그인 파트 입니다</h1>
      아이디 <input type="text" ref={loginIdInput} required />
      <br />
      <br />
      비밀번호 <input type="text" ref={loginPwInput} required />
      <br />
      <br />
      <button onClick={loginHandler}>로그인</button>{' '}
      <LInk to={KAKAO_AUTO_URL}>카카오 로그인</LInk>
      <br />
      <br />
      {/* 회원가입 파트 */}
      <h1>회원가입 파트 입니다</h1>
      아이디 <input type="text" ref={registerIdInput} required />
      <br />
      <br />
      비밀번호 <input type="text" ref={registerPwInput} required />
      <br />
      <br />
      <button onClick={registerHandler}>회원 가입</button>{' '}
      <LInk to={KAKAO_AUTO_URL}>카카오 로그인</LInk>
      <br />
      <br />
    </React.Fragment>
  );
}
