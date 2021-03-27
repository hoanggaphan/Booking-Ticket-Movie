import { Box, Button } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { actUpdateAccount } from "redux/actions/user";
import useStyles from "./AccountCard.styles";

function AccountCard() {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.userReducer.account);
  const isFetching = useSelector((state) => state.userReducer.isFetching);
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();
  const [values, setValues] = useState({
    hoTen: "",
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDT: "",
    maNhom: "",
    maLoaiNguoiDung: "",
  });
  const [error, setError] = useState({
    hoTen: "",
    matKhau: "",
    email: "",
    soDT: "",
  });
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (account) {
      setValues({
        hoTen: account.hoTen,
        taiKhoan: account.taiKhoan,
        matKhau: account.matKhau,
        email: account.email,
        soDT: account.soDT,
        maNhom: "GP09",
        maLoaiNguoiDung: "KhachHang",
      });
    }
  }, [account]);

  const handleError = (e) => {
    const { name, value } = e.target;
    let message = "";

    switch (name) {
      case "hoTen":
        const pattern = new RegExp(
          "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
        );
        if (value && !value.match(pattern)) {
          message = "Họ tên không được chứa số hoặc ký tự đặc biệt";
        }
        break;
      case "matKhau":
        const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (value && !value.match(password)) {
          message =
            "Mật khẩu từ 6 - 20 ký tự, ít nhất 1 chữ hoa, 1 chữ thường và 1 số.";
        }
        break;
      case "email":
        // eslint-disable-next-line
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value && !value.match(mailformat)) {
          message = "Email Không hợp lệ";
        }
        break;
      default:
        if (value && !value.match(/^[0-9]+$/)) {
          message = "Số điện thoại phải là số";
        } else if (value && value.length < 10) {
          message = "Số điện thoại phải có ít nhất 10 số";
        }
        break;
    }
    setError({ ...error, [name]: message });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const isError = error.hoTen || error.matKhau || error.email || error.soDT; //chỉ cần 1 thg lỗi return true;
    isError ? setFormValid(false) : setFormValid(true);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      const token = JSON.parse(localStorage.getItem("user")).accessToken;
      dispatch(actUpdateAccount(values, token, enqueueSnackbar));
    }
  };

  return (
    <Box className={classes.root}>
      <Form onSubmit={handleSubmit} autoComplete="off" className="form-submit">
        <Form.Group>
          {!isFetching ? (
            <>
              <Form.Label>Tài khoản:</Form.Label>
              <Form.Control
                value={values.taiKhoan}
                required
                name="taiKhoan"
                onChange={handleChange}
                onKeyUp={handleError}
                disabled
                className="form-disabled"
              />
            </>
          ) : (
            <>
              <Skeleton variant="text" width="50px" />
              <Skeleton
                variant="rect"
                height="40px"
                style={{ borderRadius: "4px" }}
              />
            </>
          )}
        </Form.Group>
        <Form.Group>
          {!isFetching ? (
            <>
              <Form.Label>Mật khẩu:</Form.Label>
              <Form.Control
                value={values.matKhau}
                required
                name="matKhau"
                type="password"
                onChange={handleChange}
                onKeyUp={handleError}
              />
              <Form.Text className="text-muted">{error.matKhau}</Form.Text>
            </>
          ) : (
            <>
              <Skeleton variant="text" width="50px" />
              <Skeleton
                variant="rect"
                height="40px"
                style={{ borderRadius: "4px" }}
              />
            </>
          )}
        </Form.Group>
        <Form.Group>
          {!isFetching ? (
            <>
              <Form.Label>Họ tên:</Form.Label>
              <Form.Control
                value={values.hoTen}
                required
                name="hoTen"
                onChange={handleChange}
                onKeyUp={handleError}
              />
              <Form.Text className="text-muted">{error.hoTen}</Form.Text>
            </>
          ) : (
            <>
              <Skeleton variant="text" width="50px" />
              <Skeleton
                variant="rect"
                height="40px"
                style={{ borderRadius: "4px" }}
              />
            </>
          )}
        </Form.Group>
        <Form.Group>
          {!isFetching ? (
            <>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                value={values.email}
                required
                name="email"
                type="email"
                onChange={handleChange}
                onKeyUp={handleError}
              />
              <Form.Text className="text-muted">{error.email}</Form.Text>
            </>
          ) : (
            <>
              <Skeleton variant="text" width="50px" />
              <Skeleton
                variant="rect"
                height="40px"
                style={{ borderRadius: "4px" }}
              />
            </>
          )}
        </Form.Group>

        <Form.Group>
          {!isFetching ? (
            <>
              <Form.Label>Số điện thoại:</Form.Label>
              <Form.Control
                value={values.soDT}
                required
                name="soDT"
                onChange={handleChange}
                onKeyUp={handleError}
              />
              <Form.Text className="text-muted">{error.soDT}</Form.Text>
            </>
          ) : (
            <>
              <Skeleton variant="text" width="50px" />
              <Skeleton
                variant="rect"
                height="40px"
                style={{ borderRadius: "4px" }}
              />
            </>
          )}
        </Form.Group>
        <Form.Group className="form-btn">
          {!isFetching ? (
            <Button type="submit">Cập nhật</Button>
          ) : (
            <Skeleton
              variant="rect"
              width="50px"
              height="35px"
              style={{ borderRadius: "4px" }}
            />
          )}
        </Form.Group>
      </Form>
    </Box>
  );
}

export default AccountCard;
