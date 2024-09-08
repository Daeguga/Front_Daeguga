import styled from "styled-components";

export const logo = styled.img`
  width: 230px;
  height: 230px;
  text-align: center;
  margin-top: 80px;
`;

export const box = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const id = styled.input`
  border: 1px solid #c7740d;
  position: absolute;
  width: 235px;
  height: 35px;
  background: white;
  border-radius: 10px;
  border: 1px #c7740d solid;
  margin-top: 350px;
  margin-left: -220px;
  padding-left: 10px;

  &::placeholder {
    margin-left: 500px;
    color: black;
    font-size: 11px;
    width: 235px;
    height: 35px;
  }
`;

export const password = styled.input`
  border: 1px solid #c7740d;
  position: absolute;
  width: 235px;
  height: 35px;
  background: white;
  border-radius: 10px;
  border: 1px #c7740d solid;
  margin-top: 400px;
  margin-left: -220px;
  padding-left: 10px;

  &::placeholder {
    margin-left: 200px;
    color: black;
    font-size: 11px;
    width: 235px;
    height: 35px;
  }
`;

export const login = styled.input`
  position: absolute;
  color: white;
  width: 235px;
  height: 35px;
  background: #c7740d;
  border-radius: 10px;
  border: 1px #c7740d solid;
  margin-top: 500px;
  margin-left: -220px;
  font-size: 11px;

  &::placeholder {
    margin-left: 200px;
    color: white;
    font-size: 15px;
    width: 235px;
    height: 35px;
    text-align: center;
    font-family: pretendard-bold;
  }
`;
