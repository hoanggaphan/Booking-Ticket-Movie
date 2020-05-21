import WithBgSquares from "common/WithBgSquares";
import loginCard from "features/user/pages/login/components/LoginCard";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { actLoginUserAPI } from "redux/actions/user";

const EnhancedLogin = WithBgSquares(loginCard);
function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const { from } = location.state || { from: { pathname: "/home" } };

  const handleSubmit = (values) => (e) => {
    e.preventDefault();
    dispatch(actLoginUserAPI(values, history, from));
  };
  return <EnhancedLogin onSubmit={handleSubmit} color="primary" />;
}

export default Login;
