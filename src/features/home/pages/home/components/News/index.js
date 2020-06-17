import { Box, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import useStyles from "./News.styles";

News.propTypes = {
  list: PropTypes.array.isRequired,
};

News.defaultProps = {
  list: [],
};

function News({ list }) {
  const classes = useStyles();
  const [visible, setVisible] = useState(8);
  let count = useRef(0);

  const renderGrid = () =>
    list.slice(0, visible).map((data, index) => {
      if (count.current === 8) count.current = 0;

      if (count.current < 2) {
        count.current++;
        return (
          <Grid
            key={index}
            className={`${classes.gridItem} ${classes.floatLeft}`}
            item
            sm={6}
          >
            <div className={classes.thumnail__general}>
              <img src={data.hinhAnh} alt={data.title} />
            </div>
            <p className={classes.title}>{data.tieuDe}</p>
            <p className={classes.description}>{data.moTa}</p>
          </Grid>
        );
      }

      if (count.current < 4) {
        count.current++;
        return (
          <Grid
            key={index}
            className={`${classes.gridItem} ${classes.floatLeft}`}
            item
            sm={4}
          >
            <div className={classes.thumnail__general}>
              <img src={data.hinhAnh} alt={data.title} />
            </div>
            <p className={classes.title}>{data.tieuDe}</p>
            <p className={classes.description}>{data.moTa}</p>
          </Grid>
        );
      }

      count.current++;
      return (
        <Grid
          key={index}
          className={`${classes.gridItemSmall} ${classes.floatLeft}`}
          item
          sm={4}
        >
          <Box display="flex">
            <div className={classes.thumnail__small}>
              <img src={data.hinhAnh} alt={data.title} />
            </div>
            <p className={classes.title}>{data.tieuDe}</p>
          </Box>
        </Grid>
      );
    });

  const renderSkeleton = () => {
    return [...Array(2)].map((item, index) => (
      <Grid
        key={index}
        className={`${classes.gridItem} ${classes.floatLeft}`}
        item
        sm={6}
      >
        <Skeleton variant="rect" className={classes.thumnail__general} />
        <Skeleton variant="text" width="100%"  />
        <Skeleton variant="text" width="70%"  />
      </Grid>
    ));
  };

  const handleVisibleClick = () => {
    setVisible(visible + 8);
  };

  return (
    <>
      {list.length ? renderGrid() : renderSkeleton()}

      <div className={classes.clear}></div>

      {visible < list.length ? (
        <Box textAlign="center" width="100%">
          <Button variant="outlined" onClick={handleVisibleClick}>
            XEM THÊM
          </Button >
        </Box>
      ) : null}
    </>
  );
}

export default memo(News);
