import React, {useState} from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import useStyles from "./style";

const SearchMovie = props => {
  const classes = useStyles();
  const [focus, setFocus] = useState(false);
  const [keyword, setKeyword] = useState("");
  let { listMovie } = props;

  const renderListMovie = () => {
    listMovie = listMovie.filter(movie=> movie.tenPhim.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
    if(listMovie.length < 1)  return <Box textAlign="center" padding="30px 10px" fontSize="16px">Không tìm thấy phim phù hợp</Box>
    return listMovie.map(movie => {
      return <Box component={Link} to={`/detail-movie/${movie.maPhim}`} className="result-item">
        <img src={movie.hinhAnh} alt={movie.biDanh} />
        <Box><span>{movie.tenPhim}</span></Box>
      </Box>;
    });
  };

  return (
    <Box maxWidth="300px" position="relative">
      <Box
        component={InputGroup}
        className={`${classes.search}`}
        display={{ xs: "none", md: "flex" }}
      >
        <InputGroup.Prepend className={`${focus && 'focus'}`}>
          <InputGroup.Text>
            <SearchIcon />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Tìm kiếm phim"
          onChange={e => setKeyword(e.target.value)}
          onFocus={() => setFocus(true)} 
          onBlur={() => setFocus(false)} 
        />
      </Box>
      <Box className={`${classes.result} ${focus && classes.show}`}>
        {keyword ? renderListMovie() : <Box textAlign="center" padding="30px 10px" fontSize="16px">Nhập tên phim cần tìm</Box>}
      </Box>
    </Box>
  );
};

///////////// Connect with Redux ////////////////
const mapStateToProps = state => {
  return {
    listMovie: state.movieReducer.listMovie
  };
};

export default connect(mapStateToProps, null)(SearchMovie);