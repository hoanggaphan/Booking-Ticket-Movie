import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetCommentList } from "redux/actions/user";
import CommentForm from "../CommentForm";
import CommentList from "../CommentList";

function Comment() {
  const dispatch = useDispatch();
  const listComment = useSelector((state) => state.userReducer.listComment);

  useEffect(() => {
    dispatch(actGetCommentList());
    // eslint-disable-next-line
  }, []);

  return (
    <Box mx="auto" maxWidth="580px">
      <CommentForm />
      <CommentList listComment={listComment} />
    </Box>
  );
}

export default Comment;
