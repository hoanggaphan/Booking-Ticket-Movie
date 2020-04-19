import React from "react";
import { actLoginUserAPI } from './../../../redux/actions/index';
import { connect } from "react-redux";
import LoginCard from "../../../component/login-card/login-card";
import WithBgSquares from '../../../component/withBgSquares/withBgSquares';
import { useLocation, useHistory } from 'react-router-dom';

const EnhancedLogin = WithBgSquares(LoginCard);
function Login(props) {
  const location = useLocation();
  const history = useHistory();
  const { from } = location.state || { from: { pathname: "/" }};

  const handleSubmit = values => e => {
    e.preventDefault();
    props.actLoginUser(values, history, from);
  }
  return (
    <EnhancedLogin onSubmit={handleSubmit} color="primary"/>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    actLoginUser: (data, history, from) => {
      dispatch(actLoginUserAPI(data, history, from));
    }
  }
}

export default connect(null, mapDispatchToProps) (Login);