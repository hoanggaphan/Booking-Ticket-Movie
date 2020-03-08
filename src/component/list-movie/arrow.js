import React from 'react'
import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import useStyles from "./style";

function NextArrow(props) {
    const classes = useStyles();
    const { onClick } = props;
    return (
      <IconButton size="small" onClick={onClick} className={classes.nextArrow}>
        <NavigateNext className={classes.iconArrow} />
      </IconButton>
    );
  }
  
  function PrevArrow(props) {
    const classes = useStyles();
    const { onClick } = props;
    return (
      <IconButton size="small" onClick={onClick} className={classes.prevArrow}>
        <NavigateBefore className={classes.iconArrow} />
      </IconButton>
    );
  }

export {NextArrow, PrevArrow};