import { Avatar, Box, Button, IconButton } from "@material-ui/core";
import { Close, StarBorder } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import RatingStar from "common/RatingStar";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { actPostCommentAPI } from "redux/actions/comment";
import { actShowLogin } from "redux/actions/user";
import useStyles from "./styles";

function CommentForm(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { maPhim } = useParams();
  const { user, isLogin, showLogin, postCommentAPI } = props;
  const [rating, setrating] = useState(5);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);
  const handleClose = () => {
    setError(false);
    showLogin(false);
  };
  const handleShow = () => {
    setError(false);
    showLogin(true);
  };

  useEffect(() => {
    // bỏ class open của react-bootstrap
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "unset";
    document.body.style.paddingRight = "unset";
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "unset";
      document.body.classList.remove("modal-open");
    };
  }, [isLogin]);

  useEffect(() => {
    return () => {
      showLogin(false);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setComment("");
    setrating(5);
    // eslint-disable-next-line
  }, [maPhim]);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const addComment = () => {
    if (comment) {
      const newUser = {
        hoTen: user.hoTen,
        votes: rating,
        hinhAnh: "",
        like: 0,
        binhLuan: comment,
        danhSachTraLoi: [],
        danhSachLike: [],
      };
      postCommentAPI(newUser);
      setComment("");
      setError(false);
      return;
    }
    setError(true);
  };

  return (
    <>
      <Box onClick={handleShow} className={classes.form}>
        <Box display="flex" alignItems="center">
          {user ? (
            <Avatar className="avatar">
              {user.hoTen.slice(0, 1).toUpperCase()}
            </Avatar>
          ) : (
            <Avatar className="avatar" />
          )}
          <span className="text">Bạn nghĩ gì về phim này?</span>
        </Box>
        <Box className="star">
          <RatingStar
            votes={10}
            xs={{ star1: "20px", star2: "20px" }}
            sm={{ star1: "25px", star2: "25px" }}
          />
        </Box>
      </Box>
      {user ? (
        <Modal
          className={classes.modal}
          show={isLogin}
          centered
          onHide={handleClose}
          animation={false}
        >
          <Modal.Header>
            <IconButton onClick={handleClose} className="close" size="medium">
              <Close />
            </IconButton>
            <p className="rating">{rating}</p>
            <Box textAlign="center">
              <Rating
                onChange={(e) => setrating(e.target.value * 2)}
                value={rating / 2}
                precision={0.5}
                className="rating"
                emptyIcon={<StarBorder fontSize="inherit" />}
              />
            </Box>
          </Modal.Header>
          <Modal.Body>
            <textarea
              placeholder="Nói cho mọi người biết bạn nghĩ gì về phim này..."
              className="comment"
              value={comment}
              onChange={handleChange}
            ></textarea>
          </Modal.Body>
          {error && (
            <Box className="modal-error">
              Hãy cho PHIMHUB biết suy nghĩ của bạn
            </Box>
          )}
          <Modal.Footer>
            <Button className="form-btn" onClick={addComment}>
              Đăng
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal
          className={classes.modal}
          show={isLogin}
          centered
          onHide={handleClose}
          animation={false}
          size="sm"
        >
          <Modal.Header>
            <IconButton onClick={handleClose} className="close" size="medium">
              <Close />
            </IconButton>
            <Box textAlign="center" component="h5">
              Bạn cần phải đăng nhập
            </Box>
          </Modal.Header>
          <Modal.Footer>
            <Button
              onClick={() => {
                history.push({
                  pathname: "/user/login",
                  state: { from: location },
                });
              }}
              className="form-btn"
            >
              Đăng nhập
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    isLogin: state.userReducer.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLogin: (status) => {
      dispatch(actShowLogin(status));
    },
    postCommentAPI: (comment) => {
      dispatch(actPostCommentAPI(comment));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
