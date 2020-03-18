import React, { useState, useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { actOnSearch } from "./../../redux/actions/index";
import useStyles from "./style";

const Search = props => {
  const classes = useStyles();
  const [focus, setFocus] = useState(false);

  // ComponentWillUnmount
  useEffect(() => {
    return () => {
      props.onSearch("")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Box
      component={InputGroup}
      className={`${classes.search} ${focus && classes.searchFocus}`}
    >
      <InputGroup.Prepend>
        <InputGroup.Text>
          <SearchIcon />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Tìm Kiếm Phim"
        onChange={e => {
          props.onSearch(e.target.value);
        }}
        onFocus={() => {
          setFocus(!focus);
        }}
        onBlur={() => {
          setFocus(!focus);
        }}
      />
    </Box>
  );
};

///////////// Connect with Redux ////////////////
const mapDispatchToProps = dispatch => {
  return {
    onSearch: keyword => {
      dispatch(actOnSearch(keyword));
    }
  };
};

export default connect(null, mapDispatchToProps)(Search);
