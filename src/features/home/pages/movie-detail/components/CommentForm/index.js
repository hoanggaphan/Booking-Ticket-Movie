import { Avatar, Box, Button, IconButton } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { Close, StarBorder } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import RatingStar from "common/RatingStar";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { actAddComment, actShowLogin } from "redux/actions/user";
import useStyles from "./CommentForm.styles";

function CommentForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const isLogin = useSelector((state) => state.userReducer.isLogin);

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { maPhim } = useParams();

  const [rating, setrating] = useState(5);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const handleClose = () => {
    setError(false);
    dispatch(actShowLogin(false));
  };

  const handleShow = () => {
    setError(false);
    dispatch(actShowLogin(true));
  };

  useEffect(() => {
    return () => {
      dispatch(actShowLogin(false));
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
      dispatch(actAddComment(newUser));
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
        <Modal open={isLogin} onClose={handleClose}>
          <div className={classes.modalContainer}>
            <Box padding="1rem">
              <Box display="flex" justifyContent="flex-end">
                <IconButton onClick={handleClose} size="medium">
                  <Close />
                </IconButton>
              </Box>
              <p className={classes.ratingText}>{rating}</p>
              <Box textAlign="center">
                <Rating
                  className={classes.ratingStar}
                  name="movie-rating"
                  onChange={(e) => setrating(e.target.value * 2)}
                  value={rating / 2}
                  precision={0.5}
                  emptyIcon={<StarBorder fontSize="inherit" />}
                />
              </Box>
            </Box>
            <Box padding="1rem">
              <textarea
                value={comment}
                onChange={handleChange}
                className={classes.textArea}
                placeholder="Nói cho mọi người biết bạn nghĩ gì về phim này..."
              ></textarea>
            </Box>
            {error && (
              <Box className={classes.error}>
                Hãy cho PHIMHUB biết suy nghĩ của bạn
              </Box>
            )}
            <Box textAlign="center" padding=".75rem">
              <Button className={classes.button} onClick={addComment}>
                Đăng
              </Button>
            </Box>
          </div>
        </Modal>
      ) : (
        <Modal open={isLogin} onClose={handleClose}>
          <div className={classes.modalContainerSm}>
            <Box padding="1rem">
              <Box display="flex" justifyContent="flex-end">
                <IconButton onClick={handleClose} size="medium">
                  <Close />
                </IconButton>
              </Box>
              <Box component="h5" textAlign="center" margin="0">
                Bạn cần phải đăng nhập
              </Box>
            </Box>

            <Box padding=".75rem" textAlign="center">
              <Button
                onClick={() => {
                  history.push({
                    pathname: "/user/login",
                    state: { from: location },
                  });
                }}
                className={classes.button}
              >
                Đăng nhập
              </Button>
            </Box>
          </div>
        </Modal>
      )}
    </>
  );
}

export default memo(CommentForm);
