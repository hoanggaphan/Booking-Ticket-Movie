import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { Card } from "react-bootstrap";
import StarRating from "../star-rating/star-rating";
import {
  FavoriteBorder,
  Favorite,
  ChatBubbleOutline,
} from "@material-ui/icons";
import { connect } from "react-redux";
import { actPutCommentAPI, actShowLogin } from "./../../redux/actions/index";
import MyAvatar from "../avatar/avatar";
import useStyles from "./style";

function Comment(props) {
  const classes = useStyles();
  const { comment, putCommentAPI, user, showLogin } = props;
  const [like, setLike] = useState(comment.like);
  const [status, setStatus] = useState({ like: false, comment: false });
  const [value, setValue] = useState("");
  const [visibile, setVisible] = useState({ reply: 2, comment: 4 });

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
        putCommentAPI(comment.id, comment);
      } else if (item && !item.liked) {
        setStatus({ ...status, like: true });
        setLike(like + 1);
        comment.like = like + 1;
        comment.danhSachLike[index].liked = true;
        putCommentAPI(comment.id, comment);
      } else {
        setStatus({ ...status, like: true });
        setLike(like + 1);
        comment.like = like + 1;
        const cloneUser = { taiKhoan: user.taiKhoan, liked: true };
        comment.danhSachLike = [...comment.danhSachLike, cloneUser];
        putCommentAPI(comment.id, comment);
      }
    } else {
      showLogin(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.which === 13 && value) {
      if (user) {
        const userReply = { hoTen: user.hoTen, message: value };
        comment.danhSachTraLoi.unshift(userReply);
        putCommentAPI(comment.id, comment);
        setValue("");
        return;
      }
      showLogin(true);
    }
  };

  useEffect(() => {
    if (user) {
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
            <MyAvatar user={comment} />
            <Box ml="8px">
              <span className="name">{comment.hoTen}</span>
              <span className="time">10 phút trước</span>
            </Box>
          </Box>
          <Box className="vote">
            <p className="vote-txt">{comment.votes}</p>
            <StarRating votes={10} xs={{star1: "10px", star2: "10px"}} />
          </Box>
        </Card.Header>
        <Card.Body>
          <Card.Text>{comment.binhLuan}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {status.like && user ? (
            <Box className="review-box like-box" onClick={handleLikeAmount}>
              <Favorite className="icon" />
              <span>{like} Thích</span>
            </Box>
          ) : (
            <Box className="review-box like-box" onClick={handleLikeAmount}>
              <FavoriteBorder className="icon" />
              <span>{like} Thích</span>
            </Box>
          )}

          <Box className="review-box comment-box" onClick={() => setStatus({ ...status, comment: true })}>
            <ChatBubbleOutline className="icon" />
            <span>
              {comment.danhSachTraLoi.length} Bình Luận
            </span>
          </Box>
        </Card.Footer>
        <Box className="card-expand">
          {status.comment && (
            <>
              <Box className="reply">
                <MyAvatar user={user} />
                <input
                  className="reply-input"
                  placeholder="Viết bình luận..."
                  value={value}
                  onChange={e => setValue(e.target.value)}
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
                {comment.danhSachTraLoi.length > 0 &&
                  visibile.reply < comment.danhSachTraLoi.length && (
                    <Box className="reply-more" onClick={() => setVisible({ ...visibile, reply: visibile.reply + 3 })}>
                      Xem thêm bình luận
                    </Box>
                  )}
              </Box>
            </>
          )}
        </Box>
      </Card>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    putCommentAPI: (id, comment) => {
      dispatch(actPutCommentAPI(id, comment));
    },
    showLogin: (status) => {
      dispatch(actShowLogin(status));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
