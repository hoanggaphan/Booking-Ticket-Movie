import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import loginHead from "assets/images/login-head.png";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import useStyles from "./styles";

function LoginCard(props) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    taiKhoan: "",
    matKhau: "",
  });

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
          <img className="card-img" src={loginHead} alt="login head" />
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
            <Button type="submit" className="login-btn">
              Đăng Nhập
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
          <Link to="/home" className="card-link">
            Trang Chủ
          </Link>
        </Card.Footer>
      </Card>
    </Box>
  );
}

export default LoginCard;
