import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText
} from "@material-ui/core";
import {
  Visibility,
  VisibilityOff,
  KeyboardBackspace,
  Error
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import useStyles from "./style";
import { actRegisterUserAPI } from "../../redux/actions/index";
import { connect } from "react-redux";

function RegisterUser(props) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    hoTen: "",
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP10",
    maLoaiNguoiDung: "KhachHang"
  });
  const [error, setError] = useState({
    hoTen: {
      message: "",
      isError: false
    },
    taiKhoan: {
      message: "",
      isError: false
    },
    matKhau: {
      message: "",
      isError: false
    },
    email: {
      message: "",
      isError: false
    },
    soDt: {
      message: "",
      isError: false
    }
  });
  const [notValid, setNotValid] = useState(true);

  const handleError = e => {
    const { name, value } = e.target;
    let message = "";
    let isError = false;

    switch (name) {
      case "hoTen":
        const pattern = new RegExp(
          "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
        );
        if (value && !value.match(pattern)) {
          isError = true;
          message = "Họ tên không được chứa số hoặc ký tự đặc biệt";
        }
        break;
      case "taiKhoan":
        if (value && value.length < 5) {
          isError = true;
          message = "Tài Khoản phải có ít nhất 5 ký tự";
        }
        break;
      case "matKhau":
        const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (value && !value.match(password)) {
          isError = true;
          message =
            "Mật khẩu từ 6 - 20 ký tự, ít nhất 1 chữ hoa, 1 chữ thường và 1 số.";
        }
        break;
      case "email":
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value && !value.match(mailformat)) {
          isError = true;
          message = "Email Không hợp lệ";
        }
        break;
      default:
        if (value && !value.match(/^[0-9]+$/)) {
          isError = true;
          message = "Số điện thoại phải là số";
        } else if (value && value.length < 10) {
          message = "Số điện thoại phải có ít nhất 10 số";
          isError = true;
        }
        break;
    }
    setError({ ...error, [name]: { message, isError } });
  };

  useEffect(() => {formValidation()}, [error])
  const formValidation = () => {
    setNotValid(prevState => {
      prevState = error.hoTen.isError || error.taiKhoan.isError || error.matKhau.isError || error.email.isError || error.soDt.isError;
      return prevState;
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(notValid === false) {
      props.actRegisterUser(values, props.history);
    }
  };
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
    <Box
      className={classes.register}
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/dots.png')`,
        backgroundSize: "contain"
      }}
    >
      <Box className="squares square1"></Box>
      <Box className="squares square2"></Box>
      <Box className="squares square3"></Box>
      <Box className="squares square4"></Box>
      <Box className="squares square5"></Box>
      <Box className="squares square6"></Box>
      <Box className="squares square7"></Box>
      <Box maxWidth="390px" m="10px">
        <Card>
          <Card.Header>
            <img
              className="card-img"
              src={process.env.PUBLIC_URL + "/register-head.png"}
              alt="login head"
            />
            <Card.Title>Đăng Ký</Card.Title>
          </Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit} className="card-form">
              <FormControl
                className={`${error.hoTen.isError && "error"}`}
                required
                variant="outlined"
                fullWidth
                size="small"
                error={error.hoTen.isError}
              >
                <InputLabel>Họ Tên</InputLabel>
                <OutlinedInput
                  onChange={handleChange}
                  onKeyUp={handleError}
                  className="form-input"
                  name="hoTen"
                  labelWidth={65}
                  type="text"
                />
                <FormHelperText className="form-text-error">
                  <Error />
                  <div>{error.hoTen.message}</div>
                </FormHelperText>
              </FormControl>
              <FormControl
                className={`${error.taiKhoan.isError && "error"}`}
                required
                variant="outlined"
                fullWidth
                size="small"
                error={error.taiKhoan.isError}
              >
                <InputLabel>Tài Khoản</InputLabel>
                <OutlinedInput
                  onChange={handleChange}
                  onKeyUp={handleError}
                  className="form-input"
                  name="taiKhoan"
                  labelWidth={85}
                  type="text"
                />
                <FormHelperText className="form-text-error">
                  <Error />
                  <div>{error.taiKhoan.message}</div>
                </FormHelperText>
              </FormControl>
              <FormControl
                className={`${error.matKhau.isError && "error"}`}
                required
                variant="outlined"
                fullWidth
                size="small"
                error={error.matKhau.isError}
              >
                <InputLabel>Mật Khẩu</InputLabel>
                <OutlinedInput
                  onChange={handleChange}
                  onKeyUp={handleError}
                  className="form-input"
                  name="matKhau"
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
                <FormHelperText className="form-text-error">
                  <Error />
                  <div>{error.matKhau.message}</div>
                </FormHelperText>
              </FormControl>
              <FormControl
                className={`${error.email.isError && "error"}`}
                required
                variant="outlined"
                fullWidth
                size="small"
                error={error.email.isError}
              >
                <InputLabel>Email</InputLabel>
                <OutlinedInput
                  onChange={handleChange}
                  onKeyUp={handleError}
                  className="form-input"
                  name="email"
                  labelWidth={53}
                  type="email"
                />
                <FormHelperText className="form-text-error">
                  <Error />
                  <div>{error.email.message}</div>
                </FormHelperText>
              </FormControl>
              <FormControl
                className={`${error.soDt.isError && "error"}`}
                required
                variant="outlined"
                fullWidth
                size="small"
                error={error.soDt.isError}
              >
                <InputLabel>Số Điện Thoại</InputLabel>
                <OutlinedInput
                  onChange={handleChange}
                  onKeyUp={handleError}
                  className="form-input"
                  name="soDt"
                  labelWidth={115}
                  type="text"
                />
                <FormHelperText className="form-text-error">
                  <Error />
                  <div>{error.soDt.message}</div>
                </FormHelperText>
              </FormControl>
              <Button
                type="submit"
                className="register-btn"
              >
                Đăng Ký
              </Button>
            </form>
          </Card.Body>
          <Card.Footer>
            <Link to="/" className="card-link">
              Trang Chủ
            </Link>
            <IconButton
              component={Link}
              size="small"
              to="/login"
              className="card-back"
            >
              <KeyboardBackspace />
            </IconButton>
          </Card.Footer>
        </Card>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    actRegisterUser: (data, history) => {
      dispatch(actRegisterUserAPI(data, history));
    }
  };
};

export default connect(null, mapDispatchToProps)(RegisterUser);
