import { Box, Button } from "@material-ui/core";
import Comment from "../Comment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actGetCommentList } from "redux/actions/user";
import useStyles from "./CommentList.styles";

function CommentList() {
  const dispatch = useDispatch();
  const listComment = useSelector((state) => state.userReducer.listComment);

  const classes = useStyles();
  const [visible, setVisible] = useState(5);
  const { maPhim } = useParams();

  useEffect(() => {
    dispatch(actGetCommentList());
    // eslint-disable-next-line
  }, [maPhim]);

  return (
    <Box className={classes.root}>
      {(!listComment ? [...Array(4)] : [...listComment])
        .reverse()
        .slice(0, visible)
        .map((comment, index) => (
          <Comment key={comment ? comment.id : index} comment={comment} />
        ))}
      {listComment && visible < listComment.length && (
        <Button
          className="more-btn"
          variant="outlined"
          onClick={() => setVisible(visible + 4)}
        >
          XEM THÊM
        </Button>
      )}
    </Box>
  );
}

export default CommentList;
