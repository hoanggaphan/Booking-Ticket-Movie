import registerCard from "features/user/pages/register/components/RegisterCard";
import WithBgSquares from "common/WithBgSquares";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actRegisterUserAPI } from "redux/actions/user";

const EnhancedRegister = WithBgSquares(registerCard);
function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values, notValid) => (e) => {
    e.preventDefault();
    if (notValid === false) {
      dispatch(actRegisterUserAPI(values, history));
    }
  };

  return <EnhancedRegister onSubmit={handleSubmit} color="warning" />;
}

export default Register;
