import { Box, Button } from "@material-ui/core";
import React, { memo, useState } from "react";
import CommentItem from "../CommentItem";
import useStyles from "./CommentList.styles";

function CommentList({ listComment }) {
  const classes = useStyles();
  const [visible, setVisible] = useState(5);

  return (
    <Box className={classes.root}>
      {(!listComment ? [...Array(4)] : [...listComment])
        .reverse()
        .slice(0, visible)
        .map((comment, index) => (
          <CommentItem key={comment ? comment.id : index} comment={comment} />
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

export default memo(CommentList);
