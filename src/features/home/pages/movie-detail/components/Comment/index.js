import Box from "@material-ui/core/Box";
import {
  ChatBubbleOutline,
  Favorite,
  FavoriteBorder,
} from "@material-ui/icons";
import Skeleton from "@material-ui/lab/Skeleton";
import MyAvatar from "common/Avatar";
import RatingStar from "common/RatingStar";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { actShowLogin, actUpdateComment } from "redux/actions/user";
import useStyles from "./Comment.styles";

function Comment(props) {
  const { comment } = props;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  const classes = useStyles();
  const [like, setLike] = useState(0);
  const [status, setStatus] = useState({ like: false, comment: false });
  const [value, setValue] = useState("");
  const [visibile, setVisible] = useState({ reply: 2, comment: 4 });

  useEffect(() => {
    if (comment) {
      setLike(comment.like);
    }
  }, [comment]);

  const checkUserLiked = (user) => {
    return comment.danhSachLike.find((item) => item.taiKhoan === user.taiKhoan);
  };

  const handleLikeAmount = () => {
    if (user) {
      const item = checkUserLiked(user);
      const index = comment.danhSachLike.findIndex(
        (item) => item.taiKhoan === user.taiKhoan
      );
      if (item && item.liked) {
        setStatus({ ...status, like: false });
        setLike(like - 1);
        comment.like = like - 1;
        comment.danhSachLike[index].liked = false;
        dispatch(actUpdateComment(comment.id, comment));
      } else if (item && !item.liked) {
        setStatus({ ...status, like: true });
        setLike(like + 1);
        comment.like = like + 1;
        comment.danhSachLike[index].liked = true;
        dispatch(actUpdateComment(comment.id, comment));
      } else {
        setStatus({ ...status, like: true });
        setLike(like + 1);
        comment.like = like + 1;
        const cloneUser = { taiKhoan: user.taiKhoan, liked: true };
        comment.danhSachLike = [...comment.danhSachLike, cloneUser];
        dispatch(actUpdateComment(comment.id, comment));
      }
    } else {
      dispatch(actShowLogin(true));
    }
  };

  const handleKeyPress = (e) => {
    if (e.which === 13 && value) {
      if (user) {
        const userReply = { hoTen: user.hoTen, message: value, hinhAnh: "" };
        comment.danhSachTraLoi.unshift(userReply);
        dispatch(actUpdateComment(comment.id, comment));
        setValue("");
        return;
      }
      dispatch(actShowLogin(true));
    }
  };

  useEffect(() => {
    if (user && comment) {
      // kiểm tra localstorage và store coi đã like chưa
      const item = checkUserLiked(user);
      return item && setStatus({ ...status, like: item.liked });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Box className={classes.root}>
      <Card>
        <Card.Header>
          <Box display="flex">
            {comment ? (
              <MyAvatar user={comment} />
            ) : (
              <Skeleton width="33px" height="33px" variant="rect" />
            )}
            <Box ml="8px">
              {comment ? (
                <>
                  <span className="name">{comment.hoTen}</span>
                  <span className="time">10 phút trước</span>
                </>
              ) : (
                <Skeleton width="70px" variant="text" />
              )}
            </Box>
          </Box>
          <Box className="vote">
            {comment ? (
              <>
                <p className="vote-txt">{comment.votes}</p>
                <RatingStar votes={10} xs={{ star1: "10px", star2: "10px" }} />
              </>
            ) : (
              <Skeleton variant="rect" width="40px" height="40px" />
            )}
          </Box>
        </Card.Header>
        <Card.Body>
          {comment ? (
            <Card.Text>{comment.binhLuan}</Card.Text>
          ) : (
            <>
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="50%" />
            </>
          )}
        </Card.Body>
        <Card.Footer>
          {status.like && user ? (
            <Box className="review-box like-box" onClick={handleLikeAmount}>
              {comment ? (
                <>
                  <Favorite className="icon" />
                  <span>{like} Thích</span>
                </>
              ) : (
                <Skeleton variant="rect" width="100px" />
              )}
            </Box>
          ) : (
            <Box className="review-box like-box" onClick={handleLikeAmount}>
              {comment ? (
                <>
                  <FavoriteBorder className="icon" />
                  <span>{like} Thích</span>
                </>
              ) : (
                <Skeleton variant="rect" width="100px" />
              )}
            </Box>
          )}

          <Box
            className="review-box comment-box"
            onClick={() => setStatus({ ...status, comment: true })}
          >
            {comment ? (
              <>
                <ChatBubbleOutline className="icon" />
                <span>{comment.danhSachTraLoi.length} Bình Luận</span>
              </>
            ) : (
              <Skeleton variant="rect" width="100px" />
            )}
          </Box>
        </Card.Footer>
        {comment && status.comment && (
          <Box className="card-expand">
            <>
              <Box className="reply">
                <MyAvatar user={user} />
                <input
                  className="reply-input"
                  placeholder="Viết bình luận..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </Box>
              <Box className="reply-list">
                {comment.danhSachTraLoi
                  .slice(0, visibile.reply)
                  .map((item, index) => {
                    return (
                      <Box key={index} className="reply-item">
                        <MyAvatar user={item} />
                        <Box className="reply-box">
                          <span className="reply-name">{item.hoTen}</span>
                          <span className="reply-message">{item.message}</span>
                        </Box>
                      </Box>
                    );
                  })}
              </Box>
              {comment.danhSachTraLoi.length > 0 &&
                visibile.reply < comment.danhSachTraLoi.length && (
                  <Box
                    className="reply-more"
                    onClick={() =>
                      setVisible({ ...visibile, reply: visibile.reply + 3 })
                    }
                  >
                    Xem thêm bình luận
                  </Box>
                )}
            </>
          </Box>
        )}
      </Card>
    </Box>
  );
}

export default Comment;
