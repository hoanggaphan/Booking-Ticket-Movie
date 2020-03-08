import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import useStyles from "./style";
import { Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { actOnSearch } from "./../../redux/actions/index";
function Search(props) {
  const classes = useStyles();
  console.log(classes)
  return (
    <Box component={InputGroup} className={classes.search}>
      <FormControl
        placeholder="Tìm Kiếm Phim"
        aria-label="Tìm Kiếm Phim"
        aria-describedby="Tìm Kiếm Phim"
        onKeyUp={e => {
          props.onSearch(e.target.value);
        }}
      />
      <InputGroup.Append>
        <InputGroup.Text id="search">
          <SearchIcon />
        </InputGroup.Text>
      </InputGroup.Append>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: keyword => {
      dispatch(actOnSearch(keyword));
    }
  };
};

export default connect(null, mapDispatchToProps)(Search);
