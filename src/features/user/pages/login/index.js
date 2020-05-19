import WithBgSquares from "common/WithBgSquares";
import loginCard from "features/user/pages/login/components/LoginCard";
import React from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { actLoginUserAPI } from "redux/actions";

const EnhancedLogin = WithBgSquares(loginCard);
function Login(props) {
  const location = useLocation();
  const history = useHistory();
  const { from } = location.state || { from: { pathname: "/home" } };

  const handleSubmit = (values) => (e) => {
    e.preventDefault();
    props.actLoginUser(values, history, from);
  };
  return <EnhancedLogin onSubmit={handleSubmit} color="primary" />;
}

const mapDispatchToProps = (dispatch) => {
  return {
    actLoginUser: (data, history, from) => {
      dispatch(actLoginUserAPI(data, history, from));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
