import { Box, Container, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actGetPromotionDetail } from "redux/actions/news";
import useStyles from "./promotion.styles";

export default function Promotion() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const promotionDetail = useSelector(
    (state) => state.newsReducer.promotionDetail
  );

  useEffect(() => {
    dispatch(actGetPromotionDetail(id));
    // eslint-disable-next-line
  }, []);

  return (
    <Container className={classes.content} maxWidth="md">
      {promotionDetail ? (
        <>
          {" "}
          <Typography variant="h1" className={classes.title}>
            {promotionDetail.tieuDe}
          </Typography>
          <Box
            textAlign="justify"
            marginBottom="40px"
            dangerouslySetInnerHTML={{ __html: promotionDetail.content }}
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
