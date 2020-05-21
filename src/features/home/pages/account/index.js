import Box from "@material-ui/core/Box";
import AccountCard from "features/home/pages/account/components/AccountCard";
import BookingHistory from "features/home/pages/account/components/BookingHistory";
import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actGetAccountUser } from "redux/actions/user";
import useStyles from "./styles";

function Account() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  const classes = useStyles();
  const history = useHistory();
  const userLocal = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const taiKhoan = { taiKhoan: userLocal.taiKhoan };
    dispatch(actGetAccountUser(taiKhoan));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!userLocal) {
      history.replace({ pathname: "/user/login" });
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <Box className={classes.root}>
      <Tabs mountOnEnter defaultActiveKey="history">
        <Tab eventKey="history" title="Lịch sử đặt vé">
          <BookingHistory />
        </Tab>
        <Tab eventKey="account" title="Thông tin cá nhân">
          <AccountCard />
        </Tab>
      </Tabs>
    </Box>
  );
}

export default Account;
