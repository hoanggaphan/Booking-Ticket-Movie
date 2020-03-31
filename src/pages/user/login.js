import React from "react";
import LoginCard from "./../../component/login-card/login-card";

export default function Login(props) {
  return (
    <>
      <LoginCard history={props.history} />
    </>
  );
}
