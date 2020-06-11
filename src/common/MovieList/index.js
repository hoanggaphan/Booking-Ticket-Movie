import PropTypes from "prop-types";
import React from "react";
import useStyles from "./MovieList.styles";
import Movie from 'common/Movie'

MovieList.propTypes = {
  movieList: PropTypes.array.isRequired,

  title: PropTypes.string,
  color: PropTypes.string,
};

MovieList.defaultProps = {
  title: "",
  color: "warning",
};

export default function MovieList(props) {
  const { title, movieList, color } = props;
  const classes = useStyles({ color });

  const renderMovieList = () => {
    return movieList.map((movie) => (
      <Movie key={movie.maPhim} movie={movie} color={color} />
    ));
  };

  return (
    <>
      <div className={classes.movieList__title}>
        <a href="#a">{title}</a>
      </div>

      <div className={classes.movieList__container}>{renderMovieList()}</div>
    </>
  );
}
