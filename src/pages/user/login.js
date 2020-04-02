import React from "react";
import LoginUser from "../../component/login-user/login-user";

export default function Login(props) {
  return (
    <>
      <LoginUser history={props.history} />
    </>
  );
}
