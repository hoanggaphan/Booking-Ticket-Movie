import { Button } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Sticker from "common/Sticker";
import formatDate from "helpers/useFormatDate";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import useStyles from "./Movie.styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

Movie.propTypes = {
  color: PropTypes.string,
};

Movie.defaultProps = {
  color: "warning",
};

function Movie(props) {
  const classes = useStyles();
  const { item, color } = props;
  const d = formatDate(item && item.ngayKhoiChieu);

  return (
    <div className={classes.movie}>
      {item ? (
        <Link to={`/home/movie-detail/${item.maPhim}`}>
          <div className={classes.movie__thumbnail}>
            <img
              src={item.hinhAnh}
              alt={item.tenPhim}
              className={classes.movie__img}
            />

            <div className={classes.movie__date}>
              <Sticker text={`${d.date}/${d.month}`} color={color} />
            </div>

            <div className={classes.movie__overplay}>
              <Button
                variant="outlined"
                startIcon={<ShoppingCartIcon fontSize="small" />}
              >
                Mua Vé
              </Button>
            </div>
          </div>

          <h4 className={classes.movie__title}>{item.tenPhim}</h4>
        </Link>
      ) : (
        <Skeleton variant="rect" className={classes.movie__thumbnail} />
      )}
    </div>
  );
}

export default memo(Movie);
