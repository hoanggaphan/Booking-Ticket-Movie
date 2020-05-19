import { Box, Button } from "@material-ui/core";
import Comment from "features/home/pages/detail-movie/components/Comment";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { actGetListCommentAPI } from "redux/actions/comment";
import shortid from "shortid";
import useStyles from "./styles";

function CommentList(props) {
  const classes = useStyles();
  const { listComment, getListCommentAPI, isGettingComment } = props;
  const [visible, setVisible] = useState(5);
  const { maPhim } = useParams();

  useEffect(() => {
    getListCommentAPI();
    // eslint-disable-next-line
  }, [maPhim]);

  return (
    <Box className={classes.root}>
      {(isGettingComment ? [...Array(4)] : [...listComment])
        .reverse()
        .slice(0, visible)
        .map((comment) => (
          <Comment key={shortid.generate()} comment={comment} />
        ))}
      {visible < listComment.length && (
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
    isGettingComment: state.userReducer.isGettingComment,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
