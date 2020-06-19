import { Box, Container, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actGetFilm24hDetail } from "redux/actions/news";
import useStyles from "./film24h.styles";

export default function Film24h() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const film24hDetail = useSelector((state) => state.newsReducer.film24hDetail);

  useEffect(() => {
    dispatch(actGetFilm24hDetail(id));
    // eslint-disable-next-line
  }, []);

  return (
    <Container className={classes.content} maxWidth="md">
      {film24hDetail ? (
        <>
          {" "}
          <Typography variant="h1" className={classes.title}>
            {film24hDetail.tieuDe}
          </Typography>
          <Box
            textAlign="justify"
            marginBottom="40px"
            dangerouslySetInnerHTML={{ __html: film24hDetail.content }}
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
