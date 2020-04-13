import React, { useEffect, useState } from "react";
import { Box, Button } from "@material-ui/core";
import useStyles from "./style";
import Comment from "./../comment/comment";
import { connect } from "react-redux";
import { actGetListCommentAPI } from "./../../redux/actions/index";

function CommentList(props) {
  const classes = useStyles();
  const { listComment, getListCommentAPI } = props;
  const [visible, setVisible] = useState(5);

  useEffect(() => {
    getListCommentAPI();
    // eslint-disable-next-line
  }, []);

  return (
    <Box className={classes.root}>
      {[...listComment]
        .reverse()
        .slice(0, visible)
        .map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      {visible < listComment.length && (
        <Button className="more-btn" variant="outlined" onClick={() => setVisible(visible + 4)}>XEM THÊM</Button>
      )}
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListCommentAPI: () => {
      dispatch(actGetListCommentAPI());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    listComment: state.userReducer.listComment,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
