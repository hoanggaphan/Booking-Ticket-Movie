import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';

import useStyles from "./style";
import { actGetAccountUser } from "./../../../redux/actions/index";
import AccountCard from "../../../component/account-card/account-card";
import HistoryBooking from "../../../component/history-booking/history-booking";

function Account(props) {
  const classes = useStyles();
  const { getAccountUser, user } = props;
  const history = useHistory();
  const userLocal = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getAccountUser({ taiKhoan: userLocal.taiKhoan });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!userLocal) {
      history.replace({pathname: "/user/login"});
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <Box className={classes.root}>
      <Tabs mountOnEnter defaultActiveKey="history">
        <Tab eventKey="history" title="Lịch sử đặt vé" >
          <HistoryBooking/>
        </Tab>
        <Tab eventKey="account" title="Thông tin cá nhân" >
          <AccountCard/>
        </Tab>
      </Tabs>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAccountUser: (taiKhoan) => {
      dispatch(actGetAccountUser(taiKhoan));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
