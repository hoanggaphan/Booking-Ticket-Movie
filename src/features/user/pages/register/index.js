import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actRegisterUser } from "redux/actions/user";
import RegisterCard from "./components/RegisterCard";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (values, notValid) => (e) => {
    e.preventDefault();
    if (notValid === false) {
      dispatch(actRegisterUser(values, history, enqueueSnackbar));
    }
  };

  return <RegisterCard onSubmit={handleSubmit} />;
}

export default Register;
