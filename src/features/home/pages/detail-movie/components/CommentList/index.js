import { Box, Button } from "@material-ui/core";
import Comment from "features/home/pages/detail-movie/components/Comment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actGetListCommentAPI } from "redux/actions/comment";
import shortid from "shortid";
import useStyles from "./styles";

function CommentList() {
  const dispatch = useDispatch();
  const listComment = useSelector((state) => state.userReducer.listComment);

  const classes = useStyles();
  const [visible, setVisible] = useState(5);
  const { maPhim } = useParams();

  useEffect(() => {
    dispatch(actGetListCommentAPI());
    // eslint-disable-next-line
  }, [maPhim]);

  return (
    <Box className={classes.root}>
      {(!listComment ? [...Array(4)] : [...listComment])
        .reverse()
        .slice(0, visible)
        .map((comment) => (
          <Comment key={shortid.generate()} comment={comment} />
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
