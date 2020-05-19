import registerCard from "features/user/pages/register/components/RegisterCard";
import WithBgSquares from "common/WithBgSquares";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { actRegisterUserAPI } from "redux/actions";

const EnhancedRegister = WithBgSquares(registerCard);
function Register(props) {
  const history = useHistory();
  const handleSubmit = (values, notValid) => (e) => {
    e.preventDefault();
    if (notValid === false) {
      props.actRegisterUser(values, history);
    }
  };

  return <EnhancedRegister onSubmit={handleSubmit} color="warning" />;
}

const mapDispatchToProps = (dispatch) => {
  return {
    actRegisterUser: (data, history) => {
      dispatch(actRegisterUserAPI(data, history));
    },
  };
};

export default connect(null, mapDispatchToProps)(Register);
