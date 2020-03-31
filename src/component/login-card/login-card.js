import React, { useState } from "react";
import { Box, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import useStyles from "./style";
import { actLoginUserAPI } from './../../redux/actions/index';
import { connect } from "react-redux";

function LoginCard(props) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    taiKhoan: '',
    matKhau: '',
  });
  
  const handleSubmit = e => {
    e.preventDefault();
    props.actLoginUser(values, props.history);
  }
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  return (
    <Box className={classes.login} style={{backgroundImage: `url('${process.env.PUBLIC_URL}/dots.png')`, backgroundSize: "contain"}}>
      <Box className="squares square1"></Box>
      <Box className="squares square2"></Box>
      <Box className="squares square3"></Box>
      <Box className="squares square4"></Box>
      <Box className="squares square5"></Box>
      <Box className="squares square6"></Box>
      <Box className="squares square7"></Box>
      <Box maxWidth="390px" m="30px" >
        <Card>
          <Card.Header>
            <img className="card-img" src={process.env.PUBLIC_URL + "/login-head.png"} alt="login head"/>
            <Card.Title>Đăng Nhập</Card.Title>
          </Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit} autocomplete="off">
              <FormControl required variant="outlined" fullWidth size="small">
                <InputLabel>Tài Khoản</InputLabel>
                <OutlinedInput className="form-input" name="taiKhoan" onChange={handleChange} labelWidth={85} />
              </FormControl>
              <FormControl required  variant="outlined" fullWidth size="small">
                <InputLabel>Mật Khẩu</InputLabel>
                <OutlinedInput
                  className="form-input"
                  name="matKhau"
                  onChange={handleChange}
                  type={!showPassword && 'password'}
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
              <Box textAlign="end">
                <Link to="/reset" className="card-link">Quên mật khẩu?</Link>
              </Box>
              <Button type="submit" className="login-btn">Đăng Nhập</Button>
            </form>
          </Card.Body>
          <Card.Footer>
            <span>Chưa có tài khoản?</span>
            <Link to="/register" className="card-link">Đăng Ký</Link>
          </Card.Footer>
        </Card>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    actLoginUser: (data, history) => {
      dispatch(actLoginUserAPI(data, history));
    }
  }
}

export default connect(null, mapDispatchToProps) (LoginCard);