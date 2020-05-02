import React, { useState, useEffect, memo } from "react";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import useStyles from "./style";
import { actSearchMovie, actSearching } from "./../../redux/actions/index";

const SearchMovie = (props) => {
  const classes = useStyles();
  const [focus, setFocus] = useState(false);
  const [keyword, setKeyword] = useState("");
  let { listSearch, searchMovie, notFound, isSearching, searching } = props;

  const handleChange = (e) => {
    setKeyword(e.target.value);
    searching();
  };

  useEffect(() => {
    // if this effect not run again, it wait 300ms and call API later
    const timeout = setTimeout(() => {
      searchMovie(keyword);
    }, 300);
    // if this effect run again, because `keyword` changed, we remove the previous timeout
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [keyword]);

  const renderListMovie = () => {
    if (isSearching) {
      return (
        <Box className={classes.loading}>
          <Spinner animation="border" />
        </Box>
      );
    }
    if (!keyword) {
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="80px"
          fontSize="16px"
        >
          Nhập tên phim cần tìm
        </Box>
      );
    }
    if (notFound) {
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="80px"
          fontSize="16px"
        >
          Không tìm thấy phim phù hợp
        </Box>
      );
    }
    return listSearch.map((movie) => {
      return (
        <Box
          component={Link}
          to={`/detail-movie/${movie.maPhim}`}
          className="result-item"
        >
          <img src={movie.hinhAnh} alt={movie.biDanh} />
          <Box>
            <span>{movie.tenPhim}</span>
          </Box>
        </Box>
      );
    });
  };

  return (
    <Box maxWidth="300px" position="relative">
      <Box component={InputGroup} className={`${classes.search}`}>
        <InputGroup.Prepend className={`${focus && "focus"}`}>
          <InputGroup.Text>
            <SearchIcon />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Tìm kiếm phim"
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </Box>
      <Box className={`${classes.result} ${focus && classes.show}`}>
        {renderListMovie()}
      </Box>
    </Box>
  );
};

///////////// Connect with Redux ////////////////
const mapStateToProps = (state) => {
  return {
    listSearch: state.movieReducer.listSearch,
    notFound: state.movieReducer.notFound,
    isSearching: state.movieReducer.isSearching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovie: (value) => {
      dispatch(actSearchMovie(value));
    },
    searching: () => {
      dispatch(actSearching());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SearchMovie));
