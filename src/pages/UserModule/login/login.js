import React from "react";
import { actLoginUserAPI } from './../../../redux/actions/index';
import { connect } from "react-redux";
import LoginCard from "../../../component/login-card/login-card";
import WithBgSquares from '../../../component/withBgSquares/withBgSquares';

const EnhancedLogin = WithBgSquares(LoginCard);
function Login(props) {
  const handleSubmit = values => e => {
    e.preventDefault();
    props.actLoginUser(values, props.history);
  }
  return (
    <EnhancedLogin onSubmit={handleSubmit} color="primary"/>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    actLoginUser: (data, history) => {
      dispatch(actLoginUserAPI(data, history));
    }
  }
}

export default connect(null, mapDispatchToProps) (Login);