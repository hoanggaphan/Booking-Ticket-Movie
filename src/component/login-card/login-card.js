import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@material-ui/core";
import Spinner from 'react-bootstrap/Spinner'
import { Visibility, VisibilityOff, Close } from "@material-ui/icons";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import { actClearMessage } from './../../redux/actions/index';

function LoginCard(props) {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { isFetching, message, clearMessage, status } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  useEffect(() => {
    if(message) {
      enqueueSnackbar(message, {
        variant: status,
        anchorOrigin: {vertical: "top", horizontal: "center"},
        action: (key) => (
          <IconButton
            style={{ color: "white", outline: "unset" }}
            onClick={() => closeSnackbar(key)}
          >
            <Close />
          </IconButton>
        ),
      });
    }
    return () =>  {clearMessage()};
    // eslint-disable-next-line
  }, [isFetching]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Box className={classes.loginCard} maxWidth="390px" m="10px">
      <Card>
        <Card.Header>
          <img
            className="card-img"
            src={process.env.PUBLIC_URL + "/login-head.png"}
            alt="login head"
          />
          <Card.Title>Đăng Nhập</Card.Title>
        </Card.Header>
        <Card.Body>
          <form onSubmit={props.onSubmit(values)}>
            <FormControl required variant="outlined" fullWidth size="small">
              <InputLabel>Tài Khoản</InputLabel>
              <OutlinedInput
                className="form-input"
                name="taiKhoan"
                onChange={handleChange}
                labelWidth={85}
              />
            </FormControl>
            <FormControl required variant="outlined" fullWidth size="small">
              <InputLabel>Mật Khẩu</InputLabel>
              <OutlinedInput
                className="form-input"
                name="matKhau"
                onChange={handleChange}
                type={!showPassword && "password"}
                labelWidth={85}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button disabled={isFetching} type="submit" className="login-btn">
              Đăng Nhập
              {isFetching && <Spinner animation="border" className={classes.buttonProgress}/>}
            </Button>
          </form>
        </Card.Body>
        <Card.Footer>
          <Box>
            Chưa có tài khoản?
            <Link to="/user/register" className="card-link">
              Đăng Ký
            </Link>
          </Box>
          <Link to="/" className="card-link">
            Trang Chủ
          </Link>
        </Card.Footer>
      </Card>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.userReducer.isFetching,
    message: state.userReducer.message,
    status: state.userReducer.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearMessage: () => {
      dispatch(actClearMessage());
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginCard);
