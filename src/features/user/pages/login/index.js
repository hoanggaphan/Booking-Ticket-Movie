import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { actLoginUser } from "redux/actions/user";
import LoginCard from "./components/LoginCard";

function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const { from } = location.state || { from: { pathname: "/home" } };

  const handleSubmit = (values) => (e) => {
    e.preventDefault();
    dispatch(actLoginUser(values, history, from, enqueueSnackbar));
  };
  return <LoginCard onSubmit={handleSubmit} />;
}

export default Login;
