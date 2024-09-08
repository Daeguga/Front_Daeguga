import React from "react";
import logo from "../assets/daeguga.svg";
import * as L from "./Login.styled";

const Login = () => {
  return (
    <>
      <L.box>
        <L.logo img src={logo} />
        <L.id placeholder="아이디를 입력하세요"></L.id>
        <L.password placeholder="비밀번호를 입력하세요"></L.password>
        <L.login placeholder="로그인"></L.login>
      </L.box>
    </>
  );
};

export default Login;
