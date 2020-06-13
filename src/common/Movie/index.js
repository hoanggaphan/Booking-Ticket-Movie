import Sticker from "common/Sticker";
import useFormatDate from "hooks/useFormatDate";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import useStyles from "./Movie.styles";

Movie.propTypes = {
  item: PropTypes.object.isRequired,
  color: PropTypes.string,
};

Movie.defaultProps = {
  color: "warning",
};

function Movie(props) {
  const classes = useStyles(props);
  const { item, color } = props;
  const d = useFormatDate(item.ngayKhoiChieu);

  return (
    <div className={classes.movie}>
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
            <div>MUA VÉ</div>
          </div>
        </div>

        <h4 className={classes.movie__title}>{item.tenPhim}</h4>
      </Link>
    </div>
  );
}

export default memo(Movie);
