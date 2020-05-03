import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from "@material-ui/core";
import { Visibility, VisibilityOff, KeyboardBackspace,Error, Close } from "@material-ui/icons";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { connect } from "react-redux";
import { useSnackbar } from "notistack";

import useStyles from './style';
import { actClearMessage } from './../../redux/actions/index';

function RegisterCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { message, status, isFetching, clearMessage } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [notValid, setNotValid] = useState(true);
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

  useEffect(() => {
    if(message) {
      enqueueSnackbar(message, {
        variant: status,
        anchorOrigin: {vertical: "top", horizontal: "center"},
        action: (key) => (
          <IconButton
            className={classes.iconBtn}
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
        // eslint-disable-next-line 
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
  
  const formValidation = () => {
    setNotValid(prevState => {
      prevState = error.hoTen.isError || error.taiKhoan.isError || error.matKhau.isError || error.email.isError || error.soDt.isError;
      return prevState;
    });
  }
  useEffect(formValidation, [error]) // Khi state input thay đổi setState lại cho form

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
    <Box className={classes.registerCard} maxWidth="390px" m="10px">
      <Card>
        <Card.Header>
          <img
            className="card-img"
            src={process.env.PUBLIC_URL + "/images/register-head.png"}
            alt="login head"
          />
          <Card.Title>Đăng Ký</Card.Title>
        </Card.Header>
        <Card.Body>
          <form onSubmit={props.onSubmit(values, notValid)} >
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
            <Button type="submit" className="register-btn">
              Đăng Ký
            </Button>
          </form>
        </Card.Body>
        <Card.Footer>
          <Link to="/" className="card-link">
            Trang Chủ
          </Link>
          <IconButton
            size="small"
            className="card-back"
            onClick={() => history.goBack()}
          >
            <KeyboardBackspace />
          </IconButton>
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

export default connect(mapStateToProps, mapDispatchToProps) (RegisterCard);