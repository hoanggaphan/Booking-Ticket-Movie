import React from 'react';

import { actRegisterUserAPI } from "./../../../redux/actions/index";
import { connect } from "react-redux";
import WithBgSquares from './../../../component/withBgSquares/withBgSquares';
import RegisterCard from './../../../component/register-card/register-card';
import { useHistory } from 'react-router-dom';

const EnhancedRegister = WithBgSquares(RegisterCard)
function Register(props) {
  const history = useHistory();
  const handleSubmit = (values, notValid) => e => {
    e.preventDefault();
    if(notValid === false) {
      props.actRegisterUser(values, history);
    }
  };

  return (
    <EnhancedRegister onSubmit={handleSubmit} color="warning"/>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    actRegisterUser: (data, history) => {
      dispatch(actRegisterUserAPI(data, history));
    }
  };
};

export default connect(null, mapDispatchToProps)(Register);