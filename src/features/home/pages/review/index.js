import { Box, Container, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actGetReviewDetail } from "redux/actions/news";
import useStyles from "./review.styles";

export default function Review() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const reviewDetail = useSelector((state) => state.newsReducer.reviewDetail);

  useEffect(() => {
    dispatch(actGetReviewDetail(id));
    // eslint-disable-next-line
  }, []);

  return (
    <Container className={classes.content} maxWidth="md">
      {reviewDetail ? (
        <>
          {" "}
          <Typography variant="h1" className={classes.title}>
            {reviewDetail.tieuDe}
          </Typography>
          <Box
            textAlign="justify"
            marginBottom="40px"
            dangerouslySetInnerHTML={{ __html: reviewDetail.content }}
          />{" "}
        </>
      ) : (
        <Box marginY="50px">
          <Skeleton variant="text" width="100%" height="20px" />
          <Skeleton variant="text" width="100%" height="20px" />
          <Skeleton variant="text" width="100%" height="20px" />
          <Skeleton variant="text" width="100%" height="20px" />
          <Skeleton variant="text" width="70%" height="20px" />
        </Box>
      )}
    </Container>
  );
}
